import PageTitle from "@/components/page-title";
import ResumeContainer from "@/components/resume-container";

const page = () => {
  return (
    <div className="bg-orange-100 dark:bg-slate-800 flex justify-center items-center p-5 lg:p-20 gap-3 lg:gap-14 flex-col min-h-screen scroll-smooth">
      {" "}
      <PageTitle title="Resume" />
      <ResumeContainer />
    </div>
  );
};

export default page;
