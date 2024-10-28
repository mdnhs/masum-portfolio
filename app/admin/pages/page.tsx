import React from "react";
import { permanentRedirect } from "next/navigation";

const page = () => {
  return <div>{permanentRedirect(`/admin/pages/home`)} </div>;
};

export default page;
