/** @format */
"use client";

import { useState } from "react";
import { Nav } from "./ui/nav";

type Props = {};

import {
  ShoppingCart,
  LayoutDashboard,
  UsersRound,
  PlusCircle,
  Settings,
  ChevronRight,
  List,
} from "lucide-react";
import { Button } from "./ui/button";

import { useWindowWidth } from "@react-hook/window-size";
import { routes } from "@/types/routes";

export default function SideNavbar({}: Props) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const onlyWidth = useWindowWidth();
  const mobileWidth = onlyWidth < 768;

  function toggleSidebar() {
    setIsCollapsed(!isCollapsed);
  }

  return (
    <div className="relative min-w-[80px] border-r px-3  pb-10 pt-24 ">
      {!mobileWidth && (
        <div className="absolute right-[-20px] top-7">
          <Button
            onClick={toggleSidebar}
            variant="secondary"
            className=" rounded-full p-2"
          >
            <ChevronRight />
          </Button>
        </div>
      )}
      <Nav
        isCollapsed={mobileWidth ? true : isCollapsed}
        links={[
          {
            title: "Dashboard",
            href: routes.dashboard,
            icon: LayoutDashboard,
            variant: "default",
          },
          {
            title: "Add Product",
            href: routes.add_product,
            icon: PlusCircle,
            variant: "ghost",
          },
          {
            title: "All Products",
            href: routes.all_products,
            icon: List,
            variant: "ghost",
          },
          {
            title: "Users",
            href: routes.users,
            icon: UsersRound,
            variant: "ghost",
          },
          {
            title: "Orders",
            href: routes.orders,
            icon: ShoppingCart,
            variant: "ghost",
          },
          {
            title: "Settings",
            href: routes.settings,
            icon: Settings,
            variant: "ghost",
          },
        ]}
      />
    </div>
  );
}
