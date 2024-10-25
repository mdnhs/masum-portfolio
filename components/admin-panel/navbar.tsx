// components/Navbar.tsx
import { BellIcon } from 'lucide-react';
import Avatar from './avater';

const Navbar: React.FC = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-white shadow">
      <h1 className="text-lg font-semibold">Admin Dashboard</h1>
      <div className="flex items-center gap-4">
        <button className="relative text-gray-500">
          <BellIcon className="w-6 h-6" />
          <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
        </button>
        <Avatar />
      </div>
    </header>
  );
};

export default Navbar;
