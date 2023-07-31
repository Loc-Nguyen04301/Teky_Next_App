"use client";
import { ReactNode } from "react";
import "@/app/globals.css";
import { SessionProvider } from "next-auth/react";

type Props = {
  children: ReactNode;
};

// Since we have a `not-found.tsx` page on the root, a layout file
// is required, even if it's just passing children through.
export default function RootLayout({ children }: Props) {
  return <SessionProvider>{children}</SessionProvider>;
}
