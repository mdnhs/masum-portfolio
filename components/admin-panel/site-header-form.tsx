"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState, ChangeEvent } from "react";

// Define schema using Zod for validation
const siteHeaderSchema = z.object({
  profilePicture: z.any().optional(),
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

const SiteHeaderForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SiteHeaderData>({
    resolver: zodResolver(siteHeaderSchema),
  });

  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const onImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const onSubmit = async (formData: SiteHeaderData) => {
    const data = new FormData();
    if (selectedImage) data.append("profilePicture", selectedImage);
    data.append("name", formData.name);
    data.append("designation", formData.designation);
    data.append("bioHeadings", formData.bioHeadings);
    data.append("bioTitle", formData.bioTitle);
    data.append("bioDetails", formData.bioDetails);

    Object.keys(formData.socials).forEach((key) => {
      data.append(`socials.${key}`, formData.socials[key as keyof typeof formData.socials] || "");
    });

    const res = await fetch("/api/site-header", {
      method: "POST",
      body: data,
    });

    if (res.ok) {
      alert("Data saved successfully!");
    } else {
      alert("Failed to save data.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white shadow-lg rounded-lg p-8 w-full lg:w-1/2 container space-y-6"
      >
        <h2 className="text-2xl text-black font-semibold text-center mb-4">
          Edit Site Header Data
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
            <p className="text-red-500 text-sm">{errors.profilePicture.message}</p>
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
            {...register("socials.insta")}
            placeholder="Instagram URL"
            className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.socials?.insta && (
            <p className="text-red-500 text-sm">
              {errors.socials.insta.message}
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

        {/* Bio Details */}
        <textarea
          {...register("bioDetails")}
          placeholder="Bio Details"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={4}
        />
        {errors.bioDetails && (
          <p className="text-red-500 text-sm">{errors.bioDetails.message}</p>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Save Data
        </button>
      </form>
    </div>
  );
};

export default SiteHeaderForm;
