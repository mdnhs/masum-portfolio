// components/Avatar.tsx
const Avatar: React.FC = () => {
  return (
    <div className=" bg-blue-600 p-2 text-white rounded-full overflow-hidden border border-gray-300">
      <img
        src="/images/placeholder.webp"
        alt="User Avatar"
        className="w-6 h-6 rounded-full overflow-hidden"
      />
    </div>
  );
};

export default Avatar;
