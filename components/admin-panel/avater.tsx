import Image from "next/image";

// components/Avatar.tsx
const Avatar: React.FC = () => {
  return (
    <div className=" border-blue-600 p-2 text-white rounded-full overflow-hidden border-2 w-10 h-10 relative ">
      <Image
        src="/images/placeholder.webp"
        fill
        alt="User Avatar"
        className="w-6 h-6 rounded-full overflow-hidden"
      />
    </div>
  );
};

export default Avatar;
