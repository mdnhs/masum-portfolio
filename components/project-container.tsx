"use client";
import { useEffect, useState } from "react";
import ProjectCard from "./ui/ProjectCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { fetchProjectData } from "@/api/api";

export interface ProjectsType {
  projectTitle: string;
  projectCategory: string;
  projectDetails: string;
  projectPhoto: [];
  projectVideo: [];
}

const ProjectContainer = () => {
  const [data, setData] = useState<ProjectsType[] | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await fetchProjectData();
        if (Array.isArray(result)) {
          setData(result);
        } else {
          console.error("Expected an array of projects, but received:", result);
          setData(null);
        }
      } catch (error) {
        console.error("Error fetching project data:", error);
        setData(null);
      }
    };

    getData();
  }, []);

  // Get unique categories from the data
  const categories = data
    ? ["All", ...new Set(data.map((item) => item.projectCategory))]
    : [];

  // Filter projects based on the selected category
  const filteredProjects =
    activeCategory === "All"
      ? data
      : data?.filter((item) => item.projectCategory === activeCategory);

  return (
    <div className="space-y-10">
      <Tabs
        data-aos="fade-right"
        value={activeCategory}
        onValueChange={setActiveCategory}
        className="w-full lg:w-[750px] space-y-10"
      >
        <TabsList className="bg-transparent p-0 w-full h-12 grid grid-cols-4 justify-evenly fad">
          {categories.map((category) => (
            <TabsTrigger
              className="text-lg w-full flex items-center justify-center h-full "
              key={category}
              value={category}
            >
              {category}
            </TabsTrigger>
          ))}
        </TabsList>

        {categories.map((category) => (
          <TabsContent key={category} value={category}>
            <div className=" space-y-10 container">
              {filteredProjects?.map((item: ProjectsType, index) => {
                const aosAnimation =
                  index % 2 === 0 ? "fade-left" : "fade-right";
                return (
                  <div
                    key={index + "project"}
                    data-aos={aosAnimation}
                    data-aos-easing="ease-in-sine"
                    data-aos-duration="500"
                  >
                    <ProjectCard
                      projectTitle={item.projectTitle}
                      projectCategory={item.projectCategory}
                      projectDetails={item.projectDetails}
                      projectPhoto={item.projectPhoto}
                      projectVideo={item.projectVideo}
                    />
                  </div>
                );
              })}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default ProjectContainer;
