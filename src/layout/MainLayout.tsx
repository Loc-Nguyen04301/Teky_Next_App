"use client";
import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import SideNav from "@/components/SideNav";
import Footer from "@/components/Footer";
import { PAGES } from "@/types/type";
import { usePathname } from "next/navigation";

const regexViPath = new RegExp("/");
const regexEnPath = new RegExp("/en");

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const [current, setCurrent] = useState<PAGES>(PAGES.PLAYANDSEEN);
  const [profileModal, setProfileModal] = useState(false);

  const pathName = usePathname();

  useEffect(() => {
    var currentURL;
    if (regexEnPath.test(pathName)) {
      currentURL = pathName.substring(4);
    } else if (regexViPath.test(pathName)) {
      currentURL = pathName.substring(1);
    }
    if (currentURL === PAGES.STUDY) setCurrent(PAGES.STUDY);
    if (currentURL === PAGES.PROJECT) setCurrent(PAGES.PROJECT);
    if (currentURL === PAGES.PUBLIC) setCurrent(PAGES.PUBLIC);
    if (currentURL === PAGES.PRESENT) setCurrent(PAGES.PRESENT);
    if (currentURL === PAGES.PARENT) setCurrent(PAGES.PARENT);
    if (currentURL === PAGES.PROFILE) setCurrent(PAGES.PROFILE);
    return;
  }, [pathName]);

  return (
    <div style={{ paddingTop: "134px" }}>
      <Navbar
        current={current}
        setCurrent={setCurrent}
        profileModal={profileModal}
        setProfileModal={setProfileModal}
      />
      {current === PAGES.PARENT || current === PAGES.PROFILE ? (
        <main>{children}</main>
      ) : (
        <main className="flex">
          <SideNav current={current} setCurrent={setCurrent} />
          {children}
        </main>
      )}
      <Footer />
    </div>
  );
};

export default MainLayout;
