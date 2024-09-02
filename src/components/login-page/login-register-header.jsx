import React from "react";
import { useNavigate } from "react-router-dom";

function LoginRegisterHeader() {
  const navigate = useNavigate();
  return (
    <header className="w-full p-[10px] md:p-[20px] flex items-center justify-center fixed bg-white z-50 shadow-lg">
      <div className="w-full max-w-[1230px] h-full flex items-center justify-between">
        {/** Back To Home Page Icon Start */}
        <button
          className="w-[50px] h-[40px] flex items-center justify-center"
          onClick={() => {
            navigate("/home");
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 25 25"
            strokeWidth={2}
            stroke="currentColor"
            className="w-[25px] h-[25px] text-[#9d9d9d]"
          >
            <path d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
        </button>
        {/** Back To Home Page Icon End */}

        {/** Logo Domino Pizza Start */}
        <button className="md:w-[180px] md:h-[40px] flex justify-center min-[816px]:justify-start">
          <img
            src="/images/logo-head.svg"
            alt=""
            className="w-[135px] h-[32px] cursor-pointer"
          />
        </button>
        {/** Logo Domino Pizza End */}
        <hr />
      </div>
    </header>
  );
}

export default LoginRegisterHeader;
