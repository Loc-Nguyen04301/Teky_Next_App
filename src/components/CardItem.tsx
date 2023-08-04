import React from "react";
import Image from "next/image";
interface CarItemProps {
  heart: number;
  message: number;
  title: string;
  name: string;
  position: string;
  image: string;
}
const CardItem = ({
  heart,
  message,
  name,
  position,
  title,
  image,
}: CarItemProps) => {
  return (
    <div className="bg-white p-5 card__component rounded-3xl">
      <div className="flex justify-between mb-6">
        <div className="flex gap-3">
          <div className="relative bg-primary-orange w-fit h-fit rounded-full">
            <Image
              src={image}
              width={80}
              height={80}
              alt="avatar"
              className="max-tablet:w-[32px] rounded-full"
            />
          </div>
          <div className="text-sm font-medium">
            <span className="max-tablet:text-xs">
              {position}
              <span className="text-primary-blue font-semibold pl-1">
                {name}
              </span>
            </span>
            <h1 className="text-lg font-bold max-tablet:text-base">{title}</h1>
          </div>
        </div>
        <div className="flex flex-col items-center justify-around">
          <button className="flex h-[24px] items-center px-4 py-1 rounded-full border-solid border-[1px] border-primary-orange max-tablet:px-2 max-tablet:py-0">
            <span className="text-xs font-semibold text-primary-orange max-tablet:text-[10px]">
              Xem ngay
            </span>
          </button>
          <button>
            <Image
              src="https://teky.edu.vn/static/web/v3/img/icon/items-menu.svg"
              width={16}
              height={4}
              alt="xyz"
            />
          </button>
        </div>
      </div>
      <div className="flex gap-7">
        <span className="relative w-full h-full">
          <Image
            src="https://sgp1.digitaloceanspaces.com/teky-prod/teky-edu-vn/media/project_medias/2022/3/21/KPRB_2_4_AMH_copy.png"
            width={373}
            height={373}
            alt="123"
            className="rounded-xl object-cover object-center"
          />
        </span>
        <div className="flex flex-col justify-end">
          <div className="mb-2">
            <div className="w-[32px] h-[32px] rounded-full bg-[#F0F9FF] p-2 cursor-pointer border-solid border-[1px] hover:border-red-500">
              <Image
                src="https://teky.edu.vn/static/web/v3/img/icon/icon-heart.svg"
                width={16}
                height={16}
                alt="heart"
              />
            </div>
            <div className="text-xs font-semibold text-center">
              <span>{heart}</span>
            </div>
          </div>
          <div className="mb-2">
            <div className="w-[32px] h-[32px] rounded-full bg-[#F0F9FF] p-2 cursor-pointer border-solid border-[1px] hover:border-orange-500">
              <Image
                src="https://teky.edu.vn/static/web/v3/img/icon/icon-mesenger.svg"
                width={16}
                height={16}
                alt="message"
              />
            </div>
            <div className="text-xs font-semibold text-center">
              <span className="opacity-20">{message}</span>
            </div>
          </div>
          <div className="mb-2">
            <div className="w-[32px] h-[32px] rounded-full bg-[#F0F9FF] p-2 cursor-pointer border-solid border-[1px] hover:border-blue-500">
              <Image
                src="https://teky.edu.vn/static/web/v3/img/icon/icon-share.svg"
                width={16}
                height={16}
                alt="share"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
