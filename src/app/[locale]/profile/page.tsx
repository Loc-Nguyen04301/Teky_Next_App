"use client";
import React from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";

export default function Page() {
  const { data: session, status } = useSession();

  return (
    <>
      {session ? (
        <div className="pt-5">
          <div className="w-full max-w-[1230px] px-[30px] mx-auto">
            <div className="w-full max-w-[800px] mx-auto">
              <div className="mb-5 bg-white rounded-[30px]">
                <Image
                  src="https://teky.edu.vn/static/web/v3/img/data/profile-user-banner.png"
                  width={800}
                  height={200}
                  alt="banner"
                  className="rounded-t-[30px]"
                />
                <div className="view px-[30px] pb-[30px] max-tablet:px-3">
                  <div className="avatar mb-[5px] h-[55px] max-tablet:h-5">
                    <div className="thumb relative top-[-65px] left-0">
                      <div className="w-fit rounded-full border-[6px] border-solid border-white max-tablet:border-[3px]">
                        <Image
                          src={session.user?.image || ""}
                          width={100}
                          height={100}
                          alt="profile-avatar"
                          className="rounded-full max-tablet:w-[75.2px]"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="profile-name text-lg font-bold max-tablet:text-base">
                    {session?.user?.email}
                  </div>
                  <div className="profile-name text-sm font-medium mb-5">
                    Nông dân
                  </div>
                  <div className="static flex justify-between flex-wrap gap-3">
                    <div className="item">
                      <div className="static-icon mb-2">
                        <Image
                          src="https://teky.edu.vn/static/web/v3/img/icon/folder-black-2.svg"
                          width={23}
                          height={18}
                          alt="abc"
                        />
                      </div>
                      <strong className="static-number text-primary-blue">
                        0 Dự án
                      </strong>
                      <ul className="static-social flex">
                        <li className="text-sm after:content[''] after:w-[1px] after:h-[14px] after:inline-block after:bg-black after:mx-[4px]">
                          0 lượt <strong>yêu thích</strong>
                        </li>
                        <li>
                          0 <strong>bình luận</strong>
                        </li>
                      </ul>
                    </div>
                    <div className="item">
                      <div className="static-icon mb-2">
                        <Image
                          src="https://teky.edu.vn/static/web/v3/img/icon/post-docs.svg"
                          width={14}
                          height={18}
                          alt="abc"
                        />
                      </div>
                      <strong className="static-number text-primary-blue">
                        0 Bài đăng
                      </strong>
                      <ul className="static-social flex">
                        <li className="text-sm after:content[''] after:w-[1px] after:h-[14px] after:inline-block after:bg-black after:mx-[4px]">
                          0 lượt <strong>yêu thích</strong>
                        </li>
                        <li>
                          0 <strong>bình luận</strong>
                        </li>
                      </ul>
                    </div>
                    <div className="item">
                      <div className="static-icon mb-2">
                        <Image
                          src="https://teky.edu.vn/static/web/v3/img/icon/book.svg"
                          width={21}
                          height={18}
                          alt="abc"
                        />
                      </div>
                      <strong className="static-number text-primary-blue">
                        0 Khóa học
                      </strong>
                      <ul className="static-social flex">
                        <a className="flex text-sm text-primary-blue">
                          <Image
                            src={
                              "https://teky.edu.vn/static/web/v3/img/icon/arrow-right.svg"
                            }
                            width={16}
                            height={12}
                            alt="abc"
                            className="mr-1"
                          />
                          Quản lý học tập
                        </a>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
