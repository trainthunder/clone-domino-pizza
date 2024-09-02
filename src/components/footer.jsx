import React from "react";

function Footer() {
  return (
    <footer className="w-screen h-full flex flex-col">
      <hr className="border-[3px] border-[#9d2235]" />
      {/** Tablet Mobile Responsive Start */}
      <div className="w-full h-full bg-[#53565a] flex md:hidden">
        {/** Facebook Icon Start */}
        <a
          href="https://www.facebook.com/DominosPizzaThailand"
          target="_blank"
          className="w-1/3 h-full py-[15px] flex items-center justify-center group"
        >
          <div className="w-[25px] h-[25px] flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="100"
              height="100"
              viewBox="0 0 50 50"
              fill="currentColor"
              className="text-white size-6 group-hover:text-[#249ce0]"
            >
              <path d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z"></path>
            </svg>
          </div>
        </a>
        {/** Facebook Icon End */}

        {/** Instagram Icon Start */}
        <a
          href="https://www.instagram.com/dominos.thailand"
          target="_blank"
          className="w-1/3 h-full py-[15px] flex items-center justify-center group"
        >
          <div className="w-[25px] h-[25px] flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="100"
              height="100"
              viewBox="0 0 50 50"
              stroke="currentColor"
              strokeWidth={2}
              className="text-white size-6 group-hover:text-[#249ce0]"
            >
              <path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"></path>
            </svg>
          </div>
        </a>
        {/** Instagram Icon End */}

        {/** X Icon Start */}
        <a
          href="https://twitter.com/Dominos_th"
          target="_blank"
          className="w-1/3 h-full py-[15px] flex items-center justify-center group"
        >
          <div className="w-[25px] h-[25px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="100"
              height="100"
              viewBox="0 0 50 50"
              stroke="currentColor"
              strokeWidth={2}
              className="text-white size-6 group-hover:text-[#249ce0]"
            >
              <path d="M 5.9199219 6 L 20.582031 27.375 L 6.2304688 44 L 9.4101562 44 L 21.986328 29.421875 L 31.986328 44 L 44 44 L 28.681641 21.669922 L 42.199219 6 L 39.029297 6 L 27.275391 19.617188 L 17.933594 6 L 5.9199219 6 z M 9.7167969 8 L 16.880859 8 L 40.203125 42 L 33.039062 42 L 9.7167969 8 z"></path>
            </svg>
          </div>
        </a>
        {/** X Icon End */}
      </div>
      {/** Tablet Mobile Responsive End */}

      {/** md Responsive Start */}
      <div className="w-full h-full bg-[#53565a] hidden md:flex pt-[30px] pb-[10px] items-center justify-center">
        <div className="flex gap-[60px]">
          {/** Facebook Icon Start */}
          <a
            href="https://www.facebook.com/DominosPizzaThailand"
            target="_blank"
            className="w-[25px] h-[25px] flex items-center justify-center group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="100"
              height="100"
              viewBox="0 0 50 50"
              fill="currentColor"
              className="text-white size-6 group-hover:text-[#249ce0]"
            >
              <path d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z"></path>
            </svg>
          </a>
          {/** Facebook Icon End */}

          {/** Instagram Icon Start */}
          <a
            href="https://www.instagram.com/dominos.thailand"
            target="_blank"
            className="w-[25px] h-[25px] flex items-center justify-center group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="100"
              height="100"
              viewBox="0 0 50 50"
              stroke="currentColor"
              strokeWidth={2}
              className="text-white size-6 group-hover:text-[#249ce0]"
            >
              <path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"></path>
            </svg>
          </a>
          {/** Instagram Icon End */}

          {/** X Icon Start */}
          <a
            href="https://twitter.com/Dominos_th"
            target="_blank"
            className="w-[25px] h-[25px] flex items-center justify-center group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="100"
              height="100"
              viewBox="0 0 50 50"
              stroke="currentColor"
              strokeWidth={2}
              className="text-white size-6 group-hover:text-[#249ce0]"
            >
              <path d="M 5.9199219 6 L 20.582031 27.375 L 6.2304688 44 L 9.4101562 44 L 21.986328 29.421875 L 31.986328 44 L 44 44 L 28.681641 21.669922 L 42.199219 6 L 39.029297 6 L 27.275391 19.617188 L 17.933594 6 L 5.9199219 6 z M 9.7167969 8 L 16.880859 8 L 40.203125 42 L 33.039062 42 L 9.7167969 8 z"></path>
            </svg>
          </a>
          {/** X Icon End */}
        </div>
      </div>
      {/** md Responsive End */}
      <div className="w-full h-full bg-[#53565a] flex items-center justify-center pt-[10px] md:py-[20px]">
        <button className="px-[8px] flex items-center justify-center hover:underline hover:underline-offset-4 hover:decoration-[#b6aea3] hover:decoration-2">
          <p className="font-prompt text-[12px] text-[#b6aea3]">
            นโยบายความเป็นส่วนตัว
          </p>
        </button>
      </div>
      <hr className="border-[1px] border-[#b0afad] hidden md:flex" />
      <div className="w-full h-full bg-[#53565a] px-[15px] pt-[20px] pb-[10px] md:py-[7px] flex items-center justify-center">
        <p className="font-prompt text-[12px] text-[#b6aea3]">
          © 2023 Domino's IP Holder LLC , Domino's
        </p>
      </div>
    </footer>
  );
}

export default Footer;
