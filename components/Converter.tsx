// pages/index.tsx
"use client";
/// pages/index.tsx

import React, { useState } from "react";
import { cleanHtml } from "./ui/cleanHtml";
import RichTextEditor from "./RichTextInput";
const Converter: React.FC = () => {
  const [formData, setFormData] = useState<{ content: string }>({
    content: "",
  });

  const [cleanedContent, setCleanedContent] = useState<string>(""); // State to hold cleaned content

  const handleChange = (html: string) => {
    setFormData({ content: html });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Clean the HTML before logging or sending it
    const cleaned = cleanHtml(formData.content);
    setCleanedContent(cleaned); // Store cleaned content in state

    console.log("Cleaned Form Data:", { content: cleaned });
    // Here you can handle form submission (e.g., send to API)
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Create Post</h1>
      <form onSubmit={handleSubmit} className="space-y-12">
        <div>
          <label
            htmlFor="content"
            className="block text-sm font-medium text-gray-700"
          >
            Content
          </label>
          <RichTextEditor onChange={handleChange} />
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white font-semibold py-2 rounded-md hover:bg-indigo-700 transition duration-200"
        >
          Submit
        </button>
      </form>

      {/* Display cleaned content as JSON-like format */}
      {cleanedContent && (
        <div className="mt-6 p-4 border rounded-md shadow-sm bg-gray-100">
          <h2 className="text-lg font-semibold">Cleaned Content</h2>
          <pre className="whitespace-pre-wrap text-sm text-gray-700">
            {JSON.stringify(
              cleanedContent.replace(/"/g, "&quot;"), // Replace quotes for display
              null,
              2
            )}
          </pre>
        </div>
      )}
    </div>
  );
};

export default Converter;
