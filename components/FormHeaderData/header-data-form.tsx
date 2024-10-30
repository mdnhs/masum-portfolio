import React from "react";
import {
  useForm,
  FormProvider,
  Controller,
  useFormContext,
} from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import FileUpload from "../file-upload";
import { Button } from "../ui/button";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

// Define the validation schema using Zod
const schema = z.object({
  full_name: z.string().min(1, "Full name is required"),
  designation: z.string().min(1, "Designation is required"),
  social_one: z.string().url("Must be a valid URL").optional(),
  social_two: z.string().url("Must be a valid URL").optional(),
  social_three: z.string().url("Must be a valid URL").optional(),
  social_four: z.string().url("Must be a valid URL").optional(),
  greetings: z.string().min(1, "Greetings message is required"),
  bio_title: z.string().min(1, "Bio title is required"),
  bio_details: z.string().min(1, "Bio details are required"),
  files: z
    .array(
      z.object({
        name: z.string().min(1, "File name is required"),
        size: z.number().positive("File size must be greater than 0"),
      })
    )
    .min(1, "At least one file is required")
    .optional(),
});

const HeaderDataForm = () => {
  const methods = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data, "++==");
    // Handle form submission, e.g., send to API
  };

  return (
    <FormProvider {...methods}>
      <div className="max-w-screen-lg">
        <div className="bg-white dark:bg-slate-900 rounded-lg shadow-lg p-4 px-4 md:p-8 mb-6">
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <FormFields />
            <Button variant="default" className="md:col-span-4" type="submit">
              Submit
            </Button>
          </form>
        </div>
      </div>
    </FormProvider>
  );
};

// Separate component for form fields
const FormFields = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  const colors = ["red", "green", "blue", "orange", "violet"];

  const modules = {
    toolbar: [
      [{ font: [] }, { size: ["small", false, "large", "huge"] }],
      ["bold", "italic", "underline", "strike"],
      [{ color: colors }, { background: colors }],
      [{ script: "sub" }, { script: "super" }],
      [{ header: 1 }, { header: 2 }, "blockquote", "code-block"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      [{ direction: "rtl" }, { align: ["right", "center", "justify"] }],
      ["link", "image", "video", "formula"],
      ["clean"],
    ],
  };

  const formats = [
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "color",
    "background",
    "script",
    "header",
    "blockquote",
    "code-block",
    "list",
    "indent",
    "direction",
    "align",
    "link",
    "image",
    "video",
    "formula",
  ];

  return (
    <div className="grid gap-4 text-sm grid-cols-1 md:grid-cols-4">
      <div className="md:col-span-4 space-y-1">
        <label htmlFor="profile_picture">Avatar</label>
        <Controller
          name="files"
          control={control}
          render={({ field }) => (
            <FileUpload
              name={field.name}
              ref={field.ref} // Attach the ref if needed
              // You can directly pass other props as necessary
            />
          )}
        />
      </div>
      <div className="md:col-span-4">
        <label htmlFor="full_name">Full Name</label>
        <input
          {...control.register("full_name")}
          type="text"
          id="full_name"
          placeholder="Example: John Doe"
          className={`h-10 border mt-1 rounded px-4 w-full bg-gray-50 dark:bg-slate-700 truncate ${
            errors.full_name ? "border-red-500" : ""
          }`}
        />
        {errors.full_name && (
          <span className="text-red-500">{errors.full_name.message}</span>
        )}
      </div>
      <div className="md:col-span-4">
        <label htmlFor="designation">Designation</label>
        <input
          {...control.register("designation")}
          type="text"
          id="designation"
          placeholder="Example: Software Engineer"
          className={`h-10 border mt-1 rounded px-4 w-full bg-gray-50 dark:bg-slate-700 truncate ${
            errors.designation ? "border-red-500" : ""
          }`}
        />
        {errors.designation && (
          <span className="text-red-500">{errors.designation.message}</span>
        )}
      </div>
      <div className="md:col-span-2">
        <label htmlFor="social_one">GitHub Profile URL</label>
        <input
          {...control.register("social_one")}
          type="text"
          id="social_one"
          placeholder="Example: https://github.com/mdnhs"
          className={`h-10 border mt-1 rounded px-4 w-full bg-gray-50 dark:bg-slate-700 truncate ${
            errors.social_one ? "border-red-500" : ""
          }`}
        />
        {errors.social_one && (
          <span className="text-red-500">{errors.social_one.message}</span>
        )}
      </div>
      <div className="md:col-span-2">
        <label htmlFor="social_two">Facebook Profile URL</label>
        <input
          {...control.register("social_two")}
          type="text"
          id="social_two"
          placeholder="Example: https://facebook.com/srb47"
          className={`h-10 border mt-1 rounded px-4 w-full bg-gray-50 dark:bg-slate-700 truncate ${
            errors.social_two ? "border-red-500" : ""
          }`}
        />
        {errors.social_two && (
          <span className="text-red-500">{errors.social_two.message}</span>
        )}
      </div>
      <div className="md:col-span-2">
        <label htmlFor="social_three">LinkedIn Profile URL</label>
        <input
          {...control.register("social_three")}
          type="text"
          id="social_three"
          placeholder="Example: https://linkedin.com/mdnhs"
          className={`h-10 border mt-1 rounded px-4 w-full bg-gray-50 dark:bg-slate-700 truncate ${
            errors.social_three ? "border-red-500" : ""
          }`}
        />
        {errors.social_three && (
          <span className="text-red-500">{errors.social_three.message}</span>
        )}
      </div>
      <div className="md:col-span-2">
        <label htmlFor="social_four">Instagram Profile URL</label>
        <input
          {...control.register("social_four")}
          type="text"
          id="social_four"
          placeholder="Example: https://instagram.com/srb47"
          className={`h-10 border mt-1 rounded px-4 w-full bg-gray-50 dark:bg-slate-700 truncate ${
            errors.social_four ? "border-red-500" : ""
          }`}
        />
        {errors.social_four && (
          <span className="text-red-500">{errors.social_four.message}</span>
        )}
      </div>
      <div className="md:col-span-2">
        <label htmlFor="greetings">Greetings Message</label>
        <input
          {...control.register("greetings")}
          type="text"
          id="greetings"
          placeholder="Example: Hey! There."
          className={`h-10 border mt-1 rounded px-4 w-full bg-gray-50 dark:bg-slate-700 truncate ${
            errors.greetings ? "border-red-500" : ""
          }`}
        />
        {errors.greetings && (
          <span className="text-red-500">{errors.greetings.message}</span>
        )}
      </div>
      <div className="md:col-span-2">
        <label htmlFor="bio_title">Bio Title</label>
        <input
          {...control.register("bio_title")}
          type="text"
          id="bio_title"
          placeholder="Example: My name's John Doe. A Software Engineer & A Tech Enthusiast."
          className={`h-10 border mt-1 rounded px-4 w-full bg-gray-50 dark:bg-slate-700 truncate ${
            errors.bio_title ? "border-red-500" : ""
          }`}
        />
        {errors.bio_title && (
          <span className="text-red-500">{errors.bio_title.message}</span>
        )}
      </div>
      <div className="md:col-span-4 space-y-1">
        <label htmlFor="bio_details">Bio Details</label>
        <Controller
          control={control}
          name="bio_details"
          render={({ field }) => (
            <ReactQuill
              {...field}
              modules={modules}
              formats={formats}
              className="border rounded-md"
              placeholder="Enter bio details here..."
            />
          )}
        />
        {errors.bio_details && (
          <span className="text-red-500">{errors.bio_details.message}</span>
        )}
      </div>
    </div>
  );
};

export default HeaderDataForm;
