"use client";
import React from "react";
import { Carousel } from "flowbite-react";

function CardCarousel() {
  return (
    <div className="w-screen h-full flex flex-col pt-[61px] md:pt-[81px]">
      <div
        className="w-screen h-[375px] min-[400px]:h-[400px] min-[450px]:h-[450px] min-[500px]:h-[500px] min-[550px]:h-[550px] min-[600px]:h-[600px] min-[650px]:h-[650px] min-[700px]:h-[700px]
     min-[750px]:h-[750px] md:hidden"
      >
        <Carousel leftControl="&nbsp;" rightControl="&nbsp;">
          <img
            src="images/brooklyn-carousel-mobile.jpg"
            alt="..."
            className="md:hidden"
          />
          <img
            src="images/double-carousel-mobile.jpg"
            alt="..."
            className="md:hidden"
          />
          <img
            src="images/half-four-carousel-mobile.jpg"
            alt="..."
            className="md:hidden"
          />
          <img
            src="images/new-gen-carousel-mobile.jpg"
            alt="..."
            className="md:hidden"
          />
          <img
            src="images/volcano-carousel-mobile.jpg"
            alt="..."
            className="md:hidden"
          />
        </Carousel>
      </div>
      <div
        className="hidden md:flex w-screen md:h-[240px] min-[850px]:h-[267px] min-[900px]:h-[282px] min-[950px]:h-[299px] min-[1000px]:h-[315px] min-[1100px]:h-[345px] min-[1200px]:h-[381px] min-[1300px]:h-[410px]
     min-[1400px]:h-[441px] min-[1500px]:h-[472px] min-[1600px]:h-[503px] min-[1700px]:h-[535px] min-[1800px]:h-[565px] min-[1900px]:h-[597px] min-[2000px]:h-[630px] min-[2100px]:h-[660px]
     min-[2250px]:h-[710px] min-[2400px]:h-[752px] min-[2600px]:h-[819px] min-[2800px]:h-[880px] min-[3000px]:h-[940px] min-[3200px]:h-[1005px]"
      >
        <Carousel
          leftControl={
            <div className="w-[40px] h-[40px] rounded-full bg-[#006491] hover:brightness-125 border-[1px] border-white flex items-center justify-center cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                className="w-[25px] h-[25px] text-white"
              >
                <path d="M15.75 19.5 8.25 12l7.5-7.5" />
              </svg>
            </div>
          }
          rightControl={
            <div className="w-[40px] h-[40px] rounded-full bg-[#006491] hover:brightness-125 border-[1px] border-white flex items-center justify-center cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                className="w-[25px] h-[25px] text-white"
              >
                <path d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
            </div>
          }
        >
          <img src="images/brooklyn-carousel-desktop.jpg" alt="..." />
          <img src="images/double-carousel-desktop.jpg" alt="..." />
          <img src="images/half-four-carousel-desktop.jpg" alt="..." />
          <img src="images/new-gen-carousel-desktop.jpg" alt="..." />
          <img src="images/volcano-carousel-desktop.jpg" alt="..." />
        </Carousel>
      </div>
    </div>
  );
}

export default CardCarousel;
