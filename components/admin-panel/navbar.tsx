// components/Navbar.tsx
import { BellIcon, Earth } from "lucide-react";
import Avatar from "./avater";
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-white shadow">
      <h1 className="text-lg font-semibold text-black">Admin Dashboard</h1>
      <div className="flex items-center gap-4">
        <Link
          href={"/"}
          target="_blank"
          className="bg-blue-600 p-2 text-white rounded-full"
        >
          <Earth />
        </Link>
        <button className="relative bg-blue-600 p-2 text-white rounded-full">
          <BellIcon className="w-6 h-6" />
          <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
        </button>
        <Avatar />
      </div>
    </header>
  );
};

export default Navbar;
