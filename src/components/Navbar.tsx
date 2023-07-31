"use client";
import React, { Dispatch, SetStateAction, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import { PAGES } from "@/types/type";
import { useTranslations } from "next-intl";
import LocaleSwitcher from "./LocaleSwitcher";
import { useSession } from "next-auth/react";
import ProfileModal from "./ProfileModal";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

interface NavbarProps {
  current: string;
  setCurrent: Dispatch<SetStateAction<PAGES>>;
}

const Navbar = ({ current, setCurrent }: NavbarProps) => {
  const [profileModal, setProfileModal] = useState(false);

  const t = useTranslations("Index");

  const { data: session, status } = useSession();

  const labelName: string = t("Navbar.label-name");

  const items: MenuProps["items"] = [
    getItem(
      labelName,
      "danh-muc",
      <Image
        src={"/menu.svg"}
        width={20}
        height={14}
        alt="menu"
        className="w-[20px] h-[14px]"
      />,
      [
        {
          label: (
            <a className="w-full h-full block" href="/">
              Chơi & Xem
            </a>
          ),
          key: PAGES.PLAYANDSEEN,
          icon: (
            <Image
              src={"/playandseen.svg"}
              width={20}
              height={14}
              alt="playandseen"
            />
          ),
        },
        {
          label: (
            <a className="w-full h-full block" href={PAGES.STUDY}>
              Học
            </a>
          ),
          key: PAGES.STUDY,
          icon: <Image src={"/study.svg"} width={20} height={14} alt="study" />,
        },
        {
          label: (
            <a className="w-full h-full block" href={PAGES.PROJECT}>
              Làm Game/dự án
            </a>
          ),
          key: PAGES.PROJECT,
          icon: (
            <Image src={"/project.svg"} width={20} height={14} alt="project" />
          ),
        },
        {
          label: (
            <a className="w-full h-full block" href={PAGES.PUBLIC}>
              Cộng đồng
            </a>
          ),
          key: PAGES.PUBLIC,
          icon: (
            <Image src={"/public.svg"} width={20} height={14} alt="public" />
          ),
        },
        {
          label: (
            <a className="w-full h-full block" href={PAGES.PRESENT}>
              Đổi quà
            </a>
          ),
          key: PAGES.PRESENT,
          icon: (
            <Image src={"/present.svg"} width={20} height={14} alt="present" />
          ),
        },
      ]
    ),
  ];

  const handleClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key as SetStateAction<PAGES>);
  };

  const GotoParentPage = () => {
    setCurrent(PAGES.PARENT);
  };

  const GotoHomePage = () => {
    setCurrent(PAGES.PLAYANDSEEN);
  };

  const handleToggleModal = () => {
    setProfileModal((prev) => !prev);
  };

  return (
    <header className="fixed top-0 z-[100] w-full bg-[#f2f6fe]">
      <div className="relative flex justify-between px-5 h-16 max-tablet:p-2">
        <a
          href={"/"}
          className="relative self-center cursor-pointer w-[117px] h-[40px] max-laptop-small:max-w-[20%] z-10"
        >
          <Image
            src="/logo.svg"
            fill
            alt="Picture of the author"
            priority={true}
          />
        </a>
        <div className="flex gap-4 z-[101] max-tablet:gap-1">
          <span className="m-auto cursor-pointer relative w-[24px] h-[21px] max-laptop-small:max-w-[20%] max-tablet:hidden">
            <Image src="/support.svg" fill alt="support" />
          </span>
          <span className="m-auto cursor-pointer relative w-[24px] h-[21px] max-laptop-small:max-w-[20%] max-tablet:hidden">
            <Image src="/phone.svg" fill alt="support" />
          </span>
          <LocaleSwitcher />
        </div>
        <ul className="absolute w-full h-full flex justify-center items-end top-0 left-0 font-bold text-lg normal-case gap-3 max-tablet:text-xs">
          <li
            className="px-7 py-3 bg-primary-green text-white rounded-t-[20px] max-tablet:p-2"
            onClick={GotoHomePage}
          >
            <Link href={"/"} className="">
              {t("Navbar.tab-1")}
            </Link>
          </li>
          <li
            className={
              current === PAGES.PARENT
                ? `px-7 py-3 bg-primary-orange border-solid border-primary-orange border-[1px] rounded-t-[20px] text-white max-tablet:p-2 `
                : `px-7 py-3 bg-white border-solid border-primary-green border-[1px] rounded-t-[20px] max-tablet:p-2`
            }
            onClick={GotoParentPage}
          >
            <Link href={"/phu-huynh"} className="hover:text-primary-green">
              {t("Navbar.tab-2")}
            </Link>
          </li>
        </ul>
      </div>
      <div
        className={
          current === PAGES.PARENT
            ? `bg-primary-orange h-[70px] flex justify-between`
            : `bg-primary-green h-[70px] flex justify-between`
        }
      >
        <Menu
          onClick={handleClick}
          selectedKeys={[current]}
          mode="inline"
          items={items}
          className={
            current === PAGES.PARENT
              ? `bg-primary-orange-bold h-full w-[250px] text-white header__menu text-lg hover:bg-primary-orange`
              : `bg-primary-green-bold h-full w-[250px] text-white header__menu text-lg hover:bg-primary-orange`
          }
        />
        <div className="flex items-center gap-4 pr-5 font-bold">
          <button
            className={
              current === PAGES.PARENT
                ? `hidden`
                : `p-4 bg-white rounded-3xl max-laptop-small:p-2`
            }
          >
            <div className="flex px-3">
              <span className="relative w-[18px] h-[18px] max-laptop-small:w-[14px]">
                <Image src={"/plus.svg"} alt="plus" fill />
              </span>
              <span className={`ml-2`}>{t("Navbar.download-btn")}</span>
            </div>
          </button>
          {status === "authenticated" ? (
            <div className="relative">
              <div className="cursor-pointer" onClick={handleToggleModal}>
                <Image
                  width={50}
                  height={50}
                  alt="avatar-icon"
                  src={session.user?.image ?? ""}
                  className="rounded-full"
                />
              </div>
              {profileModal && <ProfileModal />}
            </div>
          ) : (
            <a
              className={
                current === PAGES.PARENT
                  ? `p-4 bg-primary-green rounded-3xl text-white max-laptop-small:p-2 cursor-pointer`
                  : `p-4 bg-primary-orange rounded-3xl text-white max-laptop-small:p-2 cursor-pointer`
              }
              href="login"
            >
              <div className="flex px-3">
                <span className="text-center w-[90px]">
                  {t("Navbar.login-btn")}
                </span>
              </div>
            </a>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
