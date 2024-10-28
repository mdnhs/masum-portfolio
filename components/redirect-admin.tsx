// app/admin/dashboard/page.tsx
import { redirect } from "next/navigation";

const RedirectAdmin: React.FC = () => {
  redirect("https://masum-admin-panel.vercel.app/");
  return null; // This will prevent rendering anything else
};

export default RedirectAdmin;
