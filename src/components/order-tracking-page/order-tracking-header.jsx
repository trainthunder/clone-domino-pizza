import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTrackingModal } from "../../context/tracking-modal-context";
import { useCountPizza } from "../../context/add-pizza-context";

function OrderTrackingHeader() {
  const navigate = useNavigate();
  const { isCount } = useCountPizza();
  const { setIsOpen } = useTrackingModal();
  const handleTrackingBurger = () => {
    setIsOpen(true);
  };
  return (
    <header className="w-full p-[10px] md:p-[20px] flex items-center justify-center fixed bg-white z-50 shadow-lg">
      <div className="w-full max-w-[1230px] h-full flex items-center justify-between">
        {/** Menu Start */}
        <div className="flex items-center">
          <button
            className="w-[50px] h-[36px] flex items-center justify-center"
            onClick={handleTrackingBurger}
          >
            {/** Hamburger Menu Icon Start */}
            <div className="w-[35px] h-[35px] rounded-full flex items-center justify-center hover:bg-[#e6f6fc]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                className="w-[25px] h-[25px] text-[#006491]"
              >
                <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </div>
            {/** Hamburger Menu Icon End */}
          </button>
          {/** px-[816px] Menu Start */}
          <div className="hidden md2:flex ml-[8px] w-[250px] h-[26px] justify-between items-center">
            <p
              className="text-[14px] font-prompt cursor-pointer hover:text-[#4a91b1]"
              onClick={() => {
                navigate("/home");
              }}
            >
              หน้าหลัก
            </p>
            <p
              className="text-[14px] font-prompt cursor-pointer text-[#4a91b1]"
              onClick={() => {
                navigate("/tracking");
              }}
            >
              ติดตามการสั่งซื้อ
            </p>
            <p
              className="text-[14px] font-prompt cursor-pointer hover:text-[#4a91b1]"
              onClick={() => {
                navigate("/search-store");
              }}
            >
              ค้นหาสาขา
            </p>
          </div>
          {/** px-[816px] Menu End */}
        </div>
        {/** Menu End */}

        {/** Logo Domino Pizza Start */}
        <button
          className="md:w-[180px] md:h-[40px] flex justify-center min-[816px]:justify-start"
          onClick={() => {
            navigate("/home");
          }}
        >
          <img
            src="/images/logo-head.svg"
            alt=""
            className="w-[135px] h-[32px] cursor-pointer"
          />
        </button>
        {/** Logo Domino Pizza End */}

        {/** Search and Change Language Start */}
        <div className="flex">
          {/** Change Language Start */}
          <button className="w-[55px] h-[40px] p-[4px]">
            <div className="flex items-center justify-between">
              <img
                src="images/thailand.svg"
                alt=""
                className="w-[18px] h-[18px]"
              />
              <div className="w-[20px] h-[26px] flex items-center">
                <p className="text-[12px] font-prompt">ไทย</p>
              </div>
            </div>
          </button>
          {/** Change Language End */}
          {/** Search Start */}
          <div className="w-[42px] md:w-[60px] h-[40px] px-[8px] py-[4px] md:py-[3px] md:pl-[18px] md:pr-[5px]">
            <button className="w-[28px] h-[28px] md:w-[36px] md:h-[36px] flex items-center justify-center">
              {/** Search Icon Start */}
              <div className="w-full h-full rounded-full flex items-center justify-center hover:bg-[#e6f6fc]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  className="w-[20px] h-[20px] text-[#006491]"
                >
                  <path d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
              </div>
              {/** Search Icon End */}
            </button>
          </div>
          {/** Search End */}
        </div>
        {/** Search and Change Language End */}
      </div>
    </header>
  );
}

export default OrderTrackingHeader;
