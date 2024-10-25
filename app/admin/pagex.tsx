import SiteHeaderForm from "@/components/admin-panel/site-header-form";
import Converter from "@/components/converter";

const page = () => {
  return (
    <div className=" container h-screen">
      <SiteHeaderForm />
      <Converter />
    </div>
  );
};

export default page;
