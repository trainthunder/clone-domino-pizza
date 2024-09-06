import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function RegisterForm() {
  const navigate = useNavigate();
  const [isFocusedFirstName, setIsFocusedFirstName] = useState(false);
  const [isFocusedLastName, setIsFocusedLastName] = useState(false);
  const [isFocusedEmail, setIsFocusedEmail] = useState(false);
  const [isFocusedTel, setIsFocusedTel] = useState(false);
  const [isFocusedPassword, setIsFocusedPassword] = useState(false);
  const [isFocusedRePassword, setIsFocusedRePassword] = useState(false);

  return (
    <div className="w-screen h-full flex justify-center bg-white">
      <div className="w-full max-w-[610px] h-full pt-[61px] md:pt-[81px] flex flex-col items-center justify-center">
        <img
          src="/images/cover-register.svg"
          alt=""
          className="w-[300px] h-[170px] mt-[30px] mb-[45px]"
        />
        <div className="w-full h-full px-[15px]">
          <div className="w-full h-[35px] flex items-center justify-center mb-[10px]">
            <p className="font-prompt font-semibold text-[20px]">
              สมัครสมาชิก DOMINO'S
            </p>
          </div>
          <div className="w-full h-[45px] flex items-center justify-center mb-[30px]">
            <p className="font-prompt text-[12px] text-center text-[#6c6879]">
              ข้อมูลส่วนตัวจะถูกบันทึกไว้ สามารถสั่่งพิซซ่าได้ง่ายๆ
              <br />
              และดูรายการสั่งซื้อของคุณได้ตลอดเวลา
            </p>
          </div>
        </div>

        {/** Another Register Button Start */}
        <div className="w-full h-full flex flex-col md:flex-row px-[10px] md:px-[5px]">
          {/** Register Google Button Start */}
          <div className="w-full md:w-1/2 h-[50px] md:h-[60px] p-[5px] md:p-[10px]">
            <button className="w-full h-[40px] rounded-[6px] border-[1px] border-[#3f8aac] flex items-center justify-center hover:bg-[#e6f6fc]">
              <div className="flex gap-[10px] items-center justify-center">
                {/** Google Icon Start */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="100"
                  height="100"
                  viewBox="0 0 48 48"
                  className="w-[20px] h-[20px]"
                >
                  <path
                    fill="#FFC107"
                    d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                  ></path>
                  <path
                    fill="#FF3D00"
                    d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                  ></path>
                  <path
                    fill="#4CAF50"
                    d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                  ></path>
                  <path
                    fill="#1976D2"
                    d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                  ></path>
                </svg>
                {/** Google Icon End */}
                <span className="font-prompt text-[12px] text-black">
                  สมัครสมาชิกด้วย Google
                </span>
              </div>
            </button>
          </div>
          {/** Register Google Button End */}

          {/** Register Facebook Button Start */}
          <div className="w-full md:w-1/2 h-[50px] md:h-[60px] p-[5px] md:p-[10px]">
            <button className="w-full h-[40px] rounded-[6px] border-[1px] border-[#3f8aac] flex items-center justify-center hover:bg-[#e6f6fc]">
              <div className="flex gap-[10px] items-center justify-center">
                {/** Facebook Icon Start */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="100"
                  height="100"
                  viewBox="0 0 48 48"
                  className="w-[20px] h-[20px]"
                >
                  <path
                    fill="#039be5"
                    d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"
                  ></path>
                </svg>
                {/** Facebook Icon End */}
                <span className="font-prompt text-[12px] text-black">
                  สมัครสมาชิกด้วย Facebook
                </span>
              </div>
            </button>
          </div>
          {/** Register Facebook Button End */}
        </div>
        {/** Another Register Button End */}

        {/** Cut Section Start */}
        <div className="w-full h-full px-[10px] md:px-[5px]">
          <div className="w-full py-[10px] px-[5px] md:px-[10px] md:py-[15px]">
            <div className="w-full h-[20px] flex items-center justify-center relative">
              <hr className="w-full border-[1px]" />
              <div className="w-[30px] h-full bg-white absolute flex items-center justify-center">
                <p className="font-prompt text-[12px] text-[#92939b]">หรือ</p>
              </div>
            </div>
          </div>
        </div>
        {/** Cut Section End */}

        {/** Register Form Start */}
        <form
          action=""
          className="w-full h-full px-[10px] md:px-[5px] flex flex-col items-center justify-center mb-[40px]"
        >
          {/** Name Input Section Start */}
          <div className="w-full h-[55px] md:h-[65px] flex">
            {/** First Name Section Start */}
            <div className="w-1/2 h-full p-[5px] md:p-[10px]">
              <div
                className={`w-full h-full rounded-[6px] border-[1px] px-[10px] py-[8px] ${
                  isFocusedFirstName
                    ? "border-[1px] border-[#3f8aac]"
                    : "border-[1px]"
                }`}
              >
                {/** Floating Label First Name Start */}
                <div className="w-full h-[30px] relative">
                  <input
                    id="fname"
                    type="text"
                    className="peer border-0 border-transparent w-full h-full placeholder-transparent text-[12px] bg-white text-black focus:ring-0"
                    placeholder="ชื่อ"
                    autoComplete="current-text"
                    onFocus={() => {
                      setIsFocusedFirstName(true);
                    }}
                    onBlur={() => {
                      setIsFocusedFirstName(false);
                    }}
                    required
                  />
                  <label
                    htmlFor="fname"
                    className="absolute left-0 ml-1 -top-1.5 bg-white px-1 font-prompt font-light text-[12px] text-[#666f89] duration-200 transform scale-75 origin-[0] peer-placeholder-shown:top-1.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-[12px] peer-placeholder-shown:text-[#666f89] peer-focus:-top-1.5 peer-focus:scale-75"
                  >
                    ชื่่อ<span className="text-red-500">*</span>
                  </label>
                </div>
                {/** Floating Label First Name End */}
              </div>
            </div>
            {/** First Name Section End */}

            {/** Last Name Section Start */}
            <div className="w-1/2 h-full p-[5px] md:p-[10px]">
              <div
                className={`w-full h-full rounded-[6px] border-[1px] px-[10px] py-[8px] ${
                  isFocusedLastName
                    ? "border-[1px] border-[#3f8aac]"
                    : "border-[1px]"
                }`}
              >
                {/** Floating Label Last Name Start */}
                <div className="w-full h-[30px] relative">
                  <input
                    id="lname"
                    type="text"
                    className="peer border-0 border-transparent w-full h-full placeholder-transparent text-[12px] bg-white text-black focus:ring-0"
                    placeholder="นามสกุล"
                    autoComplete="current-text"
                    onFocus={() => {
                      setIsFocusedLastName(true);
                    }}
                    onBlur={() => {
                      setIsFocusedLastName(false);
                    }}
                    required
                  />
                  <label
                    htmlFor="lname"
                    className="absolute left-0 ml-1 -top-1.5 bg-white px-1 font-prompt font-light text-[12px] text-[#666f89] duration-200 transform scale-75 origin-[0] peer-placeholder-shown:top-1.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-[12px] peer-placeholder-shown:text-[#666f89] peer-focus:-top-1.5 peer-focus:scale-75"
                  >
                    นามสกุล<span className="text-red-500">*</span>
                  </label>
                </div>
                {/** Floating Label Last Name End */}
              </div>
            </div>
            {/** Last Name Section End */}
          </div>
          {/** Name Input Section End */}

          {/** Email and Tel Input Section Start */}
          <div className="w-full h-[110px] md:h-[65px] flex flex-col md:flex-row">
            {/** Email Section Start */}
            <div className="w-full md:w-1/2 h-[55px] md:h-[65px] p-[5px] md:p-[10px]">
              <div
                className={`w-full h-full rounded-[6px] border-[1px] px-[10px] py-[8px] ${
                  isFocusedEmail
                    ? "border-[1px] border-[#3f8aac]"
                    : "border-[1px]"
                }`}
              >
                {/** Floating Label Last Name Start */}
                <div className="w-full h-[30px] relative">
                  <input
                    id="email"
                    type="text"
                    className="peer border-0 border-transparent w-full h-full placeholder-transparent text-[12px] bg-white text-black focus:ring-0"
                    placeholder="อีเมล"
                    autoComplete="current-text"
                    onFocus={() => {
                      setIsFocusedEmail(true);
                    }}
                    onBlur={() => {
                      setIsFocusedEmail(false);
                    }}
                    required
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-0 ml-1 -top-1.5 bg-white px-1 font-prompt font-light text-[12px] text-[#666f89] duration-200 transform scale-75 origin-[0] peer-placeholder-shown:top-1.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-[12px] peer-placeholder-shown:text-[#666f89] peer-focus:-top-1.5 peer-focus:scale-75"
                  >
                    อีเมล<span className="text-red-500">*</span>
                  </label>
                </div>
                {/** Floating Label Last Name End */}
              </div>
            </div>
            {/** Email Section End */}

            {/** Tel Section Start */}
            <div className="w-full md:w-1/2 h-[65px] md:h-[65px] px-[5px] py-[5px] md:p-[10px] relative ">
              <div
                className={`w-full h-full rounded-[6px] border-[1px] pr-[5px] flex items-center justify-between ${
                  isFocusedTel
                    ? "border-[1px] border-[#3f8aac]"
                    : "border-[1px]"
                }`}
              >
                <div className="w-[40px] h-[30px] flex items-center justify-center mr-[10px]">
                  <span className="font-prompt font-light text-[12px] text-[#666f89]">
                    +66
                  </span>
                </div>
                {/** Floating Label Tel Start */}
                <div className="w-[430px] md:w-[145px] h-[30px] relative">
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
              <span className="font-prompt text-[9px] absolute right-[5px] bottom-[-10px] md:bottom-[-7px] text-[#92939b]">
                เช่น 08X-XXX-XXXX
              </span>
            </div>
            {/** Tel Section End */}
          </div>
          {/** Email and Tel Input Section End */}

          {/** Password and Re-Password Input Section Start */}
          <div className="w-full h-[110px] md:h-[65px] flex flex-col md:flex-row mt-[5px] md:mt-[0px]">
            {/** Password Section Start */}
            <div className="w-full md:w-1/2 h-[55px] md:h-[65px] p-[5px] md:p-[10px]">
              <div
                className={`w-full h-full rounded-[6px] border-[1px] pl-[10px] flex items-center ${
                  isFocusedPassword
                    ? "border-[1px] border-[#3f8aac]"
                    : "border-[1px]"
                }`}
              >
                {/** Floating Label Password Start */}
                <div className="w-full h-[30px] relative">
                  <input
                    id="pass"
                    type="password"
                    className="peer border-0 border-transparent w-full h-full placeholder-transparent text-[12px] bg-white text-black focus:ring-0"
                    placeholder="รหัสผ่าน"
                    autoComplete="current-text"
                    onFocus={() => {
                      setIsFocusedPassword(true);
                    }}
                    onBlur={() => {
                      setIsFocusedPassword(false);
                    }}
                    required
                  />
                  <label
                    htmlFor="pass"
                    className="absolute left-0 ml-1 -top-1.5 bg-white px-1 font-prompt font-light text-[12px] text-[#666f89] duration-200 transform scale-75 origin-[0] peer-placeholder-shown:top-1.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-[12px] peer-placeholder-shown:text-[#666f89] peer-focus:-top-1.5 peer-focus:scale-75"
                  >
                    รหัสผ่าน<span className="text-red-500">*</span>
                  </label>
                </div>
                {/** Floating Label Password End */}
                <div className="w-[30px] h-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-[18px] h-[18px] text-[#686260]"
                  >
                    <path d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                    <path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  </svg>
                </div>
              </div>
            </div>
            {/** Password Section End */}

            {/** Re-Password Section Start */}
            <div className="w-full md:w-1/2 h-[55px] md:h-[65px] p-[5px] md:p-[10px]">
              <div
                className={`w-full h-full rounded-[6px] border-[1px] pl-[10px] flex items-center ${
                  isFocusedRePassword
                    ? "border-[1px] border-[#3f8aac]"
                    : "border-[1px]"
                }`}
              >
                {/** Floating Label Re-Password Start */}
                <div className="w-full h-[30px] relative">
                  <input
                    id="repass"
                    type="password"
                    className="peer border-0 border-transparent w-full h-full placeholder-transparent text-[12px] bg-white text-black focus:ring-0"
                    placeholder="ยืนยันรหัสผ่าน"
                    autoComplete="current-text"
                    onFocus={() => {
                      setIsFocusedRePassword(true);
                    }}
                    onBlur={() => {
                      setIsFocusedRePassword(false);
                    }}
                    required
                  />
                  <label
                    htmlFor="repass"
                    className="absolute left-0 ml-1 -top-1.5 bg-white px-1 font-prompt font-light text-[12px] text-[#666f89] duration-200 transform scale-75 origin-[0] peer-placeholder-shown:top-1.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-[12px] peer-placeholder-shown:text-[#666f89] peer-focus:-top-1.5 peer-focus:scale-75"
                  >
                    ยืนยันรหัสผ่าน<span className="text-red-500">*</span>
                  </label>
                </div>
                {/** Floating Label Re-Password End */}
                <div className="w-[30px] h-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-[18px] h-[18px] text-[#686260]"
                  >
                    <path d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                    <path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  </svg>
                </div>
              </div>
            </div>
            {/** Re-Password Section End */}
          </div>
          {/** Password and Re-Password Input Section End */}

          {/** CheckBox First Start */}
          <div className="w-full p-[5px] md:p-[10px] flex">
            <input
              type="checkbox"
              className="w-[18px] h-[18px] rounded-[6px] border-[1px] border-[#e6e5e5] hover:border-[#9fdcf3] cursor-pointer focus:ring-0 mr-[10px]"
            />
            <p className="font-prompt text-[13px]">
              ฉันได้อ่านและยอมรับ{" "}
              <span className="text-[#2876ae] hover:underline hover:underline-offset-4 cursor-pointer">
                เงื่อนไขการใช้งาน
              </span>{" "}
              และฉันอายุ 13 ปีขึ้นไป
            </p>
          </div>
          {/** CheckBox First Start */}

          {/** CheckBox Second Start */}
          <div className="w-full p-[5px] md:p-[10px] flex mb-[20px] md:mb-[15px]">
            <input
              type="checkbox"
              className="w-[18px] h-[18px] rounded-[6px] border-[1px] border-[#e6e5e5] hover:border-[#9fdcf3] cursor-pointer focus:ring-0 mr-[10px]"
            />
            <p className="font-prompt text-[13px]">
              ฉันต้องการรับข้อเสนอจาก Domino's Pizza
            </p>
          </div>
          {/** CheckBox Second Start */}

          {/** Submit Button Start */}
          <button className="w-full max-w-[345px] h-[40px] flex items-center justify-center bg-[#006491] rounded-[6px] hover:brightness-125">
            <span className="font-prompt font-semibold text-[13px] text-white">
              สมัครสมาชิก
            </span>
          </button>
          {/** Submit Button End */}
        </form>
        {/** Register Form End */}

        <div className="w-full h-[20px] px-[15px] flex items-center justify-center mb-[50px]">
          <p className="font-prompt text-[13px]">
            มีสมาชิกอยู่แล้วใช่ไหม?{" "}
            <span
              className="text-[#2876ae] cursor-pointer hover:underline hover:underline-offset-4"
              onClick={() => {
                navigate("/login");
              }}
            >
              เข้าสู่ระบบ
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default RegisterForm;
