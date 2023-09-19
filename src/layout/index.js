import Sidebar from "@/components/Sidebar";
import { useRouter } from "next/router";
import React from "react";
import { Content, LayoutContainer } from "./index.style";

export default function Layout({ children }) {
  const router = useRouter();

  const hasSidebar = router.pathname !== "/" && router.pathname !== "/register";

  return (
    <LayoutContainer>
      {hasSidebar && <Sidebar />}
      <Content hasSidebar={hasSidebar}>{children}</Content>
    </LayoutContainer>
  );
}
