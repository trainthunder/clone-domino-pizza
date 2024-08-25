import React from "react";
import Header from "./components/header";
import CardCarousel from "./components/landing-page/card-carousel";
function App() {
  return (
    <div className="w-full h-full overflow-clip">
      <Header />
      <div className="w-screen h-full flex flex-col pt-[61px] md:pt-[81px]">
        <CardCarousel />
      </div>
    </div>
  );
}

export default App;
