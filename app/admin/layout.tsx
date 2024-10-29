import { AppSidebar } from "@/components/app-sidebar";
import { AdminBreadcrumbContainer } from "@/components/container/admin/AdminBreadcrumbContainer";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full bg-gray-100 dark:bg-slate-800">
        <div className="p-5 sticky top-0 flex items-center gap-4">
          <SidebarTrigger />
          <AdminBreadcrumbContainer />
        </div>
        {children}
      </main>
    </SidebarProvider>
  );
}
