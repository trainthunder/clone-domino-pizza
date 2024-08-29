import React, { useRef, useState } from "react";

function FilterCategory() {
  const menuRef = useRef(null);
  const [isSection, setIsSection] = useState("promotion");

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

  const handlePromotion = () => {
    setIsSection("promotion");
  };

  const handleNewMenu = () => {
    setIsSection("newMenu");
  };

  const handlePizza = () => {
    setIsSection("pizza");
  };

  const handleChicken = () => {
    setIsSection("chicken");
  };

  const handlePasta = () => {
    setIsSection("pasta");
  };

  const handleDrink = () => {
    setIsSection("drink");
  };

  const handleSnack = () => {
    setIsSection("snack");
  };

  const handleDripSource = () => {
    setIsSection("dripSource");
  };

  return (
    <div className="w-screen h-[55px]">
      <div className="w-full h-full flex items-center justify-center border-b-[1px]">
        {/** Button Left Start */}
        <button
          className="w-[30px] h-[30px] bg-blue-500 rounded-full flex items-center justify-center border-[1px] border-white absolute left-2 min-[724px]:hidden"
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

        {/** Selected Section Start */}
        <div
          ref={menuRef}
          className="flex overflow-x-auto scrollbar-hide h-full mx-[35px] space-x-[20px]"
          style={{ scrollBehavior: "smooth", whiteSpace: "nowrap" }}
        >
          {/** Promotion Selected Start */}
          {isSection === "promotion" ? (
            <div
              className="px-[5px] h-full flex items-center justify-center cursor-pointer border-b-[2px] border-[#0b6a95]"
              onClick={handlePromotion}
            >
              <p className="font-prompt text-[16px] min-[724px]:text-[18px] font-semibold text-[#0b6a95]">
                โปรโมชั่น
              </p>
            </div>
          ) : (
            <div
              className="px-[5px] h-full flex items-center justify-center cursor-pointer"
              onClick={handlePromotion}
            >
              <p className="font-prompt text-[16px] min-[724px]:text-[18px] text-[#676a6d]">
                โปรโมชั่น
              </p>
            </div>
          )}

          {/** Promotion Selected End */}

          {/** NewMenu Selected Start */}
          {isSection === "newMenu" ? (
            <div
              className="px-[5px] h-full flex items-center justify-center cursor-pointer border-b-[2px] border-[#0b6a95]"
              onClick={handleNewMenu}
            >
              <p className="font-prompt text-[16px] min-[724px]:text-[18px] font-semibold text-[#0b6a95]">
                เมนูใหม่
              </p>
            </div>
          ) : (
            <div
              className="px-[5px] h-full flex items-center justify-center cursor-pointer"
              onClick={handleNewMenu}
            >
              <p className="font-prompt text-[16px] min-[724px]:text-[18px] text-[#676a6d]">
                เมนูใหม่
              </p>
            </div>
          )}

          {/** NewMenu Selected End */}

          {/** Pizza Selected Start */}
          {isSection === "pizza" ? (
            <div
              className="px-[5px] h-full flex items-center justify-center cursor-pointer border-b-[2px] border-[#0b6a95]"
              onClick={handlePizza}
            >
              <p className="font-prompt text-[16px] min-[724px]:text-[18px] font-semibold text-[#0b6a95]">
                พิซซ่า
              </p>
            </div>
          ) : (
            <div
              className="px-[5px] h-full flex items-center justify-center cursor-pointer"
              onClick={handlePizza}
            >
              <p className="font-prompt text-[16px] min-[724px]:text-[18px] text-[#676a6d]">
                พิซซ่า
              </p>
            </div>
          )}
          {/** Pizza Selected End */}

          {/** Chicken Selected Start */}
          {isSection === "chicken" ? (
            <div
              className="px-[5px] h-full flex items-center justify-center cursor-pointer border-b-[2px] border-[#0b6a95]"
              onClick={handleChicken}
            >
              <p className="font-prompt text-[16px] min-[724px]:text-[18px] font-semibold text-[#0b6a95]">
                ไก่
              </p>
            </div>
          ) : (
            <div
              className="px-[5px] h-full flex items-center justify-center cursor-pointer"
              onClick={handleChicken}
            >
              <p className="font-prompt text-[16px] min-[724px]:text-[18px] text-[#676a6d]">
                ไก่
              </p>
            </div>
          )}

          {/** Chicken Selected End */}

          {/** Pasta Selected Start */}
          {isSection === "pasta" ? (
            <div
              className="px-[5px] h-full flex items-center justify-center cursor-pointer border-b-[2px] border-[#0b6a95]"
              onClick={handlePasta}
            >
              <p className="font-prompt text-[16px] min-[724px]:text-[18px] font-semibold text-[#0b6a95]">
                พาสต้า
              </p>
            </div>
          ) : (
            <div
              className="px-[5px] h-full flex items-center justify-center cursor-pointer"
              onClick={handlePasta}
            >
              <p className="font-prompt text-[16px] min-[724px]:text-[18px] text-[#676a6d]">
                พาสต้า
              </p>
            </div>
          )}

          {/** Pasta Selected End */}

          {/** Drink Selected Start */}
          {isSection === "drink" ? (
            <div
              className="px-[5px] h-full flex items-center justify-center cursor-pointer border-b-[2px] border-[#0b6a95]"
              onClick={handleDrink}
            >
              <p className="font-prompt text-[16px] min-[724px]:text-[18px] font-semibold text-[#0b6a95]">
                เครื่องดื่ม
              </p>
            </div>
          ) : (
            <div
              className="px-[5px] h-full flex items-center justify-center cursor-pointer"
              onClick={handleDrink}
            >
              <p className="font-prompt text-[16px] min-[724px]:text-[18px] text-[#676a6d]">
                เครื่องดื่ม
              </p>
            </div>
          )}
          {/** Drink Selected End */}

          {/** Snack Selected Start */}
          {isSection === "snack" ? (
            <div
              className="px-[5px] h-full flex items-center justify-center cursor-pointer border-b-[2px] border-[#0b6a95]"
              onClick={handleSnack}
            >
              <p className="font-prompt text-[16px] min-[724px]:text-[18px] font-semibold text-[#0b6a95]">
                ของทานเล่น
              </p>
            </div>
          ) : (
            <div
              className="px-[5px] h-full flex items-center justify-center cursor-pointer"
              onClick={handleSnack}
            >
              <p className="font-prompt text-[16px] min-[724px]:text-[18px] text-[#676a6d]">
                ของทานเล่น
              </p>
            </div>
          )}
          {/** Snack Selected End */}

          {/** Drip Source Selected Start */}
          {isSection === "dripSource" ? (
            <div
              className="px-[5px] h-full flex items-center justify-center cursor-pointer border-b-[2px] border-[#0b6a95]"
              onClick={handleDripSource}
            >
              <p className="font-prompt text-[16px] min-[724px]:text-[18px] font-semibold text-[#0b6a95]">
                ดิปปิ้้งซอส
              </p>
            </div>
          ) : (
            <div
              className="px-[5px] h-full flex items-center justify-center cursor-pointer"
              onClick={handleDripSource}
            >
              <p className="font-prompt text-[16px] min-[724px]:text-[18px] text-[#676a6d]">
                ดิปปิ้้งซอส
              </p>
            </div>
          )}
          {/** Drip Source Selected End */}
        </div>
        {/** Selected Section End */}

        {/** Button Right Start */}
        <button
          className="w-[30px] h-[30px] bg-blue-500 rounded-full flex items-center justify-center border-[1px] border-white absolute right-2 min-[724px]:hidden"
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

export default FilterCategory;
