import React, { useState } from "react";

function OrderTrackingForm() {
  const [isFocusedTel, setIsFocusedTel] = useState(false);
  return (
    <div className="w-full h-full pt-[61px] md:pt-[81px] flex items-center justify-center">
      <div className="w-full max-w-[375px] h-full pt-[80px] flex flex-col items-center">
        <img
          src="/images/cover-tracking.svg"
          alt=""
          className="w-[300px] h-[165px] mb-[45px]"
        />
        <p className="font-prompt text-[32px] font-semibold mb-[10px]">
          ติดตามอาหารของคุณ
        </p>
        <p className="font-prompt text-[18px] text-center text-[#61738a] mb-[20px]">
          กรอกเบอร์โทรศัพท์ของคุณ
          <br />
          แล้วเริ่มติดตามรายการได้เลย
        </p>
        {/** Tel Section Start */}
        <form className="w-full h-full mb-[50px]">
          <div className="w-full h-[65px] px-[10px] md:px-[5px] relative mb-[20px]">
            <div className="w-full h-full px-[5px] pt-[5px] md:px-[10px] md:pt-[10px]">
              <div
                className={`w-full h-[45px] rounded-[6px] border-[1px] flex items-center justify-between pr-[5px] ${
                  isFocusedTel
                    ? "border-[1px] border-[#3f8aac]"
                    : "border-[1px]"
                }`}
              >
                <div className="w-[40px] h-[30px] flex items-center justify-center mr-[10px] border-r-[1px]">
                  <span className="font-prompt font-light text-[12px] text-[#666f89]">
                    +66
                  </span>
                </div>
                {/** Floating Label Tel Start */}
                <div className="w-[200px] h-[30px] relative">
                  <input
                    id="phone"
                    type="tel"
                    className="peer border-0 border-transparent w-full h-full placeholder-transparent text-[12px] bg-white text-black focus:ring-0"
                    placeholder="เบอร์โทรศัพท์"
                    autoComplete="current-tel"
                    onFocus={() => {
                      setIsFocusedTel(true);
                    }}
                    onBlur={() => {
                      setIsFocusedTel(false);
                    }}
                    required
                  />
                  <label
                    htmlFor="phone"
                    className="absolute left-0 ml-1 -top-1.5 bg-white px-1 font-prompt font-light text-[12px] text-[#666f89] duration-200 transform scale-75 origin-[0] peer-placeholder-shown:top-1.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-[12px] peer-placeholder-shown:text-[#666f89] peer-focus:-top-1.5 peer-focus:scale-75"
                  >
                    เบอร์โทรศัพท์<span className="text-red-500">*</span>
                  </label>
                </div>
                {/** Floating Label Tel End */}
                <div className="w-[80px] h-[35px] rounded-[6px] cursor-pointer bg-[#e7e7e7] flex items-center justify-center">
                  <span className="font-prompt text-[13px] font-semibold text-[#b9b8b8]">
                    ยืนยัน OTP
                  </span>
                </div>
              </div>
            </div>
            <span className="font-prompt text-[9px] absolute text-[#92939b] right-[15px] bottom-[-1px] md:bottom-[-5px]">
              เช่น 08X-XXX-XXXX
            </span>
          </div>
          <div className="w-full h-full px-[15px] md:px-[85px] flex items-center justify-center">
            <button className="w-full h-[40px] rounded-[6px] bg-[#006491]">
              <span className="font-prompt text-white text-[13px] font-semibold">
                เริ่มติดตาม
              </span>
            </button>
          </div>
        </form>
        {/** Tel Section End */}
      </div>
    </div>
  );
}

export default OrderTrackingForm;
