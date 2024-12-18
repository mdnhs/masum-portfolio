"use client";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Button } from "./ui/button";
import { motion } from "framer-motion"; // Importing Framer Motion

// Zod schema for form validation
const contactSchema = z.object({
  first_name: z.string().min(1, "First name is required"),
  last_name: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  subject: z.string().optional(),
  message: z.string().min(1, "Message is required"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const ContactUs = () => {
  const [formStatus, setFormStatus] = useState("");
  const [loading, setLoading] = useState(false);

  // useForm hook
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const sendEmail = () => {
    setLoading(true); // Start loader
    emailjs
      .sendForm(
        process.env.EMAILJS_SERVICE_ID!,
        process.env.EMAILJS_TEMPLATE_ID!,
        document.querySelector("form") as HTMLFormElement, // Using the form directly
        process.env.EMAILJS_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          setFormStatus("Message sent successfully!");
          setLoading(false); // Stop loader
          reset(); // Reset form after successful submission
        },
        (error) => {
          console.log(error.text);
          setFormStatus("Failed to send message.");
          setLoading(false); // Stop loader
        }
      );
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }} // Zoom-in effect
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-2 bg-white dark:bg-slate-900 gap-6 p-5 lg:p-10 shadow-2xl"
    >
      <form
        onSubmit={handleSubmit(sendEmail)}
        className="col-span-2 grid grid-cols-2 gap-6"
      >
        <motion.input
          type="text"
          placeholder="First Name*"
          className="col-span-1 border-b-2 border-gray-500 focus:border-blue-600 outline-none py-2"
          {...register("first_name")}
          initial={{ opacity: 0, y: -20 }} // Slide in from the top
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        />
        {errors.first_name && (
          <p className="text-red-500 col-span-2">{errors.first_name.message}</p>
        )}

        <motion.input
          type="text"
          placeholder="Last Name*"
          className="col-span-1 border-b-2 border-gray-500 focus:border-blue-600 outline-none py-2"
          {...register("last_name")}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        />
        {errors.last_name && (
          <p className="text-red-500 col-span-2">{errors.last_name.message}</p>
        )}

        <motion.input
          type="email"
          placeholder="Email*"
          className="col-span-2 border-b-2 border-gray-500 focus:border-blue-600 outline-none py-2"
          {...register("email")}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        />
        {errors.email && (
          <p className="text-red-500 col-span-2">{errors.email.message}</p>
        )}

        <motion.input
          type="text"
          placeholder="Subject"
          className="col-span-2 border-b-2 border-gray-500 focus:border-blue-600 outline-none py-2"
          {...register("subject")}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        />

        <motion.textarea
          placeholder="Message*"
          className="col-span-2 border-b-2 border-gray-500 focus:border-blue-600 outline-none py-2 min-h-40"
          {...register("message")}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        />
        {errors.message && (
          <p className="text-red-500 col-span-2">{errors.message.message}</p>
        )}

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }} // Button zoom effect
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Button
            type="submit"
            disabled={loading}
            className={`bg-blue-600 rounded-full font-semibold hover:bg-white hover:text-blue-600 hover:border-2 py-3 w-28 border-blue-600 dark:text-white hover:dark:text-blue-600 ${
              loading ? "cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Sending..." : "Send"}
          </Button>
        </motion.div>
      </form>
      {formStatus && (
        <motion.p
          className="col-span-2 mt-4 text-green-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          {formStatus}
        </motion.p>
      )}
    </motion.div>
  );
};

export default ContactUs;
