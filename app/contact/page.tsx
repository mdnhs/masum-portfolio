import ContactUs from "@/components/contact-us";
import PageTitle from "@/components/page-title";
import React from "react";

const page = () => {
  return (
    <div className="bg-orange-100 flex justify-center items-center p-5 lg:p-20 gap-3 lg:gap-10 flex-col dark:bg-slate-800">
      <PageTitle title="Let's Talk" />
      <ContactUs />
    </div>
  );
};

export default page;
