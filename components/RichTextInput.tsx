// components/RichTextEditor.tsx
"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css"; // import styles

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

interface RichTextEditorProps {
  onChange: (html: string) => void;
}

const RichTextEditor: React.FC<RichTextEditorProps> = ({ onChange }) => {
  const [editorHtml, setEditorHtml] = useState<string>("");

  const handleChange = (html: string) => {
    setEditorHtml(html);
    onChange(html);
  };

  return (
    <div className="border h-fit rounded-md shadow-sm">
      <ReactQuill
        value={editorHtml}
        onChange={handleChange}
        modules={RichTextEditor.modules}
        formats={RichTextEditor.formats}
        className="h-64"
      />
    </div>
  );
};

// Configure Quill modules and formats
RichTextEditor.modules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ["bold", "italic", "underline"],
    ["link", "image"],
    ["clean"], // remove formatting button
  ],
};

RichTextEditor.formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "link",
  "image",
];

export default RichTextEditor;
