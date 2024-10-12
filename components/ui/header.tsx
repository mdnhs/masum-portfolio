import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignJustify } from "lucide-react";

const navList = [
  { id: 1, name: "ABOUT ME" },
  { id: 2, name: "PROJECT" },
  { id: 2, name: "RESUME" },
  { id: 2, name: "CONTACT" },
];

const Header = () => {
  return (
    <div className="h-14 lg:h-32 bg-white w-full flex items-center justify-between px-5 container">
      <div className="flex gap-3 items-center">
        <p className=" font-bold  text-xl pb-1">Md Masum</p>
        <p>/</p>
        <p>Data Analyst</p>
      </div>
      <div className="lg:flex items-center gap-4 hidden">
        {navList.map((item, index) => {
          return (
            <p
              key={index + "navList"}
              className="hover:text-blue-500 cursor-pointer"
            >
              {item.name}
            </p>
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
                  <p
                    key={index + "navList"}
                    className="hover:text-blue-500 cursor-pointer"
                  >
                    {item.name}
                  </p>
                );
              })}
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Header;
