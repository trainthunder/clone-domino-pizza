import React, { useEffect, useRef } from "react";
import { useHomeModal } from "../../context/home-modal-context";
import { useNavigate } from "react-router-dom";

function BurgerModal() {
  const { isOpen, setIsOpen } = useHomeModal();
  const modalRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, setIsOpen]);

  const handleClickClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      {isOpen === true ? (
        <div
          className={`fixed inset-0 flex z-50 justify-start items-center transition-colors ${
            isOpen ? "visible bg-black/75 cursor-pointer" : "invisible"
          }`}
        >
          <div
            ref={modalRef}
            className="w-[250px] h-screen bg-white cursor-auto flex flex-col relative px-[15px] py-[80px]"
          >
            {/** Exit Button Start */}
            <button
              className="w-[25px] h-[25px] absolute top-[15px] right-[15px]"
              onClick={handleClickClose}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="size-6 text-[#898989]"
              >
                <path d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>
            {/** Exit Button End */}

            <div className="flex flex-col gap-[20px]">
              {/** Login And Register Section Start */}
              <button className="w-full h-[40px] rounded-[8px] bg-[#0b6a95] flex items-center justify-center gap-[5px]">
                <div className="w-[26px] h-[26px] flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-[18px] h-[18px] text-white"
                  >
                    <path d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                  </svg>
                </div>
                <div className="flex items-center">
                  {/** Login Start */}
                  <p
                    className="font-prompt text-[13px] font-semibold text-white"
                    onClick={() => {
                      navigate("/login");
                    }}
                  >
                    เข้าสู่ระบบ/
                  </p>
                  {/** Login End */}

                  {/** Register Start */}
                  <p
                    className="font-prompt text-[13px] font-semibold text-white"
                    onClick={() => {
                      navigate("/register");
                    }}
                  >
                    สมัครสมาชิก
                  </p>
                  {/** Register End */}
                </div>
              </button>
              {/** Login And Register Section End */}

              <div className="flex flex-col">
                {/** Home-Page Button Section Start */}
                <button
                  className="w-full h-[53px] border-t-[1px] flex gap-[8px] items-center"
                  onClick={() => {
                    setIsOpen(false);
                  }}
                >
                  <div className="w-[26px] h-[26px] flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-[24px] h-[24px] text-[#0b6a95]"
                    >
                      <path d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </svg>
                  </div>
                  <p className="font-prompt text-[14px] text-[#0b6a95]">
                    หน้าหลัก
                  </p>
                </button>
                {/** Home-Page Button Section End */}

                {/** Delivery Button Section Start */}
                <button
                  className="w-full h-[53px] border-t-[1px] flex gap-[8px] items-center"
                  onClick={() => {
                    navigate("/tracking");
                  }}
                >
                  <div className="w-[26px] h-[26px] flex items-center justify-center">
                    <svg
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      className="w-[24px] h-[24px] text-[#0b6a95]"
                    >
                      <path d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                    </svg>
                  </div>
                  <p className="font-prompt text-[14px] text-black hover:text-[#0b6a95]">
                    ติดตามการสั่งซื้อ
                  </p>
                </button>
                {/** Delivery Button Section End */}

                {/** Find Branch Button Section Start */}
                <button className="w-full h-[53px] border-t-[1px] flex gap-[8px] items-center">
                  <div className="w-[26px] h-[26px] flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-[24px] h-[24px] text-[#0b6a95]"
                    >
                      <path d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Zm3.75 11.625a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                    </svg>
                  </div>
                  <p className="font-prompt text-[14px] text-black hover:text-[#0b6a95]">
                    ค้นหาสาขา
                  </p>
                </button>
                {/** Find Branch Button Section End */}

                {/** About-Us Button Section Start */}
                <button className="w-full h-[53px] border-t-[1px] flex gap-[8px] items-center">
                  <div className="w-[26px] h-[26px] flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-[24px] h-[24px] text-[#0b6a95]"
                    >
                      <path d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                    </svg>
                  </div>
                  <p className="font-prompt text-[14px] text-black hover:text-[#0b6a95]">
                    เกี่ยวกับเรา
                  </p>
                </button>
                {/** About-Us Button Section End */}

                {/** Contact-Us Button Section Start */}
                <button className="w-full h-[53px] border-y-[1px] flex gap-[8px] items-center">
                  <div className="w-[26px] h-[26px] flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-[24px] h-[24px] text-[#0b6a95]"
                    >
                      <path d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                    </svg>
                  </div>
                  <p className="font-prompt text-[14px] text-black hover:text-[#0b6a95]">
                    ติดต่อเรา
                  </p>
                </button>
                {/** Contact-Us Button Section End */}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default BurgerModal;
