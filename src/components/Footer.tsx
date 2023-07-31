import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="z-[100000] bg-white relative p-5 flex justify-between flex-wrap">
      <div className="w-[29%] max-w-[375px] max-[1000px]:min-w-full pb-3">
        <div className="flex flex-col h-full justify-between">
          <div>
            <div className="flex gap-2">
              <Image
                src="https://teky.edu.vn/static/web/v3/img/common/logo.svg"
                width={110}
                height={37}
                alt="logo-icon"
              />
              <ul className="flex px-3 rounded-[40px] flex-1 bg-[#dcf4ee] justify-evenly items-center gap-1">
                <li>
                  <Image
                    src="https://teky.edu.vn/static/web/v3/img/common/logo-CodeKitten.svg"
                    width={65}
                    height={15}
                    alt="icon-1"
                  />
                </li>
                <li>
                  <Image
                    src="https://teky.edu.vn/static/web/v3/img/common/logo-KittenJr2.svg"
                    width={65}
                    height={15}
                    alt="icon-1"
                  />
                </li>
                <li>
                  <Image
                    src="https://teky.edu.vn/static/web/v3/img/common/logo-TOPPY.svg"
                    width={60}
                    height={15}
                    alt="icon-1"
                  />
                </li>
                <li>
                  <Image
                    src="https://teky.edu.vn/static/web/v3/img/common/logo-TutorO.svg"
                    width={60}
                    height={15}
                    alt="icon-1"
                  />
                </li>
              </ul>
            </div>
            <p className="pt-5 text-sm">
              TEKY là Học viện sáng tạo công nghệ với chương trình giảng dạy
              STEAM
              <strong className="px-1">
                (Science – Technology – Engineering – Art – Mathematics)
              </strong>
              theo chuẩn Mỹ đầu tiên tại Việt Nam dành cho trẻ em từ 4 đến 18
              tuổi.
            </p>
          </div>
          <div className="pt-5">
            <form className="w-100 mb-3">
              <div className="w-100 h-[50px] rounded-[50px] px-5 border-solid border-[1px] border-[#D9D9D9] flex justify-between">
                <div className="text-xs w-4/5">
                  <label className="font-bold block mt-1">
                    Đăng ký nhận tin
                  </label>
                  <input
                    className="text-red-400 focus-visible:outline-none font-medium"
                    type="email"
                    name="email"
                  ></input>
                </div>
                <button type="submit" className="button-register">
                  <Image
                    src="https://teky.edu.vn/static/web/v3/img/icon/icon-send.svg"
                    alt=""
                    width={19}
                    height={18}
                  />
                </button>
              </div>
            </form>
            <div className="flex justify-between">
              <div>
                <Image
                  src="https://teky.edu.vn/static/web/v3/img/common/icon-check-TB.png"
                  width={110}
                  height={42}
                  alt="icon-5"
                />
              </div>
              <ul className="flex items-center gap-1">
                <li>
                  <Image
                    src="https://teky.edu.vn/static/web/v3/img/common/social-zalo.svg"
                    width={32}
                    height={32}
                    alt="icon-1"
                  />
                </li>
                <li>
                  <Image
                    src="https://teky.edu.vn/static/web/v3/img/common/social-face.svg"
                    width={32}
                    height={32}
                    alt="icon-1"
                  />
                </li>
                <li>
                  <Image
                    src="https://teky.edu.vn/static/web/v3/img/common/social-tiktok.svg"
                    width={32}
                    height={32}
                    alt="icon-1"
                  />
                </li>
                <li>
                  <Image
                    src="https://teky.edu.vn/static/web/v3/img/common/social-youtube.svg"
                    width={32}
                    height={32}
                    alt="icon-1"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[14%] max-w-[180px] max-[1000px]:min-w-[28%] max-tablet:min-w-[50%]">
        <h3 className="font-bold mb-8">Dành cho Học sinh</h3>
        <ul className="f-menu">
          <li>
            <a href="/">Chơi &amp; Xem</a>
          </li>
          <li>
            <a href="/hoc/">Học</a>
          </li>
          <li>
            <a href="/lam-game/">Làm Game/dự án</a>
          </li>
          <li>
            <a href="/cong-dong/">Cộng đồng</a>
          </li>
          <li>
            <a href="/doi-qua/">Đổi quà</a>
          </li>

          <li>
            <a href="/login/">Hồ sơ của tôi</a>
          </li>

          <li>
            <a href="/tro-giup/">Trợ giúp</a>
          </li>
        </ul>
      </div>
      <div className="w-[14%] max-w-[180px] max-[1000px]:min-w-[28%] max-tablet:min-w-[50%]">
        <h3 className="font-bold mb-8">Dành cho Phụ huynh</h3>
        <ul className="f-menu">
          <li>
            <a href="/phu-huynh/gioi-thieu/">Về TEKY</a>
          </li>
          <li>
            <a href="/phu-huynh/tre-em-can-hoc-lap-trinh/">
              Giải pháp giáo dục
            </a>
          </li>
          <li>
            <a href="/phu-huynh/khoa-hoc/">Khóa học</a>
          </li>
          <li>
            <a href="/v2/tuyen-dung/">Tuyển dụng</a>
          </li>
          <li>
            <a href="https://teky.edu.vn/blog/">Blog</a>
          </li>
          <li>
            <a href="/lien-he/khieu-nai/">Khiếu nại</a>
          </li>
          <li>
            <a href="/phu-huynh/lien-he/">Liên hệ</a>
          </li>
          <li>
            <a href="https://drive.google.com/file/d/1pEvYcSbscIXYICtbEx1vomTp7GP9mQ3X/view?usp=sharing">
              Chính sách và Quy định
            </a>
          </li>
          <li>
            <a href="https://drive.google.com/file/d/1wJ3jPmlaGPLKC-F3XaBQsweGT8eVL4ow/view?usp=sharing">
              Chính sách bảo vệ thông tin
            </a>
          </li>
        </ul>
      </div>
      <div className="w-[22%] max-w-[300px] max-[1000px]:min-w-[40%] max-tablet:min-w-full">
        <h3 className="font-bold mb-8">Thông tin liên hệ</h3>
        <div className="info-row">
          <span className="info-icon">
            <Image
              src="https://teky.edu.vn/static/web/v3/img/icon/icon-phone-2.svg"
              alt=""
              width={17}
              height={17}
            />
          </span>
          <div className="info-cont">
            <ul className="list-hotline">
              <li>
                <label className="hotline-label">Tổng đài</label>
                <strong className="hotline-number">1900 3168</strong>
              </li>
              <li>
                <label className="hotline-label">Hotline lãnh đạo</label>
                <strong className="hotline-number">033 459 2016</strong>
              </li>
            </ul>
          </div>
        </div>
        <div className="info-row">
          <span className="info-icon">
            <Image
              src="https://teky.edu.vn/static/web/v3/img/icon/icon-mail.svg"
              alt=""
              width={17}
              height={17}
            />
          </span>
          <div className="info-cont">
            <strong>support</strong>@teky.edu.vn
          </div>
        </div>
        <div className="info-row">
          <span className="info-icon">
            <Image
              src="https://teky.edu.vn/static/web/v3/img/icon/icon-location.svg"
              alt=""
              width={17}
              height={17}
            />
          </span>
          <div className="info-cont pl-[6px]">
            <p className="leading-4 mb-2">
              <strong className="block">Trụ sở chính Miền Bắc</strong>
              <span className="text-xs">
                Tầng 5, Tòa nhà Mac Plaza Phường Mộ Lao, Quận Hà Đông, Hà Nội
              </span>
            </p>
            <p className="leading-4">
              <strong className="block">Trụ sở chính Miền Nam</strong>
              <span className="text-xs">
                152 Đ. Điện Biên Phủ, Phường 25, Bình Thạnh, Thành phố Hồ Chí
                Minh{" "}
              </span>
            </p>
          </div>
        </div>
        <div className="info-row">
          <span className="info-icon">
            <Image
              src="https://teky.edu.vn/static/web/v3/img/icon/icon-mail.svg"
              alt=""
              width={17}
              height={17}
            />
          </span>
          <div className="info-cont">
            <strong className="text-primary-blue">
              Danh sách toàn bộ học viện
            </strong>
          </div>
        </div>
        <address className="font-medium text-[10px] not-italic">
          Copyright © 2016-2023 <strong>TEKY Holdings</strong>. All rights
          reserved.
        </address>
      </div>
    </footer>
  );
};

export default Footer;
