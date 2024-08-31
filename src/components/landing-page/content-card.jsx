import React from "react";
import DataMenu from "../../data/menus.jsx";
import { useFilter } from "../../context/filter-context.jsx";
import FilterPizza from "./filter-pizza.jsx";

function ContentCard() {
  const { isSection, isTypePizza } = useFilter();
  console.log(isTypePizza);

  let datas = DataMenu;

  const filterMenu = datas.filter((items) => {
    const filterByCategory = items.category.includes(isSection);
    if (isSection === "pizza") {
      const filterByPizza = items.subCategory.includes(isTypePizza);
      return filterByPizza;
    }
    return filterByCategory;
  });

  return (
    <div className="w-screen h-full flex justify-center flex-col items-center">
      {isSection === "pizza" ? <FilterPizza /> : null}
      <div className="w-full max-w-[1140px] h-full px-[5px] pt-[20px] flex flex-wrap md:px-0 gap-y-[30px] md:gap-y-[60px]">
        {filterMenu.map((items, index) => {
          return (
            <div
              className="w-1/2 h-full px-[6px] md:w-1/3 md:px-[13px] min-[826px]:w-1/4"
              key={index}
            >
              <button className="w-full h-full">
                <div className="overflow-hidden block mb-[15px] rounded-[16px] relative">
                  {items.bannerMenu >= 0 ? null : (
                    <div className="absolute left-[9px] top-[9px] md:left-[14px] md:top-[14px] z-10 w-[45px] h-[20px] md:w-[80px] md:h-[35px] flex items-baseline justify-start">
                      {items.bannerMenu ===
                      "https://cms.dominospizza.co.th/stocks/product_badge/d85x50/c5/a9/8y6dc5a9wzg/%E0%B8%AB%E0%B8%99%E0%B9%89%E0%B8%B2%E0%B8%95%E0%B8%B2%E0%B8%A1%E0%B9%83%E0%B8%88.png" ? (
                        <img src={items.bannerMenu} alt="" className="flex" />
                      ) : (
                        <img
                          src={items.bannerMenu}
                          alt=""
                          className="flex h-full"
                        />
                      )}
                    </div>
                  )}
                  <img
                    src={items.image}
                    alt=""
                    className="rounded-[16px] hover:scale-125 ease-in duration-300 transition"
                  />
                </div>
                <p className="truncate font-prompt text-[15px] md:text-[20px] font-medium text-black text-start">
                  {items.title}
                </p>
                <div className="w-full h-[45px] md:h-[55px] mb-[15px] md:mb-[18px]">
                  <p className="line-clamp-2 text-[14px] md:text-[18px] font-prompt text-[#94898c] text-start">
                    {items.description}
                  </p>
                </div>
                <div className="w-full h-[35px] md:h-[45px] flex items-center justify-between">
                  <p className="text-[22px] md:text-[28px] font-prompt font-semibold">
                    ฿{items.price}
                  </p>
                  <div className="w-[26px] h-[26px] bg-[#0b6a95] hover:brightness-125 rounded-full flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="text-white w-[24px] h-[24px]"
                    >
                      <path d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                  </div>
                </div>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ContentCard;
