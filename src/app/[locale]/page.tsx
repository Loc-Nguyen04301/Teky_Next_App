"use client";
import React, { SetStateAction } from "react";
import Image from "next/image";
import type { MenuProps } from "antd";
import { Button, Dropdown, Space } from "antd";
import { useState } from "react";
import CardItem from "@/components/CardItem";
import { useTranslations } from "next-intl";

enum FILTERS {
  ALL = "Toàn bộ",
  PLAY = "Chơi",
  SEE = "Xem",
}

const items: MenuProps["items"] = [
  {
    key: FILTERS.ALL,
    label: <a className="text-base font-medium">Toàn bộ</a>,
  },
  {
    key: FILTERS.PLAY,
    label: <a className="text-base font-medium">Chơi</a>,
  },
  {
    key: FILTERS.SEE,
    label: <a className="text-base font-medium">Xem</a>,
  },
];

export default function Home() {
  const t = useTranslations("Index");

  const [filter, setFilter] = useState<FILTERS>(FILTERS.ALL);

  const onClick: MenuProps["onClick"] = (e) => {
    setFilter(e.key as SetStateAction<FILTERS>);
  };
  
  return (
    <div className="main">
      <div className="pt-[30px] pl-3 overflow-y-auto pb-20 pr-[240px] max-[1000px]:px-3">
        <div className="max-w-[500px] mx-auto">
          <div className="flex justify-between pb-5">
            <h2 className="font-bold text-[22px] max-laptop-small:text-lg">
              <span className="text-[#17a2b8]">#</span>Bạn nên thử - Top
              Trending
            </h2>
            <div>
              <label className="font-bold text-sm max-tablet:hidden">
                {filter}
              </label>
              <Space direction="vertical">
                <Space wrap>
                  <Dropdown
                    menu={{ items, onClick }}
                    trigger={["click"]}
                    placement="bottomRight"
                  >
                    <Button className="border-0">
                      <Image
                        src={
                          "https://teky.edu.vn/static/web/v3/img/icon/sortby-icon.svg"
                        }
                        width={18}
                        height={18}
                        alt="filter"
                      />
                    </Button>
                  </Dropdown>
                </Space>
              </Space>
            </div>
          </div>
          <div className="list-card">
            {filter === FILTERS.ALL &&
              Array.from({ length: 6 }, (_i, index) => (
                <div key={index}>
                  <div className="mb-10">
                    <CardItem
                      heart={6}
                      message={2}
                      name="Nguyễn Gia Lộc"
                      title="Minecraft Quiz"
                      position="Code thủ"
                      image="https://sgp1.digitaloceanspaces.com/teky-prod/teky-edu-vn/media/avatars/minhtv-2023-07-22.png"
                    />
                  </div>
                  <div className="mb-10">
                    <CardItem
                      heart={6}
                      message={2}
                      name="Nguyễn Gia Lộc"
                      title="Santa"
                      position="Nhà sáng tạo"
                      image="https://teky.edu.vn/static/web/upload/ava_2.png"
                    />
                  </div>
                </div>
              ))}
            {filter === FILTERS.PLAY &&
              Array.from({ length: 6 }, (_i, index) => (
                <div className="mb-10" key={index}>
                  <CardItem
                    heart={6}
                    message={2}
                    name="Nguyễn Gia Lộc"
                    title="Santa"
                    position="Nhà sáng tạo"
                    image="https://teky.edu.vn/static/web/upload/ava_2.png"
                  />
                </div>
              ))}
            {filter === FILTERS.SEE &&
              Array.from({ length: 6 }, (_i, index) => (
                <div className="mb-10" key={index}>
                  <CardItem
                    heart={6}
                    message={2}
                    name="Nguyễn Gia Lộc"
                    title="Minecraft Quiz"
                    position="Code thủ"
                    image="https://sgp1.digitaloceanspaces.com/teky-prod/teky-edu-vn/media/avatars/minhtv-2023-07-22.png"
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
