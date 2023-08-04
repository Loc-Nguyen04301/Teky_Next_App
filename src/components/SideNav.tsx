"use client";
import React, { Dispatch, SetStateAction, useState } from "react";
import Image from "next/image";
import { Menu, MenuProps } from "antd";
import { PAGES } from "@/types/type";
import { useSession } from "next-auth/react";

interface SideNavProps {
  current: string;
  setCurrent: Dispatch<SetStateAction<PAGES>>;
}
const SideNav = ({ current, setCurrent }: SideNavProps) => {
  const { status } = useSession();

  const items: MenuProps["items"] = [
    {
      label: (
        <a className="w-full h-full block text-left" href={"/"}>
          Chơi & Xem
        </a>
      ),
      key: PAGES.PLAYANDSEEN,
      icon: (
        <div className="w-[30px] h-[30px] rounded-full bg-white text-center border-solid border-[1px] flex justify-center border-container">
          <Image src="/playandseen.svg" width={19} height={19} alt="" />
        </div>
      ),
    },
    {
      label: (
        <a className="w-full h-full block text-left" href={PAGES.STUDY}>
          Học
        </a>
      ),
      key: PAGES.STUDY,
      icon: (
        <div className="w-[30px] h-[30px] rounded-full bg-white text-center border-solid border-[1px] flex justify-center border-container">
          <Image src="/study.svg" width={19} height={19} alt="" />
        </div>
      ),
    },
    {
      label: (
        <a className="w-full h-full block text-left" href={PAGES.PROJECT}>
          Làm Game/dự án
        </a>
      ),
      key: PAGES.PROJECT,
      icon: (
        <div className="w-[30px] h-[30px] rounded-full bg-white text-center border-solid border-[1px] flex justify-center border-container">
          <Image src="/project.svg" width={19} height={19} alt="" />
        </div>
      ),
    },
    {
      label: (
        <a className="w-full h-full block text-left" href={PAGES.PUBLIC}>
          Cộng đồng
        </a>
      ),
      key: PAGES.PUBLIC,
      icon: (
        <div className="w-[30px] h-[30px] rounded-full bg-white text-center border-solid border-[1px] flex justify-center border-container">
          <Image src="/public.svg" width={19} height={19} alt="" />
        </div>
      ),
    },
    {
      label: (
        <a className="w-full h-full block text-left" href={PAGES.PRESENT}>
          Đổi quà
        </a>
      ),
      key: PAGES.PRESENT,
      icon: (
        <div className="w-[30px] h-[30px] rounded-full bg-white text-center border-solid border-[1px] flex justify-center border-container">
          <Image src="/present.svg" width={19} height={19} alt="" />
        </div>
      ),
    },
    status === "authenticated"
      ? {
          label: (
            <a className="w-full h-full block text-left" href={PAGES.PROFILE}>
              Hồ sơ của tôi
            </a>
          ),
          key: PAGES.PROFILE,
          icon: (
            <div className="w-[30px] h-[30px] rounded-full bg-white text-center border-solid border-[1px] flex justify-center border-container">
              <Image src="/profileicon.svg" width={19} height={19} alt="" />
            </div>
          ),
        }
      : null,
  ];

  const [seenMore, setSeenMore] = useState<number>(5);

  const handleClick: MenuProps["onClick"] = (e) => {
    setCurrent(e.key as SetStateAction<PAGES>);
  };

  const handleSeenMore = () => {
    setSeenMore((prev) => prev + 5);
  };

  return (
    <div className="w-[255px] border-solid border-r-[1px] border-[#e7e8ea] max-laptop:w-[50px] sidenav__component">
      <div className="fixed w-[250px] max-laptop:w-[50px] py-5 px-4 overflow-y-auto h-[583px] max-laptop:px-1">
        <Menu
          onClick={handleClick}
          selectedKeys={[current]}
          items={items}
          mode="inline"
          className="sidenav__menu border-r-0 pb-10 border-solid border-b-[2px] border-[#e6e7ea]"
        />
        <div className="py-12 border-solid border-b-[2px] border-[#e6e7ea]">
          <h1 className="font-semibold text-lg max-laptop:hidden">
            Đề xuất code thủ
          </h1>
          <ul className="mt-5">
            {Array.from({ length: seenMore }, (_i, index) => (
              <li className="pb-6" key={index}>
                <div className="flex items-center gap-3">
                  <span>
                    <Image
                      src="https://sgp1.digitaloceanspaces.com/teky-prod/teky-edu-vn/media/avatars/trangbt-2023-07-25.png"
                      width={32}
                      height={32}
                      alt="abc"
                      className="rounded-full"
                    />
                  </span>
                  <div className="font-semibold max-laptop:hidden">
                    <h3 className="text-sm">Bùi Thu Trang </h3>
                    <div className="flex text-xs ">
                      <div className="border-r-[2px] border-solid border-black pr-2">
                        <span className="text-primary-blue">26</span> dự án
                      </div>
                      <div className="pl-2">
                        <span className="text-primary-blue">0</span> danh hiệu
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div
            className="flex gap-1 pl-5 cursor-pointer max-laptop:hidden"
            onClick={handleSeenMore}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="16"
              viewBox="0 0 18 16"
              fill="none"
            >
              <path
                d="M0.5 10.5L6 16L11.5 10.5L10.09 9.09L7 12.17V6.5C7 4 9 2 11.5 2H18V0H11.5C9.77609 0 8.12279 0.684819 6.90381 1.90381C5.68482 3.12279 5 4.77609 5 6.5V12.17L1.91 9.08L0.5 10.5Z"
                fill="#0654BA"
              />
            </svg>
            <span className="font-bold text-xs text-primary-blue relative -top-2">
              Xem thêm
            </span>
          </div>
        </div>
        <div className="py-12 border-solid border-b-[2px] border-[#e6ev7ea] max-laptop:hidden">
          <h1 className="font-semibold text-lg mb-3">Khám phá</h1>
          <ul className="font-bold text-xs text-[#0003] flex flex-wrap gap-3">
            <li className="px-[7px] py-[9px] rounded-[30px] bg-white border-solid border-[1px] border-white hover:text-black hover:border-primary-orange">
              <a href="">##gamehay</a>
            </li>
            <li className="px-[7px] py-[9px] rounded-[30px] bg-white border-solid border-[1px] border-white hover:text-black hover:border-primary-orange">
              <a href="">##codekitten</a>
            </li>
            <li className="px-[7px] py-[9px] rounded-[30px] bg-white border-solid border-[1px] border-white hover:text-black hover:border-primary-orange">
              <a href="">##gamevui</a>
            </li>
            <li className="px-[7px] py-[9px] rounded-[30px] bg-white border-solid border-[1px] border-white hover:text-black hover:border-primary-orange">
              <a href="">##funny</a>
            </li>
            <li className="px-[7px] py-[9px] rounded-[30px] bg-white border-solid border-[1px] border-white hover:text-black hover:border-primary-orange">
              <a href="">##laptrinhgame</a>
            </li>
          </ul>
        </div>
        <div className="py-12 border-solid border-b-[2px] border-[#e6e7ea]">
          <h1 className="font-semibold text-lg max-laptop:hidden">
            Bảng xếp hạng lực chiến
          </h1>
          <h4 className="font-bold text-xs text-primary-blue max-laptop:hidden">
            Làm sao để thăng hạng
          </h4>
          <ul className="mt-5">
            {Array.from({ length: seenMore }, (_i, index) => (
              <li className="pb-6" key={index}>
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <Image
                      src="https://sgp1.digitaloceanspaces.com/teky-prod/teky-edu-vn/media/avatars/trangbt-2023-07-25.png"
                      width={32}
                      height={32}
                      alt="abc"
                      className="rounded-full"
                    />
                    <div className="w-5 h-5 text-sm text-white bg-black rounded-full text-center absolute -top-2 left-4 border-solid border-[1px] border-[#e6e7ea]">
                      {index + 1}
                    </div>
                  </div>
                  <div className="font-semibold max-laptop:hidden">
                    <div className="flex items-center gap-1">
                      <h3 className="text-sm">Bùi Thu Trang </h3>
                      <div className="bg-[url('https://teky.edu.vn/static/web/v3/img/icon/icon-checked.svg')] w-[14px] h-[14px] bg-no-repeat"></div>
                    </div>
                    <div className="flex text-[10px]">
                      <div className="text-[#ffa800] flex gap-1 items-center">
                        <div className="bg-[url('https://teky.edu.vn/static/web/v3/img/icon/icon-paddy.svg')] w-[14px] h-[14px] bg-no-repeat"></div>
                        <span>287,000 thóc</span>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
