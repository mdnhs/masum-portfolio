import React from "react";
import FileUpload from "../file-upload";
import { Button } from "../ui/button";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

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

const HeaderDataForm = () => {
  return (
    <div className=" max-w-screen-lg">
      <div className="bg-white dark:bg-slate-900 rounded-lg shadow-lg p-4 px-4 md:p-8 mb-6">
        <div className="grid gap-4 text-sm grid-cols-1 md:grid-cols-4">
          <div className="md:col-span-4 space-y-1">
            <label htmlFor="profile_picture">Avatar</label>
            <FileUpload />
          </div>
          <div className="md:col-span-4">
            <label htmlFor="full_name">Full Name</label>
            <input
              type="text"
              name="full_name"
              id="full_name"
              placeholder="Example: John Doe"
              className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 dark:bg-slate-700 truncate"
            />
          </div>
          <div className="md:col-span-4">
            <label htmlFor="designation">Designation</label>
            <input
              type="text"
              name="designation"
              id="designation"
              placeholder="Example: Software Engineer"
              className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 dark:bg-slate-700 truncate"
            />
          </div>
          <div className="md:col-span-2">
            <label htmlFor="social_one">GitHub Profile URL</label>
            <input
              type="text"
              name="social_one"
              id="social_one"
              placeholder="Example: https://github.com/mdnhs"
              className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 dark:bg-slate-700 truncate"
            />
          </div>
          <div className="md:col-span-2">
            <label htmlFor="social_two">Facebook Profile URL</label>
            <input
              type="text"
              name="social_two"
              id="social_two"
              placeholder="Example: https://facebook.com/srb47"
              className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 dark:bg-slate-700 truncate"
            />
          </div>
          <div className="md:col-span-2">
            <label htmlFor="social_three">LinkedIn Profile URL</label>
            <input
              type="text"
              name="social_three"
              id="social_three"
              placeholder="Example: https://linkedin.com/mdnhs"
              className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 dark:bg-slate-700 truncate"
            />
          </div>
          <div className="md:col-span-2">
            <label htmlFor="social_four">Instagram Profile URL</label>
            <input
              type="text"
              name="social_four"
              id="social_four"
              placeholder="Example: https://instagram.com/srb47"
              className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 dark:bg-slate-700 truncate"
            />
          </div>
          <div className="md:col-span-2">
            <label htmlFor="greetings">Greetings Message</label>
            <input
              type="text"
              name="greetings"
              id="greetings"
              placeholder="Example: Hey! There."
              className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 dark:bg-slate-700 truncate"
            />
          </div>
          <div className="md:col-span-2">
            <label htmlFor="bio_title">Bio Title</label>
            <input
              type="text"
              name="bio_title"
              id="bio_title"
              placeholder="Example: My name's John DOe. A Software Engineer & A Tech Enthusiast."
              className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 dark:bg-slate-700 truncate"
            />
          </div>
          <div className="md:col-span-4">
            <label htmlFor="bio_details">Bio Details</label>
            <ReactQuill
              // {...register("bioDetails")}
              // value={getValues("bioDetails")}
              // onChange={(value) => setValue("bioDetails", value)}
              modules={modules}
              formats={formats}
              className=" border rounded-md"
              placeholder="Enter bio details here..."
            />
          </div>

          <Button className="uppercase bg-blue-600 hover:border border-blue-600 hover:bg-white hover:text-blue-600 rounded-full font-semibold dark:text-white hover:dark:text-slate-900 py-6 px-12">
            SUBMIT
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeaderDataForm;
