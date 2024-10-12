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

const navList = [
  { id: 1, name: "ABOUT ME", url: "/" },
  { id: 2, name: "PROJECTS", url: "/projects" },
  { id: 2, name: "RESUME", url: "/resume" },
  { id: 2, name: "CONTACT", url: "/contact" },
];

const Header = () => {
  const pathName = usePathname();
  return (
    <div className="bg-white h-20 lg:h-32 sticky z-50 top-0">
      <div className="h-full w-full flex items-center justify-between px-5 container">
        <div className="flex flex-col md:flex-row md:gap-3 items-center align-middle">
          <div className="flex gap-3 items-center align-middle">
            <span className="w-5 h-5 bg-blue-500"></span>
            <p className=" font-bold text-xl lg:text-3xl"> Md Masum</p>
          </div>

          <p className="pt-2">
            <span className="pt-2 pr-3">/</span>Data Analyst
          </p>
        </div>
        <div className="lg:flex items-center gap-4 hidden">
          {navList.map((item, index) => {
            return (
              <Link
                href={item.url}
                key={index + "navList"}
                className={`hover:text-blue-500 cursor-pointer ${
                  pathName === item.url ? "text-blue-500" : ""
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
        <Sheet>
          <SheetTrigger className="lg:hidden">
            <AlignJustify />
          </SheetTrigger>
          <SheetContent side="top">
            <SheetHeader>
              <SheetDescription className="h-screen flex flex-col justify-center text-3xl items-center space-y-6">
                {navList.map((item, index) => {
                  return (
                    <Link
                      href={item.url}
                      key={index + "navList"}
                      className={`hover:text-blue-500 cursor-pointer ${
                        pathName === item.url ? "text-blue-500" : ""
                      }`}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default Header;
