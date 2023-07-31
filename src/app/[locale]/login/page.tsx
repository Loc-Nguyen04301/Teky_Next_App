import Image from "next/image";
import { useTranslations } from "next-intl";
import { useSession, signIn } from "next-auth/react";

export default function LoginPage() {
  const t = useTranslations("Login");

  const { data: session } = useSession();

  const handleLoginGoogle = () => {
    signIn("google", { callbackUrl: process.env.NEXT_PUBLIC_CLIENT_URL });
  };

  return (
    <div className="p-5 h-screen">
      <div>
        <div className="max-w-[500px] w-full mx-auto ">
          <div className="bg-white rounded-[30px] px-[79px] py-[30px]">
            <div className="flex items-center justify-between mb-4">
              <h1 className="font-bold text-[32px]">{t("login")}</h1>
              <div className="w-[37px] h-[30px]">
                <Image
                  src="/shortlogo.svg"
                  width={37}
                  height={30}
                  alt="short-logo"
                />
              </div>
            </div>
            <div className="mb-[55px]">
              <label className="text-[28px] font-normal">
                {t("welcome")}
                <br />
                {t("back")}
              </label>
            </div>
            <form>
              <div className="w-[342px] mb-4">
                <input
                  className="rounded-[55px] px-5 py-[15px] border-solid border-[1px] border-[#d9d9d9] w-full font-medium text-base text-[#495057]"
                  placeholder={t("phone")}
                  type="text"
                  name="email"
                  autoComplete="username"
                />
              </div>
              <div className="w-[342px] mb-4">
                <input
                  className="rounded-[55px] px-5 py-[15px] border-solid border-[1px] border-[#d9d9d9] w-full font-medium text-base text-[#495057]"
                  placeholder={t("password")}
                  type="password"
                  name="password"
                  autoComplete="current-password"
                />
              </div>
              <p className="text-right text-[15px] mb-[25px] text-[#0654BA] font-medium">
                <a href="/">{t("forget")}</a>
              </p>
              <div
                // type=""
                className="bg-primary-green text-white rounded-[50px] p-3 h-[50px] w-full text-large font-semibold text-center"
              >
                {t("login")}
              </div>
            </form>
            <button
              name="button"
              className="my-6 w-full"
              onClick={handleLoginGoogle}
            >
              <Image
                alt="auth"
                width={23}
                height={23}
                src="https://accounts.teky.edu.vn/assets/teky/img/common/login-google-6b70c9c349beb10a9025183cdc114bb6cf460075f9539d25bbad0e40a33614df.svg"
                className="mx-auto"
              />
            </button>
            <div className="text-center relative before:w-full before:bg-black before:absolute before:left-0 before:top-1/2 before:content-[''] before:h-[1px] before:block">
              <span className="text-xs px-3 relative z-[1000] bg-white font-light">
                {t("login")}
              </span>
            </div>
            <p className="text-center mt-[31px]">
              {t("login")}
              <a className="ml-1 font-semibold text-primary-blue" href="/">
                {t("student-acc")}
              </a>
            </p>
            <p className="text-center">
              {t("login")}
              <a
                className="ml-1 font-semibold text-primary-blue"
                href="/users/sign_up?locale=vi"
              >
                {t("regis-now")}
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
