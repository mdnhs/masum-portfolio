"use client";
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
        className="w-full lg:w-[750px] space-y-10"
      >
        <TabsList className="bg-transparent p-0 w-full grid md:grid-cols-4 justify-evenly">
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

        {tabList.map((item, index) => (
          <TabsContent key={"category" + index} value={item.category}>
            <div className="space-y-10 container">{item.category}</div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default AdminHomeContainer;
