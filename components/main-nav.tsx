"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { siteConfig } from "@/config/site";
import { AlignJustify } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ModeToggle } from "./ui/mode-toggle";
import { fetchMainNavData } from "@/api/api";
import { motion } from "framer-motion"; // Import motion from Framer Motion

export interface MainNavData {
  name: string;
  designation: string;
}

const MainNav = () => {
  const pathName = usePathname();
  const [data, setData] = useState<MainNavData | null>(null);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchMainNavData();
      setData(data);
    };

    getData();
  }, []);

  return (
    <motion.div // Use motion.div instead of div
      initial={{ opacity: 0, y: -20 }} // Initial state
      animate={{ opacity: 1, y: 0 }} // Animation state when visible
      exit={{ opacity: 0, y: -20 }} // Animation state when exiting
      transition={{ duration: 0.5 }} // Duration of the animation
      className="bg-white dark:bg-slate-900 h-20 lg:h-32 sticky z-50 top-0"
    >
      <div className="h-full w-full flex items-center justify-between px-5 container">
        <Link
          href={"/"}
          className="flex flex-col md:flex-row md:gap-3 items-center align-middle"
        >
          <div className="flex gap-3 items-center align-middle">
            <span className="w-5 h-5 bg-blue-600"></span>
            <p className="font-bold text-xl lg:text-3xl">{data?.name}</p>
          </div>

          <p className="lg:pt-2">
            <span className="pt-2 pr-3 invisible lg:visible">/</span>
            {data?.designation}
          </p>
        </Link>
        <div className="lg:flex items-center gap-4 hidden">
          {siteConfig.mainNav.map((item, index) => (
            <Link
              href={item.href}
              key={index + "navList"}
              className={`hover:text-blue-600 cursor-pointer ${
                pathName === item.href ? "text-blue-600" : ""
              }`}
            >
              {item.title}
            </Link>
          ))}
          <ModeToggle />
        </div>
        <Sheet>
          <SheetTrigger className="lg:hidden">
            <AlignJustify />
          </SheetTrigger>
          <SheetContent side="top">
            <SheetHeader>
              <SheetDescription className="h-screen flex flex-col justify-center text-3xl items-center space-y-6">
                {siteConfig.mainNav.map((item, index) => (
                  <Link
                    href={item.href}
                    key={index + "navList"}
                    className={`hover:text-blue-600 cursor-pointer ${
                      pathName === item.href ? "text-blue-600" : ""
                    }`}
                  >
                    {item.title}
                  </Link>
                ))}
                <ModeToggle />
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </motion.div>
  );
};

export default MainNav;
