"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChangeEvent, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";

// Import ReactQuill dynamically to avoid SSR issues
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

// Define schema using Zod for validation
const siteHeaderSchema = z.object({
  profilePicture: z.string().optional(),
  name: z.string().min(1, "Name is required"),
  designation: z.string().min(1, "Designation is required"),
  socials: z.object({
    gitHub: z.string().url("Must be a valid URL").optional(),
    facebook: z.string().url("Must be a valid URL").optional(),
    linkedIn: z.string().url("Must be a valid URL").optional(),
    instagram: z.string().url("Must be a valid URL").optional(),
  }),
  bioHeadings: z.string().min(1, "Bio Headings are required"),
  bioTitle: z.string().min(1, "Bio Title is required"),
  bioDetails: z.string().min(1, "Bio Details are required"),
});

type SiteHeaderData = z.infer<typeof siteHeaderSchema>;

const SiteHeaderForm = ({ selectedItem, setSelectedItem, onClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    getValues,
  } = useForm<SiteHeaderData>({
    resolver: zodResolver(siteHeaderSchema),
  });

  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const onImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setSelectedImage(null);
      setImagePreview(null);
    }
  };

  const onSubmit = async (formData: SiteHeaderData) => {
    const dataToSubmit = {
      id: selectedItem._id,
      ...formData,
      profilePicture: imagePreview,
    };

    const res = await fetch("/api/site-header", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataToSubmit),
    });

    if (res.ok) {
      const updatedItem = await res.json();
      console.log("Data updated:", updatedItem);
      setSelectedItem(null);
      onClose(false);
    } else {
      console.error("Failed to update data");
    }
  };

  useEffect(() => {
    if (selectedItem) {
      reset({
        ...selectedItem,
        socials: {
          gitHub: selectedItem.socials?.gitHub || "",
          facebook: selectedItem.socials?.facebook || "",
          linkedIn: selectedItem.socials?.linkedIn || "",
          instagram: selectedItem.socials?.instagram || "",
        },
      });
      setImagePreview(selectedItem.profilePicture);
    }
  }, [selectedItem, reset]);

  useEffect(() => {
    return () => {
      if (imagePreview) {
        URL.revokeObjectURL(imagePreview);
      }
    };
  }, [imagePreview]);

  const colors = ["red", "green", "blue", "orange", "violet"];

  const modules = {
    toolbar: [
      [{ font: [] }, { size: ["small", false, "large", "huge"] }], // Custom fonts and size
      ["bold", "italic", "underline", "strike"], // Text formatting options
      [{ color: colors }, { background: colors }], // Text color and background color
      [{ script: "sub" }, { script: "super" }], // Subscript/Superscript
      [{ header: 1 }, { header: 2 }, "blockquote", "code-block"], // Headers and blocks
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ], // Lists and indents
      [{ direction: "rtl" }, { align: ["right", "center", "justify"] }], // Text direction and alignment
      ["link", "image", "video", "formula"], // Media options
      ["clean"], // Clear formatting
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
    <div className="min-h-screen bg-gray-100 p-6">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white shadow-lg rounded-lg p-8 w-full lg:w-1/2 container space-y-6"
      >
        <h2 className="text-2xl text-black font-semibold text-center mb-4">
          {selectedItem ? "Edit Site Header Data" : "Add Site Header Data"}
        </h2>

        {/* Profile Picture Upload */}
        <div>
          <label className="block font-medium mb-1">Profile Picture</label>
          <input
            type="file"
            accept="image/*"
            onChange={onImageChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {imagePreview && (
            <img
              src={imagePreview}
              alt="Selected profile"
              className="mt-4 w-24 h-24 rounded-full object-cover"
            />
          )}
          {errors.profilePicture && (
            <p className="text-red-500 text-sm">
              {errors.profilePicture.message}
            </p>
          )}
        </div>

        {/* Name */}
        <input
          type="text"
          {...register("name")}
          placeholder="Name"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.name && (
          <p className="text-red-500 text-sm">{errors.name.message}</p>
        )}

        {/* Designation */}
        <input
          type="text"
          {...register("designation")}
          placeholder="Designation"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.designation && (
          <p className="text-red-500 text-sm">{errors.designation.message}</p>
        )}

        {/* Social Links */}
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            {...register("socials.gitHub")}
            placeholder="GitHub URL"
            className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.socials?.gitHub && (
            <p className="text-red-500 text-sm">
              {errors.socials.gitHub.message}
            </p>
          )}

          <input
            type="text"
            {...register("socials.facebook")}
            placeholder="Facebook URL"
            className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.socials?.facebook && (
            <p className="text-red-500 text-sm">
              {errors.socials.facebook.message}
            </p>
          )}

          <input
            type="text"
            {...register("socials.linkedIn")}
            placeholder="LinkedIn URL"
            className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.socials?.linkedIn && (
            <p className="text-red-500 text-sm">
              {errors.socials.linkedIn.message}
            </p>
          )}

          <input
            type="text"
            {...register("socials.instagram")}
            placeholder="Instagram URL"
            className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.socials?.instagram && (
            <p className="text-red-500 text-sm">
              {errors.socials.instagram.message}
            </p>
          )}
        </div>

        {/* Bio Headings */}
        <input
          type="text"
          {...register("bioHeadings")}
          placeholder="Bio Headings"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.bioHeadings && (
          <p className="text-red-500 text-sm">{errors.bioHeadings.message}</p>
        )}

        {/* Bio Title */}
        <input
          type="text"
          {...register("bioTitle")}
          placeholder="Bio Title"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.bioTitle && (
          <p className="text-red-500 text-sm">{errors.bioTitle.message}</p>
        )}

        {/* Bio Details - Rich Text Editor */}
        <label className="block font-medium mb-1">Bio Details</label>
        <ReactQuill
          // {...register("bioDetails")}
          value={getValues("bioDetails")}
          onChange={(value) => setValue("bioDetails", value)}
          modules={modules}
          formats={formats}
          className=" border rounded-md"
          placeholder="Enter bio details here..."
        />
        {errors.bioDetails && (
          <p className="text-red-500 text-sm">{errors.bioDetails.message}</p>
        )}

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
        >
          {selectedItem ? "Update" : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default SiteHeaderForm;
