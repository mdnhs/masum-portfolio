"use client";
import HeaderDataForm from "@/components/FormHeaderData/header-data-form";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React, { useState } from "react";

const tabList = [
  { id: 1, category: "Header" },
  { id: 2, category: "Skill" },
];

const AdminHomeContainer = () => {
  const [activeCategory, setActiveCategory] = useState<string>("Header");
  return (
    <div className="p-5">
      <Tabs
        value={activeCategory}
        onValueChange={setActiveCategory}
        className="w-full space-y-10"
      >
        <TabsList className="p-0 w-full md:w-[750px] bg-white grid md:grid-cols-2 justify-evenly dark:bg-blue-600/75">
          {tabList.map((item, index) => (
            <TabsTrigger
              key={"category" + index}
              className="text-lg w-full flex items-center justify-center h-12"
              value={item.category}
            >
              {item.category}
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value={"Header"}>
          <HeaderDataForm />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdminHomeContainer;
