import React, { useState } from "react";
import DOMPurify from "isomorphic-dompurify";

const SiteHeaderTable = ({ data, onEdit, onClose }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2 text-left">
              Profile Picture
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left">Name</th>
            <th className="border border-gray-300 px-4 py-2 text-left">
              Designation
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left">
              Bio Title
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left">
              Bio Details
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left">Edit</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item, index) => {
            const handleToggle = () => {
              setIsExpanded((prev) => !prev);
            };

            const sanitizedBioDetails = DOMPurify.sanitize(
              item?.bioDetails ?? ""
            );
            return (
              <tr key={index} className="hover:bg-gray-50 align-top">
                <td className="border border-gray-300 px-4 py-2 w-1/12">
                  {item.profilePicture && (
                    <img
                      src={item.profilePicture}
                      alt="Profile"
                      className="w-16 h-16 rounded-full object-cover"
                    />
                  )}
                </td>
                <td className="border border-gray-300 px-4 py-2 w-2/12">
                  {item.name}
                </td>
                <td className="border border-gray-300 px-4 py-2 w-2/12">
                  {item.designation}
                </td>
                <td className="border border-gray-300 px-4 py-2 w-2/12">
                  {item.bioTitle}
                </td>
                <td className="border border-gray-300 px-4 py-2 w-3/12">
                  <div
                    className={`overflow-hidden transition-all ${
                      isExpanded ? "max-h-[400px]" : "max-h-[6rem]" // 4 lines height approx.
                    }`}
                  >
                    <p
                      dangerouslySetInnerHTML={{
                        __html: sanitizedBioDetails,
                      }}
                      className={isExpanded ? "" : "line-clamp-4"} // Limit to 4 lines visually
                    />
                  </div>
                  {sanitizedBioDetails.length > 0 && (
                    <button
                      onClick={handleToggle}
                      className="text-blue-500 mt-2 hover:underline"
                    >
                      {isExpanded ? "Show Less" : "Show More"}
                    </button>
                  )}
                </td>

                <td className="border border-gray-300 px-4 py-2 w-2/12">
                  <div className="flex justify-between gap-5">
                    {" "}
                    <button
                      onClick={() => onEdit(item)}
                      className="text-white hover:underline bg-blue-600 px-3 basis-1/2 py-1 rounded-md"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => onClose(false)}
                      className="bg-blue-600 basis-1/2 text-white hover:underline px-3 py-1.5 rounded-md"
                    >
                      Close
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default SiteHeaderTable;
