"use client";

import React, {
  useState,
  DragEvent,
  ChangeEvent,
  forwardRef,
  useImperativeHandle,
  useRef,
} from "react";
import { useFormContext } from "react-hook-form";

interface UploadedFile {
  name: string;
  size: string;
}

interface FileUploadProps {
  name: string; // The name of the field in the form
}

const FileUpload = forwardRef<HTMLInputElement, FileUploadProps>(
  ({ name }, ref) => {
    const { setValue, watch, setError, clearErrors } = useFormContext();
    const [files, setFiles] = useState<UploadedFile[]>([]);
    const fileInputRef = useRef<HTMLInputElement | null>(null); // Create a ref for the input

    useImperativeHandle(ref, () => ({
      focus: () => {
        fileInputRef.current?.focus(); // Focus the input element
      },
      getFiles: () => files,
    }));

    const watchedFiles = watch(name) || [];

    const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      e.currentTarget.classList.add("border-blue-500", "border-2");
    };

    const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
      e.currentTarget.classList.remove("border-blue-500", "border-2");
    };

    const handleDrop = (e: DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      e.currentTarget.classList.remove("border-blue-500", "border-2");
      const droppedFiles = Array.from(e.dataTransfer.files);
      handleFiles(droppedFiles);
    };

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
      const selectedFiles = Array.from(e.target.files || []);
      handleFiles(selectedFiles);
    };

    const handleFiles = (selectedFiles: File[]) => {
      const formattedFiles: UploadedFile[] = selectedFiles.map((file) => ({
        name: file.name,
        size: formatBytes(file.size),
      }));

      setFiles((prevFiles) => {
        const newFiles = [...prevFiles, ...formattedFiles];
        setValue(name, newFiles); // Update the form state
        clearErrors(name); // Clear any errors
        return newFiles;
      });
    };

    const clearFiles = () => {
      setFiles([]);
      setValue(name, []); // Clear the form field
      setError(name, { type: "manual", message: "File input cannot be empty." }); // Set an error message
    };

    const formatBytes = (bytes: number): string => {
      if (bytes === 0) return "0 Bytes";
      const k = 1024;
      const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
      const i = Math.floor(Math.log(bytes) / Math.log(k));
      return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
    };

    return (
      <div className="w-full flex gap-4 bg-white dark:bg-slate-900 rounded-lg">
        <div
          aria-hidden
          className="bg-gray-50 dark:bg-slate-700 md:basis-1/3 p-8 text-center rounded-lg border-dashed border-2 border-gray-300 hover:border-blue-500 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-md"
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <label
            htmlFor="fileInput"
            className="cursor-pointer flex flex-col items-center space-y-2"
          >
            <svg
              className="w-16 h-16 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
            <span className="text-gray-600">Drag and drop your files here</span>
            <span className="text-gray-500 text-sm">(or click to select)</span>
          </label>
          <input
            type="file"
            id="fileInput"
            ref={fileInputRef} // Forward the ref to the input element
            className="hidden"
            multiple
            onChange={handleFileChange}
          />
        </div>

        <div className="text-center md:basis-1/3 flex items-center justify-center w-80">
          {files.length > 0 ? (
            <div>
              {files.map((file, index) => (
                <div key={index + "files"} className="text-gray-700">
                  {file.name} ({file.size})
                </div>
              ))}
              <button
                className="mt-4 bg-red-500 text-white rounded px-4 py-2"
                onClick={clearFiles}
              >
                Clear Files
              </button>
            </div>
          ) : (
            <div className="text-gray-500">No files selected</div>
          )}
        </div>
      </div>
    );
  }
);

FileUpload.displayName = "FileUpload"; // Set a display name for the component

export default FileUpload;
