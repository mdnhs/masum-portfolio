"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "./ui/button";

const ContactUs = () => {
  const formRef = useRef(null);
  const [formStatus, setFormStatus] = useState("");

  const sendEmail = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (formRef.current) {
      emailjs
        .sendForm(
          "service_4xckkqc", // Replace with your EmailJS Service ID
          "template_c4ei0ie", // Replace with your EmailJS Template ID
          formRef.current,
          "6-KZkXOHH9nYtYMDC" // Replace with your EmailJS User ID
        )
        .then(
          (result) => {
            console.log(result.text);
            setFormStatus("Message sent successfully!");
            // formRef.current.reset();
          },
          (error) => {
            console.log(error.text);
            setFormStatus("Failed to send message.");
          }
        );
    } else {
      setFormStatus("Form could not be sent.");
    }
  };

  return (
    <div
      data-aos="zoom-in-down"
      className="grid grid-cols-2 bg-white dark:bg-slate-900 gap-6 p-5 lg:p-10 shadow-2xl"
    >
      <form
        ref={formRef}
        onSubmit={sendEmail}
        className="col-span-2 grid grid-cols-2 gap-6"
      >
        <input
          type="text"
          name="first_name"
          placeholder="First Name*"
          className="col-span-1 border-b-2 border-gray-500 focus:border-blue-600 outline-none py-2"
          required
        />
        <input
          type="text"
          name="last_name"
          placeholder="Last Name*"
          className="col-span-1 border-b-2 border-gray-500 focus:border-blue-600 outline-none py-2"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email*"
          className="col-span-2 border-b-2 border-gray-500 focus:border-blue-600 outline-none py-2"
          required
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject*"
          className="col-span-2 border-b-2 border-gray-500 focus:border-blue-600 outline-none py-2"
        />
        <textarea
          name="message"
          placeholder="Message*"
          className="col-span-2 border-b-2 border-gray-500 focus:border-blue-600 outline-none py-2 min-h-40"
          required
        />
        <Button
          type="submit"
          className="bg-blue-600 rounded-full font-semibold hover:bg-white hover:text-blue-600 hover:border-2 py-3 w-28 border-blue-600 dark:text-white hover:dark:text-blue-600"
        >
          Send
        </Button>
      </form>
      {formStatus && (
        <p className="col-span-2 mt-4 text-green-500">{formStatus}</p>
      )}
    </div>
  );
};

export default ContactUs;
