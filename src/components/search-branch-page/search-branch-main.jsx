import React, { useState } from "react";

function SearchBranchMain() {
  const store = [
    { branch: "บางลำพู", meter: "4.28 กม." },
    { branch: "สุทธิสาร", meter: "4.29 กม." },
    { branch: "สุขุมวิท 22", meter: "4.94 กม." },
    { branch: "เสนาเฟสท์", meter: "6.10 กม." },
    { branch: "เซนหลุยส์", meter: "6.12 กม." },
    { branch: "บางซ่อน", meter: "6.20 กม." },
    { branch: "ปิ่นเกล้า", meter: "7.68 กม." },
    { branch: "โชคชัย 4", meter: "8.50 กม." },
    { branch: "สี่แยกเกษตร เสนานิคม", meter: "9.09 กม." },
    { branch: "พีเพิล พาร์ค", meter: "9.60 กม." },
    { branch: "ริเวอร์ พลาซ่า นนทบุรี", meter: "9.61 กม." },
    { branch: "งามวงศ์วาน", meter: "10.16 กม." },
    { branch: "บางกะปิ", meter: "11.05 กม." },
    { branch: "เพชรเกษม 48/1", meter: "11.63 กม." },
    { branch: "สุขุมวิท 103", meter: "12.67 กม." },
    { branch: "อ่อนนุช 70/1", meter: "13.99 กม." },
    { branch: "รามอินทรา กม.8", meter: "15.63 กม." },
    { branch: "เมเจอร์ ปากเกร็ด", meter: "16.31 กม." },
    { branch: "อมอรีนี่", meter: "17.01 กม." },
    { branch: "สรงประภา", meter: "19.24 กม." },
    { branch: "ทรัพย์บุญชัย", meter: "20.12 กม." },
    { branch: "เพชรเกษม 77/4", meter: "20.69 กม." },
    { branch: "สายไหม", meter: "23.40 กม." },
    { branch: "รัตนโกสินทร์", meter: "25.88 กม." },
    { branch: "พัทยาใต้", meter: "100.45 กม." },
  ];
  const [isFocusedSearch, setIsFocusedSearch] = useState(false);
  const [isFocusedSearchMini, setIsFocusedSearchMini] = useState(false);
  return (
    <div className="w-full h-full pt-[61px] md:pt-[81px] flex flex-col items-center justify-center mb-[50px]">
      <p className="font-prompt text-[24px] my-[20px] md:mt-[40px] md:mb-[20px]">
        ค้นหาสาขาใกล้คุณ
      </p>
      <div className="w-full max-w-[1230px] h-full md:px-[15px] flex flex-col items-center md:items-start md:flex-row md:gap-[15px] md:justify-between">
        {/** Laptotp Search Store Start */}
        <div className="w-full max-w-[430px] h-full hidden md:flex border-[1px] rounded-[8px] flex-col">
          {/** Search Text Store Section Start */}
          <div className="w-full h-[70px] px-[20px] pt-[25px] pb-[5px]">
            <div
              className={`w-full h-full rounded-[8px] border-[1px] flex items-center ${
                isFocusedSearch
                  ? "border-[1px] border-[#3f8aac]"
                  : "border-[1px]"
              }`}
            >
              <div className="w-[30px] h-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-[18px] h-[18px] text-[#8d9bb1]"
                >
                  <path d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
              </div>
              <input
                type="text"
                className="w-full h-[26px] focus:ring-0 outline-none border-0 px-0 font-prompt text-[12px]"
                placeholder="ค้นหาสาขา"
                onFocus={() => {
                  setIsFocusedSearch(true);
                }}
                onBlur={() => {
                  setIsFocusedSearch(false);
                }}
              />
            </div>
          </div>
          {/** Search Text Store Section End */}
          <div className="w-full h-[380px] px-[15px] pt-[10px] bg-white flex flex-col overflow-y-auto">
            {/** First Store Section Start */}
            <button className="w-full px-[10px] py-[15px] flex items-center justify-between border-b-[1px]">
              <div className="flex flex-col gap-[5px] mr-[10px] text-start">
                <p className="font-prompt text-[12px] font-semibold text-black">
                  เดอะซีซัน
                </p>
                <div className="w-full h-full max-h-[40px] font-prompt text-[12px] flex flex-col min-[845px]:flex-row">
                  <span className="font-semibold text-[#36b6e6]">0.49 กม.</span>
                  <div className="flex items-center justify-center text-[#aaacad]">
                    <div className="w-[20px] h-[20px] flex items-center justify-center mr-[3px] min-[845px]:ml-[10px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-[16px] h-[16px]"
                      >
                        <path d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                      </svg>
                    </div>
                    <span>อา.-พฤ. 10:00-22:00 ศ.-ส. 10:00-23:00</span>
                  </div>
                </div>
              </div>
              <div className="w-[52px] h-[30px] rounded-[6px] flex items-center justify-center bg-[#e6f6fc]">
                <span className="font-prompt text-[11px] font-semibold text-[#2a7fa4]">
                  ใกล้ที่สุด
                </span>
              </div>
            </button>
            {/** First Store Section End */}

            {/** Another Store Section Start */}
            {store.map((items, index) => {
              return (
                <button
                  className="w-full px-[10px] py-[15px] flex items-center justify-between border-b-[1px]"
                  key={index}
                >
                  <div className="flex flex-col gap-[5px] mr-[10px] text-start">
                    <p className="font-prompt text-[12px] font-semibold text-black">
                      {items.branch}
                    </p>
                    <div className="w-full h-full max-h-[40px] font-prompt text-[12px] flex">
                      <span className="font-semibold text-[#36b6e6]">
                        {items.meter}
                      </span>
                      <div className="flex items-center justify-center text-[#aaacad]">
                        <div className="w-[20px] h-[20px] flex items-center justify-center mr-[3px] ml-[10px]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="w-[16px] h-[16px]"
                          >
                            <path d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                          </svg>
                        </div>
                        <span>อา.-พฤ. 10:00-22:00 ศ.-ส. 10:00-23:00</span>
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
            {/** Another Store Section End */}
          </div>
        </div>
        {/** Laptop Search Store End */}

        {/** Google Map Start */}
        <div className="w-full md:w-[740px] h-[340px] md:h-[450px] bg-red-500 md:rounded-[8px]">
          <img
            src="/images/google-map-mockup.png"
            alt=""
            className="w-full h-full md:rounded-[8px]"
          />
        </div>
        {/** Google Map End */}

        {/** Mobile Search Store Start */}
        <div className="w-full h-[400px] flex flex-col md:hidden absolute top-[465px]">
          {/** Search Text Store Section Start */}
          <div className="w-full h-[70px] rounded-t-[12px] px-[15px] py-[25px] pb-[5px] bg-white">
            <div
              className={`w-full h-full rounded-[6px] border-[1px] flex items-center ${
                isFocusedSearchMini
                  ? "border-[1px] border-[#3f8aac]"
                  : "border-[1px]"
              }`}
            >
              <div className="w-[30px] h-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-[18px] h-[18px] text-[#8d9bb1]"
                >
                  <path d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
              </div>
              <input
                type="text"
                className="w-full h-[26px] focus:ring-0 outline-none border-0 px-0 font-prompt text-[12px]"
                placeholder="ค้นหาสาขา"
                onFocus={() => {
                  setIsFocusedSearchMini(true);
                }}
                onBlur={() => {
                  setIsFocusedSearchMini(false);
                }}
              />
            </div>
          </div>
          {/** Search Text Store Section End */}

          <div className="w-full h-[330px] px-[15px] pt-[10px] bg-white flex flex-col overflow-y-auto">
            {/** First Store Section Start */}
            <button className="w-full px-[10px] py-[15px] flex items-center justify-between border-b-[1px]">
              <div className="flex flex-col gap-[5px] mr-[10px] text-start">
                <p className="font-prompt text-[12px] font-semibold text-black">
                  เดอะซีซัน
                </p>
                <div className="w-full h-full max-h-[40px] font-prompt text-[12px] flex flex-col min-[430px]:flex-row">
                  <span className="font-semibold text-[#36b6e6]">0.49 กม.</span>
                  <div className="flex items-center justify-center text-[#aaacad]">
                    <div className="w-[20px] h-[20px] flex items-center justify-center mr-[3px] min-[430px]:ml-[10px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-[16px] h-[16px]"
                      >
                        <path d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                      </svg>
                    </div>
                    <span>อา.-พฤ. 10:00-22:00 ศ.-ส. 10:00-23:00</span>
                  </div>
                </div>
              </div>
              <div className="w-[52px] h-[30px] rounded-[6px] flex items-center justify-center bg-[#e6f6fc]">
                <span className="font-prompt text-[11px] font-semibold text-[#2a7fa4]">
                  ใกล้ที่สุด
                </span>
              </div>
            </button>
            {/** First Store Section End */}

            {/** Another Store Section Start */}
            {store.map((items, index) => {
              return (
                <button
                  className="w-full px-[10px] py-[15px] flex items-center justify-between border-b-[1px]"
                  key={index}
                >
                  <div className="flex flex-col gap-[5px] mr-[10px] text-start">
                    <p className="font-prompt text-[12px] font-semibold text-black">
                      {items.branch}
                    </p>
                    <div className="w-full h-full max-h-[40px] font-prompt text-[12px] flex">
                      <span className="font-semibold text-[#36b6e6]">
                        {items.meter}
                      </span>
                      <div className="flex items-center justify-center text-[#aaacad]">
                        <div className="w-[20px] h-[20px] flex items-center justify-center mr-[3px] ml-[10px]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="w-[16px] h-[16px]"
                          >
                            <path d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                          </svg>
                        </div>
                        <span>อา.-พฤ. 10:00-22:00 ศ.-ส. 10:00-23:00</span>
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
            {/** Another Store Section End */}
          </div>
        </div>
        {/** Mobile Search Store End */}
      </div>
    </div>
  );
}

export default SearchBranchMain;
