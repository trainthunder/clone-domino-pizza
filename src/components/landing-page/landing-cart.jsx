import React from "react";

function LandingCart() {
  return (
    <div className="w-screen px-[15px] py-[20px] rounded-t-[14px] sticky bottom-0 bg-white shadow-[0px_-4px_4px_0px_rgba(0,0,0,0.05)] min-[816px]:hidden">
      <div className="w-full h-[52px] bg-[#0b6a95] px-[10px] py-[14px] rounded-[8px] flex items-center justify-between">
        <div className="flex items-center gap-[8px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-[16px] h-[16px] text-white"
          >
            <path d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
          </svg>
          <p className="font-prompt font-medium text-[13px] text-white">
            ดูตะกร้า
          </p>
          <div className="flex items-center">
            <p className="font-prompt font-light text-[#898989] text-[13px]">
              0
            </p>
            <p className="font-prompt font-light text-[#898989] ml-[3px] text-[13px]">
              รายการ
            </p>
          </div>
        </div>
        <div className="flex">
          <p className="font-prompt font-semibold text-white text-[13px]">฿</p>
          <p className="font-prompt font-semibold text-white text-[13px]">
            50.00
          </p>
        </div>
      </div>
    </div>
  );
}

export default LandingCart;
