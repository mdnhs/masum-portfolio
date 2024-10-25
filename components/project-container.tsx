"use client";
import { useEffect, useState } from "react";
import ProjectCard from "./ui/project-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { fetchProjectData } from "@/api/api";
import { motion } from "framer-motion"; // Import motion from Framer Motion
import { ProjectsDataType } from "@/types/projects-type";


const ProjectContainer = () => {
  const [data, setData] = useState<ProjectsDataType[] | null>(null);
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
      {/* Tabs with animated TabList */}
      <motion.div
        initial={{ opacity: 0, y: -20 }} // Slide up animation for TabsList
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Tabs
          value={activeCategory}
          onValueChange={setActiveCategory}
          className="w-full lg:w-[750px] space-y-10"
        >
          <TabsList className="bg-transparent p-0 w-full grid md:grid-cols-4 justify-evenly">
            {categories.map((category, index) => (
              <TabsTrigger
                key={"category" + index}
                className="text-lg w-full flex items-center justify-center h-12"
                value={category}
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((category) => (
            <TabsContent key={category} value={category}>
              <div className="space-y-10 container">
                {filteredProjects?.map((item: ProjectsDataType, index) => {
                  const animationDirection = index % 2 === 0 ? -50 : 50; // Alternate between left and right

                  return (
                    <motion.div
                      key={index + "project"}
                      initial={{ opacity: 0, x: animationDirection }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }} // Add delay for smooth appearance
                    >
                      <ProjectCard
                        projectTitle={item.projectTitle}
                        projectCategory={item.projectCategory}
                        projectDetails={item.projectDetails}
                        projectPhoto={item.projectPhoto}
                        projectVideo={item.projectVideo}
                      />
                    </motion.div>
                  );
                })}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </motion.div>
    </div>
  );
};

export default ProjectContainer;
