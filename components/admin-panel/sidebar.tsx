"use client"
// components/Sidebar.tsx
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface MenuItem {
  name: string;
  href: string;
  children?: MenuItem[];
}

const menuItems: MenuItem[] = [
  { name: 'Dashboard', href: '/admin/dashboard' },
  {
    name: 'Pages',
    href: '',
    children: [
      { name: 'Home', href: '/admin/pages/home' },
      { name: 'Projects', href: '/admin/pages/projects' },
      { name: 'Resume', href: '/admin/pages/resume' },
      { name: 'Contact', href: '/admin/pages/contact' },
    ],
  },
  { name: 'Settings', href: '/admin/settings' },
];

const Sidebar: React.FC = () => {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-gray-800 text-white flex flex-col h-full">
      <div className="text-center font-bold text-lg py-4">Admin Panel</div>
      <nav className="flex-1">
        {menuItems.map((item) => (
          <div key={item.name} className="my-2">
            <Link href={item.href} className={`block py-2 px-4 hover:bg-gray-700 ${pathname === item.href ? 'bg-gray-700' : ''}`}>
              {item.name}
            </Link>
            {item.children && (
              <div className="ml-4">
                {item.children.map((subItem) => (
                  <Link key={subItem.name} href={subItem.href} className={`block py-1 px-4 text-sm hover:bg-gray-700 ${pathname === subItem.href ? 'bg-gray-700' : ''}`}>
                    {subItem.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
