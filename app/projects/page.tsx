import PageTitle from "@/components/page-title";
import ProjectContainer from "@/components/project-container";

const page = () => {
  return (
    <div className="bg-orange-100 dark:bg-slate-800 flex justify-center items-center p-5 lg:p-20 gap-3 lg:gap-10 min-h-screen scroll-smooth flex-col ">
      {" "}
      <PageTitle
        title="Projects"
        description={
          "Here are some of my projects related to the tools I have been learning. Browse through the page to see all of my works."
        }
      />
      <ProjectContainer />
    </div>
  );
};

export default page;
