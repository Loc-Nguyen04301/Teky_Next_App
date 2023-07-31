"use client";
import MainLayout from "@/layout/MainLayout";
import React, { ReactNode } from "react";
import LoginLayout from "./LoginLayout";
import LoginPage from "@/app/[locale]/login/page";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";

type LayoutWithRouteProps = {
  children: ReactNode;
};

const LayoutWithRoute = ({ children }: LayoutWithRouteProps) => {
  const pathName = usePathname();
  const { data: session } = useSession();
  console.log(session);
  return (
    <>
      {pathName === "/login" || pathName === "/en/login" ? (
        <LoginLayout>{children}</LoginLayout>
      ) : (
        <MainLayout>{children}</MainLayout>
      )}
    </>
  );
};

export default LayoutWithRoute;
