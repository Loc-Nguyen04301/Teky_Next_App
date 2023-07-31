import React from "react";
import Image from "next/image";
import { signOut } from "next-auth/react";
import { useTranslations } from "next-intl";

const ProfileModal = () => {
  const t = useTranslations("ProfileModal");
  const handleLogOut = () => {
    signOut({ callbackUrl: `${process.env.NEXT_PUBLIC_CLIENT_URL}/login` });
  };

  return (
    <div
      className="absolute w-[390px] py-4 px-8 right-0 top-12 bg-white rounded-3xl"
      onClick={handleLogOut}
    >
      <h1 className="mb-3">{t("manageAccount")}</h1>
      <div className="flex hover:cursor-pointer hover:bg-[#F0F9FF]">
        <Image
          alt="log-out"
          width={22}
          height={22}
          src={
            "https://teky.edu.vn/static/web/v3/img/icon/icons-log-out-v3.png"
          }
        />
        <div className="ml-5 font-semibold">{t("logout")}</div>
      </div>
    </div>
  );
};

export default ProfileModal;
