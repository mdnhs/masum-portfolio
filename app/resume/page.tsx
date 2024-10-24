import ResumeContainer from "@/components/resume-container";

const page = () => {
  return (
    <div className="bg-orange-100 dark:bg-slate-800 flex justify-center items-center p-5 lg:p-20 gap-3 lg:gap-14 flex-col min-h-screen scroll-smooth">
      {" "}
      <div data-aos="flip-up" className="flex gap-3 items-center align-middle">
        <span className="w-5 h-5 bg-blue-600"></span>
        <p className=" font-bold text-xl lg:text-3xl">{`Resume`}</p>
      </div>
      <ResumeContainer />
    </div>
  );
};

export default page;
