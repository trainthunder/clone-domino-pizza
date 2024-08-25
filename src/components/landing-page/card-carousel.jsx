("use client");
import React from "react";
import { Carousel } from "flowbite-react";

function CardCarousel() {
  return (
    <div
      className="w-screen h-[375px] min-[400px]:h-[400px] min-[450px]:h-[450px] min-[500px]:h-[500px] min-[550px]:h-[550px] min-[600px]:h-[600px] min-[650px]:h-[650px] min-[700px]:h-[700px]
     min-[750px]:h-[750px] md:h-[240px] min-[850px]:h-[267px] min-[900px]:h-[282px] min-[950px]:h-[299px] min-[1000px]:h-[315px] min-[1100px]:h-[345px] min-[1200px]:h-[381px] min-[1300px]:h-[410px]
     min-[1400px]:h-[441px] min-[1500px]:h-[472px] min-[1600px]:h-[503px] min-[1700px]:h-[535px] min-[1800px]:h-[565px] min-[1900px]:h-[597px] min-[2000px]:h-[630px] min-[2100px]:h-[660px]
     min-[2250px]:h-[710px] min-[2400px]:h-[752px] min-[2600px]:h-[819px] min-[2800px]:h-[880px] min-[3000px]:h-[940px] min-[3200px]:h-[1005px]"
    >
      <Carousel className="md:hidden">
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
      <Carousel>
        <img src="images/brooklyn-carousel-desktop.jpg" alt="..." />
        <img src="images/double-carousel-desktop.jpg" alt="..." />
        <img src="images/half-four-carousel-desktop.jpg" alt="..." />
        <img src="images/new-gen-carousel-desktop.jpg" alt="..." />
        <img src="images/volcano-carousel-desktop.jpg" alt="..." />
      </Carousel>
    </div>
  );
}

export default CardCarousel;
