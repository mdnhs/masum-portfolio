// components/RichTextEditor.tsx
"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css"; // import styles

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

interface RichTextEditorProps {
  onChange: (html: string) => void;
}

interface QuillModules {
  toolbar: (string | object)[];
}

const RichTextEditor: React.FC<RichTextEditorProps> & {
  modules: QuillModules;
  formats: string[];
} = ({ onChange }) => {
  const [editorHtml, setEditorHtml] = useState<string>("");

  const handleChange = (html: string) => {
    setEditorHtml(html);
    onChange(html);
  };

  return (
    <div className="h-fit rounded-md">
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

const colors = ["red", "green", "blue", "orange", "violet"];

RichTextEditor.modules = {
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

RichTextEditor.formats = [
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

export default RichTextEditor;
