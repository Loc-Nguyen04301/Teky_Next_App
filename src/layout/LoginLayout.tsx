"use client";
import React from "react";
import LoginPage from "@/app/[locale]/login/page";

interface LoginLayoutProps {
  children?: React.ReactNode;
}

const LoginLayout = ({ children }: LoginLayoutProps) => {
  return (
    <>
      <LoginPage />
    </>
  );
};

export default LoginLayout;
