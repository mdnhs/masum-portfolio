// app/admin/page.tsx
"use client";
import { useState, ChangeEvent, FormEvent } from "react";

interface SocialLinks {
  gitHub?: string;
  facebook?: string;
  linkedIn?: string;
  insta?: string;
}

interface SiteHeaderData {
  profilePicture: string;
  name: string;
  designation: string;
  socials: SocialLinks;
  bioHeadings: string;
  bioTitle: string;
  bioDetails: string;
}

const SiteHeaderForm = () => {
  const [formData, setFormData] = useState<SiteHeaderData>({
    profilePicture: "",
    name: "",
    designation: "",
    socials: { gitHub: "", facebook: "", linkedIn: "", insta: "" },
    bioHeadings: "",
    bioTitle: "",
    bioDetails: "",
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/site-header", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      alert("Data saved successfully!");
    } else {
      alert("Failed to save data.");
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md space-y-6">
        <h2 className="text-2xl font-semibold text-center mb-4">Edit Site Header Data</h2>
        
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="text"
          name="designation"
          value={formData.designation}
          onChange={handleChange}
          placeholder="Designation"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="text"
          name="profilePicture"
          value={formData.profilePicture}
          onChange={handleChange}
          placeholder="Profile Picture URL"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            name="socials.gitHub"
            value={formData.socials.gitHub}
            onChange={handleChange}
            placeholder="GitHub URL"
            className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            name="socials.facebook"
            value={formData.socials.facebook}
            onChange={handleChange}
            placeholder="Facebook URL"
            className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            name="socials.linkedIn"
            value={formData.socials.linkedIn}
            onChange={handleChange}
            placeholder="LinkedIn URL"
            className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            name="socials.insta"
            value={formData.socials.insta}
            onChange={handleChange}
            placeholder="Instagram URL"
            className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <input
          type="text"
          name="bioHeadings"
          value={formData.bioHeadings}
          onChange={handleChange}
          placeholder="Bio Headings"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="text"
          name="bioTitle"
          value={formData.bioTitle}
          onChange={handleChange}
          placeholder="Bio Title"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <textarea
          name="bioDetails"
          value={formData.bioDetails}
          onChange={handleChange}
          placeholder="Bio Details"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={4}
        />

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
