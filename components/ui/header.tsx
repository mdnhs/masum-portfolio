import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignJustify } from "lucide-react";

const Header = () => {
  return (
    <div className="h-14 lg:h-32 bg-white w-full flex items-center justify-between px-4 lg:px-16">
      <div className="flex gap-3 items-center">
        <p className=" font-bold  text-xl pb-1">Md Masum</p>
        <p>/</p>
        <p>Data Analyst</p>
      </div>
      <div className="lg:flex items-center gap-4 hidden">
        <p className="hover:text-blue-500 cursor-pointer">ABOUT ME</p>
        <p className="hover:text-blue-500 cursor-pointer">PROJECT</p>
        <p className="hover:text-blue-500">RESUME</p>
        <p className="hover:text-blue-500">CONTACT</p>
      </div>
      <Sheet>
        <SheetTrigger className="lg:hidden">
          <AlignJustify />
        </SheetTrigger>
        <SheetContent side="top">
          <SheetHeader>
            <SheetDescription className="h-screen flex flex-col justify-center text-3xl items-center space-y-6">
              <p className="hover:text-blue-500">ABOUT ME</p>
              <p className="hover:text-blue-500">PROJECT</p>
              <p className="hover:text-blue-500">RESUME</p>
              <p className="hover:text-blue-500">CONTACT</p>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Header;
