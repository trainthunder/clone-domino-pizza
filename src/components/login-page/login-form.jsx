import React from "react";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const navigate = useNavigate();
  return (
    <div className="w-screen h-full flex justify-center bg-white">
      <div className="w-full max-w-[375px] h-full pt-[61px] md:pt-[81px] flex flex-col">
        <div className="w-full h-full pt-[30px] px-[15px] flex flex-col items-center justify-center">
          <img
            src="/images/cover_login.svg"
            alt=""
            className="w-[300px] h-[175px] mb-[45px]"
          />
          <p className="font-prompt font-semibold text-[20px] mb-[10px] text-black">
            ยินดีต้อนรับสมาชิก DOMINO'S
          </p>
          <p className="font-prompt text-[12px] text-[#666f89] mb-[30px]">
            เข้าสู่ระบบแล้วเริ่มสั่งอาหารกันเลย!
          </p>
        </div>
        <form action="" className="w-full h-full px-[5px] relative mb-[30px]">
          {/** Phone Login Start */}
          <div className="w-full h-full p-[10px]">
            <div className="w-full h-[45px] border-[1px] rounded-lg flex items-center">
              <div className="w-[40px] h-[30px] flex items-center justify-center border-r-[1px] mr-[10px]">
                <p className="font-prompt font-light text-[12px] text-[#666f89]">
                  +66
                </p>
              </div>
              {/** Floating Label Phone Number Start */}
              <div className="w-[200px] h-[30px] relative">
                <input
                  id="phone"
                  type="tel"
                  className="peer border-0 border-transparent w-full h-full placeholder-transparent text-[12px] bg-white text-black focus:ring-0"
                  placeholder="เบอร์โทรศัพท์"
                  required
                />
                <label
                  htmlFor="phone"
                  className="absolute left-0 ml-1 -top-1.5 bg-white px-1 font-prompt font-light text-[12px] text-[#666f89] duration-200 transform scale-75 origin-[0] peer-placeholder-shown:top-1.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-[12px] peer-placeholder-shown:text-[#666f89] peer-focus:-top-1.5 peer-focus:scale-75"
                >
                  เบอร์โทรศัพท์<span className="text-red-500">*</span>
                </label>
              </div>
              {/** Floating Label Phone Number End */}
            </div>
          </div>
          {/** Phone Login End */}

          <span className="absolute font-prompt text-[9px] right-[15px] top-[57px] text-[#666f89]">
            เช่น 08X-XXX-XXXX
          </span>

          {/** Password  Login Start */}
          <div className="w-full h-full p-[10px]">
            <div className="w-full h-[45px] border-[1px] rounded-lg flex items-center justify-between">
              {/** Floating Label Phone Number Start */}
              <div className="w-[300px] h-[30px] relative">
                <input
                  id="pass"
                  type="password"
                  className="peer border-0 border-transparent w-full h-full placeholder-transparent text-[12px] bg-white text-black focus:ring-0"
                  placeholder="รหัสผ่าน"
                  required
                />
                <label
                  htmlFor="pass"
                  className="absolute left-0 ml-1 -top-1.5 bg-white px-1 font-prompt font-light text-[12px] text-[#666f89] duration-200 transform scale-75 origin-[0] peer-placeholder-shown:top-1.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-[12px] peer-placeholder-shown:text-[#666f89] peer-focus:-top-1.5 peer-focus:scale-75"
                >
                  รหัสผ่าน
                </label>
              </div>
              {/** Floating Label Phone Number End */}
              <div className="w-[35px] h-full rounded-r-[8px] flex items-center justify-center cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-[18px] h-[18px] text-[#666f89]"
                >
                  <path d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                  <path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
              </div>
            </div>
          </div>
          {/** Password Login End */}

          {/** Forget Password Start */}
          <div className="w-full h-full p-[10px] flex justify-end mb-[20px]">
            <span className="font-prompt text-[12px] cursor-pointer text-[#296f99] hover:underline hover:underline-offset-4 hover:decoration-[#296f99]">
              ลืมรหัสผ่าน?
            </span>
          </div>
          {/** Forget Password End */}

          {/** Login Button Start */}
          <div className="w-full h-full flex justify-center">
            <button className="w-[345px] h-[40px] bg-[#296f99] rounded-[6px] hover:brightness-125">
              <span className="font-prompt text-[14px] text-white font-semibold">
                เข้าสู่ระบบ
              </span>
            </button>
          </div>
          {/** Login Button End */}
        </form>

        {/** Cut Section Start */}
        <div className="w-full h-[20px] px-[15px] flex items-center justify-center relative mb-[20px]">
          <hr className="w-full border-[1px] border-[#ededed]" />
          <div className="absolute w-[30px] h-full bg-white flex items-center justify-center">
            <p className="font-prompt text-[12px] text-[#94949a]">หรือ</p>
          </div>
        </div>
        {/** Cut Section End */}

        {/** Another Login Start */}
        <div className="w-full h-full px-[15px] mb-[40px]">
          {/** Login Google Start */}
          <button className="w-full h-[40px] mt-[10px] border-[1px] rounded-[6px] border-[#3f8aac] flex items-center justify-center hover:bg-[#e6f6fc]">
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
                เข้าสู่ระบบด้วย Google
              </span>
            </div>
          </button>
          {/** Login Google End */}

          {/** Login Facebook Start */}
          <button className="w-full h-[40px] mt-[10px] border-[1px] rounded-[6px] border-[#3f8aac] flex items-center justify-center hover:bg-[#e6f6fc]">
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
                เข้าสู่ระบบด้วย Facebook
              </span>
            </div>
          </button>
          {/** Login Facebook End */}

          {/** Go To Register Button Start */}
          <button
            className="w-full h-[40px] mt-[10px] border-[1px] rounded-[6px] flex items-center justify-center bg-[#e6f6fc] hover:bg-[#afe9ff]"
            onClick={() => {
              navigate("/register");
            }}
          >
            <p className="font-prompt text-[12px]">
              เพื่อให้คุณสั่งอาหารได้รวดเร็วขึ้น{" "}
              <span className="text-[#3f8aac]">สมัครสมาชิกเลย</span>
            </p>
          </button>
          {/** Go To Register Button End */}
        </div>
        {/** Another Login End */}

        {/** Guest Login Start */}
        <div className="w-full h-full px-[15px] mb-[50px]">
          <div className="w-full h-[20px] flex items-center justify-center">
            <p className="font-prompt text-[12px]">
              สั่งอาหารโดยไม่สมัครสมาชิก?{" "}
              <span className="text-[#256e9d] cursor-pointer hover:underline hover:underline-offset-4">
                เริ่มใช้งานแบบ Guest
              </span>
            </p>
          </div>
        </div>
        {/** Guest Login End */}
      </div>
    </div>
  );
}

export default LoginForm;
