import React from "react";
import FileUpload from "../file-upload";

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
            <textarea
              name="bio_details"
              id="bio_details"
              placeholder="Example: My name's John DOe. A Software Engineer & A Tech Enthusiast."
              className="h-28 border mt-1 rounded p-4 w-full bg-gray-50 dark:bg-slate-700 truncate"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderDataForm;
