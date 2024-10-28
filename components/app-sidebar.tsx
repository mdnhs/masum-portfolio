"use client";

import {
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
  LayoutDashboard,
} from "lucide-react";
import * as React from "react";

import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { ModeToggle } from "./ui/mode-toggle";
import Link from "next/link";

// This is sample data.
const data = {
  user: {
    name: "Nazmul H. Sourab",
    email: "mdnhs.cse@gmail.com",
    avatar: "/avatars/shadcn.jpg",
  },
  company: {
    name: "Md Masum",
    logo: GalleryVerticalEnd,
    plan: "Admin Panel",
  },
  dashboard: {
    title: "dashboard",
    icon: LayoutDashboard,
    url: "/admin",
  },

  navMain: [
    {
      title: "Pages",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "Home",
          url: "/admin/pages/home",
        },
        {
          title: "Projects",
          url: "/admin/pages/projects",
        },
        {
          title: "Resume",
          url: "/admin/pages/resume",
        },
        {
          title: "Contacts",
          url: "/admin/pages/contacts",
        },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "#",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Task Management",
      url: "#",
      icon: Frame,
    },
    {
      name: "Password Manager",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Traffic Analysis",
      url: "#",
      icon: Map,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <div className="flex justify-between overflow-hidden">
          <div className="flex gap-2">
            <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
              <data.company.logo className="size-4" />
            </div>
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-semibold">
                {data.company.name}
              </span>
              <span className="truncate text-xs">{data.company.plan}</span>
            </div>
          </div>
          <ModeToggle />
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link href={data.dashboard.url}>
                  <data.dashboard.icon />
                  <span>{data.dashboard.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
