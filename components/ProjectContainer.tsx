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
        return (
          <ProjectCard
            projectTitle={item.projectTitle}
            projectCategory={item.projectCategory}
            projectDetails={item.projectDetails}
            projectPhoto={item.projectPhoto}
            projectVideo={item.projectVideo}
            key={index + "project"}
          />
        );
      })}
    </div>
  );
};

export default ProjectContainer;
