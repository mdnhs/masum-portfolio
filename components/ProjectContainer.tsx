"use client";
import { useEffect, useState } from "react";
import ProjectCard from "./ui/ProjectCard";

interface ProjectsType {
  projectTitle: string;
  projectCategory: string;
  projectDetails: string;
  projectPhoto: [];
  projectVideo: [];
}

const ProjectContainer = () => {
  const [data, setData] = useState<[] | null>(null);

  useEffect(() => {
    fetch("https://mdnhs.github.io/masum-json/projects.json")
      .then((res) => res.json())
      .then(setData);
  }, []);
  return (
    <div className=" space-y-10">
      {data?.map((item: ProjectsType, index) => {
        const aosAnimation = index % 2 === 0 ? "fade-left" : "fade-right";
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
  );
};

export default ProjectContainer;
