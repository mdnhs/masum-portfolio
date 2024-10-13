"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignJustify } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

// Define a type for the data you're fetching
interface HeaderData {
  name: string;
  designation: string;
}

const navList = [
  { id: 1, name: "ABOUT ME", url: "/" },
  { id: 2, name: "PROJECTS", url: "/projects" },
  { id: 3, name: "RESUME", url: "/resume" },
  { id: 4, name: "CONTACT", url: "/contact" },
];

const Header = () => {
  const pathName = usePathname();
  
  // Use the defined type instead of 'any'
  const [data, setData] = useState<HeaderData | null>(null);

  useEffect(() => {
    fetch("https://mdnhs.github.io/masum-json/header.json")
      .then((res) => res.json())
      .then(setData);
  }, []);

  return (
    <div className="bg-white h-20 lg:h-32 sticky z-50 top-0">
      <div className="h-full w-full flex items-center justify-between px-5 container">
        <Link
          href={"/"}
          className="flex flex-col md:flex-row md:gap-3 items-center align-middle"
        >
          <div className="flex gap-3 items-center align-middle">
            <span className="w-5 h-5 bg-blue-600"></span>
            <p className=" font-bold text-xl lg:text-3xl">{data?.name}</p>
          </div>

          <p className="lg:pt-2">
            <span className="pt-2 pr-3 invisible lg:visible">/</span>
            {data?.designation}
          </p>
        </Link>
        <div className="lg:flex items-center gap-4 hidden">
          {navList.map((item, index) => (
            <Link
              href={item.url}
              key={index + "navList"}
              className={`hover:text-blue-600 cursor-pointer ${
                pathName === item.url ? "text-blue-600" : ""
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <Sheet>
          <SheetTrigger className="lg:hidden">
            <AlignJustify />
          </SheetTrigger>
          <SheetContent side="top">
            <SheetHeader>
              <SheetDescription className="h-screen flex flex-col justify-center text-3xl items-center space-y-6">
                {navList.map((item, index) => (
                  <Link
                    href={item.url}
                    key={index + "navList"}
                    className={`hover:text-blue-600 cursor-pointer ${
                      pathName === item.url ? "text-blue-600" : ""
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default Header;
