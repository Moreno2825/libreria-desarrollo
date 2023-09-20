import Sidebar from "@/components/Sidebar";
import { useRouter } from "next/router";
import React from "react";
import { Content, LayoutContainer } from "./index.style";
import CustomLogOut from "@/components/CustomLogOut";

export default function Layout({ children }) {
  const router = useRouter();

  const hasSidebar = router.pathname !== "/" && router.pathname !== "/register";

  return (
    <LayoutContainer>
      {hasSidebar && <Sidebar />}
      <Content hasSidebar={hasSidebar}>
        {hasSidebar && <CustomLogOut />}
        {children}
      </Content>
    </LayoutContainer>
  );
}
