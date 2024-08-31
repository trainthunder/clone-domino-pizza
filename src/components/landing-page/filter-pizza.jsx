import React, { useRef, useState } from "react";
import { useFilter } from "../../context/filter-context";

function FilterPizza() {
  const menuRef = useRef(null);
  const { isTypePizza, setIsTypePizza } = useFilter();

  const slideLeft = () => {
    menuRef.current.scrollBy({
      top: 0,
      left: -200,
      behavior: "smooth",
    });
  };

  const slideRight = () => {
    menuRef.current.scrollBy({
      top: 0,
      left: 200,
      behavior: "smooth",
    });
  };

  const handleAll = () => {
    setIsTypePizza("all");
  };

  const handle2in1 = () => {
    setIsTypePizza("2in1");
  };
  const handleSignature = () => {
    setIsTypePizza("signature");
  };
  const handleSpecial = () => {
    setIsTypePizza("special");
  };
  const handleLover = () => {
    setIsTypePizza("lover");
  };
  const handle4in1 = () => {
    setIsTypePizza("4in1");
  };
  const handleUpToYou = () => {
    setIsTypePizza("upToYou");
  };

  return (
    <div className="mt-[5px] w-screen flex items-center justify-center">
      <div className="w-full max-w-[1140px] h-[40px] mt-[18px] relative">
        {/** Button Left Start */}
        <button
          className="w-[30px] h-[30px] bg-blue-500 rounded-full flex items-center justify-center border-[1px] border-white absolute left-2 top-1 min-[1075px]:hidden"
          onClick={slideLeft}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            className="w-[15px] h-[15px] text-white"
          >
            <path d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
        </button>
        {/** Button Left End */}

        <div
          ref={menuRef}
          className="flex overflow-x-auto scrollbar-hide h-full mx-[35px] space-x-[15px] min-[1075px]:overflow-x-hidden min-[1075px]:space-x-0 min-[1075px]:justify-center min-[1075px]:gap-[15px]"
          style={{ scrollBehavior: "smooth", whiteSpace: "nowrap" }}
        >
          {/** Selected Type Pizza All Start */}
          {isTypePizza === "all" ? (
            <div
              className="px-[10px] h-full flex items-center bg-[#0b6a95] rounded-[8px] cursor-pointer"
              onClick={handleAll}
            >
              <p className="font-prompt text-[12px] text-white">ทั้งหมด</p>
            </div>
          ) : (
            <div
              className="px-[10px] h-full flex items-center border-[1px] border-[#c8c9ca] rounded-[8px] cursor-pointer hover:bg-[#e6f6fc] hover:border-[#8fd7f1]"
              onClick={handleAll}
            >
              <p className="font-prompt text-[12px] text-[#676a6d]">ทั้งหมด</p>
            </div>
          )}
          {/** Selected Type Pizza All End */}

          {/** Selected Type Pizza 2in1 Start */}
          {isTypePizza === "2in1" ? (
            <div
              className="px-[10px] h-full flex items-center bg-[#0b6a95] rounded-[8px] cursor-pointer"
              onClick={handle2in1}
            >
              <p className="font-prompt text-[12px] text-white">
                พิซซ่า 2 หน้าในถาดเดียว
              </p>
            </div>
          ) : (
            <div
              className="px-[10px] h-full flex items-center border-[1px] border-[#c8c9ca] rounded-[8px] cursor-pointer hover:bg-[#e6f6fc] hover:border-[#8fd7f1]"
              onClick={handle2in1}
            >
              <p className="font-prompt text-[12px] text-[#676a6d]">
                พิซซ่า 2 หน้าในถาดเดียว
              </p>
            </div>
          )}
          {/** Selected Type Pizza 2in1 End */}

          {/** Selected Type Pizza Signature Start */}
          {isTypePizza === "signature" ? (
            <div
              className="px-[10px] h-full flex items-center bg-[#0b6a95] rounded-[8px] cursor-pointer"
              onClick={handleSignature}
            >
              <p className="font-prompt text-[12px] text-white">
                พิซซ่าหมวด Signature & Seafood
              </p>
            </div>
          ) : (
            <div
              className="px-[10px] h-full flex items-center border-[1px] border-[#c8c9ca] rounded-[8px] cursor-pointer hover:bg-[#e6f6fc] hover:border-[#8fd7f1]"
              onClick={handleSignature}
            >
              <p className="font-prompt text-[12px] text-[#676a6d]">
                พิซซ่าหมวด Signature & Seafood
              </p>
            </div>
          )}
          {/** Selected Type Pizza Signature End */}

          {/** Selected Type Pizza Spacial Start */}
          {isTypePizza === "special" ? (
            <div
              className="px-[10px] h-full flex items-center bg-[#0b6a95] rounded-[8px] cursor-pointer"
              onClick={handleSpecial}
            >
              <p className="font-prompt text-[12px] text-white">
                พิซซ่าหมวด Specialty
              </p>
            </div>
          ) : (
            <div
              className="px-[10px] h-full flex items-center border-[1px] border-[#c8c9ca] rounded-[8px] cursor-pointer hover:bg-[#e6f6fc] hover:border-[#8fd7f1]"
              onClick={handleSpecial}
            >
              <p className="font-prompt text-[12px] text-[#676a6d]">
                พิซซ่าหมวด Specialty
              </p>
            </div>
          )}
          {/** Selected Type Pizza Spacial End */}

          {/** Selected Type Pizza Lover Start */}
          {isTypePizza === "lover" ? (
            <div
              className="px-[10px] h-full flex items-center bg-[#0b6a95] rounded-[8px] cursor-pointer"
              onClick={handleLover}
            >
              <p className="font-prompt text-[12px] text-white">
                พิซซ่าหมวด Lover
              </p>
            </div>
          ) : (
            <div
              className="px-[10px] h-full flex items-center border-[1px] border-[#c8c9ca] rounded-[8px] cursor-pointer hover:bg-[#e6f6fc] hover:border-[#8fd7f1]"
              onClick={handleLover}
            >
              <p className="font-prompt text-[12px] text-[#676a6d]">
                พิซซ่าหมวด Lover
              </p>
            </div>
          )}
          {/** Selected Type Pizza Lover End */}

          {/** Selected Type Pizza 4in1 Start */}
          {isTypePizza === "4in1" ? (
            <div
              className="px-[10px] h-full flex items-center bg-[#0b6a95] rounded-[8px] cursor-pointer"
              onClick={handle4in1}
            >
              <p className="font-prompt text-[12px] text-white">
                อร่อยสุดคุ้ม 4 หน้าในถาดเดียว
              </p>
            </div>
          ) : (
            <div
              className="px-[10px] h-full flex items-center border-[1px] border-[#c8c9ca] rounded-[8px] cursor-pointer hover:bg-[#e6f6fc] hover:border-[#8fd7f1]"
              onClick={handle4in1}
            >
              <p className="font-prompt text-[12px] text-[#676a6d]">
                อร่อยสุดคุ้ม 4 หน้าในถาดเดียว
              </p>
            </div>
          )}
          {/** Selected Type Pizza 4in1 End */}

          {/** Selected Type Pizza UpToYou Start */}
          {isTypePizza === "upToYou" ? (
            <div
              className="px-[10px] h-full flex items-center bg-[#0b6a95] rounded-[8px] cursor-pointer"
              onClick={handleUpToYou}
            >
              <p className="font-prompt text-[12px] text-white">
                พิซซ่าตามใจชอบ
              </p>
            </div>
          ) : (
            <div
              className="px-[10px] h-full flex items-center border-[1px] border-[#c8c9ca] rounded-[8px] cursor-pointer hover:bg-[#e6f6fc] hover:border-[#8fd7f1]"
              onClick={handleUpToYou}
            >
              <p className="font-prompt text-[12px] text-[#676a6d]">
                พิซซ่าตามใจชอบ
              </p>
            </div>
          )}
          {/** Selected Type Pizza UpToYou End */}
        </div>

        {/** Button Right Start */}
        <button
          className="w-[30px] h-[30px] bg-blue-500 rounded-full flex items-center justify-center border-[1px] border-white absolute right-2 top-1 min-[1075px]:hidden"
          onClick={slideRight}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            className="w-[15px] h-[15px] text-white"
          >
            <path d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
        </button>
        {/** Button Right End */}
      </div>
    </div>
  );
}

export default FilterPizza;
