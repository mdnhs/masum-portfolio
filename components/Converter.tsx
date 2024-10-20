"use client";

import React, { useState } from "react";
import { cleanHtml } from "./ui/cleanHtml";
import RichTextEditor from "./RichTextInput";
import { Copy } from "lucide-react";

const Converter: React.FC = () => {
  const [formData, setFormData] = useState<{ content: string }>({
    content: "",
  });

  const [cleanedContent, setCleanedContent] = useState<string>(""); // State to hold cleaned content
  const [copySuccess, setCopySuccess] = useState<string>(""); // State to track copy status

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

  const copyToClipboard = () => {
    if (cleanedContent) {
      navigator.clipboard
        .writeText(cleanedContent)
        .then(() => {
          setCopySuccess("Copied to clipboard!");
        })
        .catch(() => {
          setCopySuccess("Failed to copy!");
        });
    }
  };

  return (
    <div className="grid grid-cols-2 gap-4">
      <h1 className="text-2xl font-bold mb-4 text-center col-span-full">
        Rich Text to JSON HTML Convertation
      </h1>
      <form
        onSubmit={handleSubmit}
        className="space-y-3 col-span-full md:col-span-1"
      >
        <div className="space-y-3 h-[340px]">
          <label htmlFor="content" className="text-lg font-semibold">
            Type Your Content:
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

      <div className="col-span-full md:col-span-1 space-y-3">
        <h2 className="text-lg font-semibold">Converted Content:</h2>
        <div className="p-4 border rounded-md shadow-sm bg-slate-800 space-y-3 min-h-[352px] relative">
          {cleanedContent && (
            <pre className="whitespace-pre-wrap text-sm text-green-400">
              {JSON.stringify(
                cleanedContent.replace(/"/g, "&quot;"), // Replace quotes for display
                null,
                2
              )}
            </pre>
          )}

          {/* Copy to clipboard button */}
          {cleanedContent && (
            <button
              onClick={copyToClipboard}
              className=" bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200 flex gap-2 text-xs items-center absolute top-1 right-4"
            >
              <Copy size={16}/>
              Copy
            </button>
          )}

          {/* Display copy success message */}
          {copySuccess && (
            <p className="mt-2 text-green-600 font-semibold">{copySuccess}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Converter;
