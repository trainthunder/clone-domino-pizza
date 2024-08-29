import React from "react";
import Header from "./components/header";
import CardCarousel from "./components/landing-page/card-carousel";
import FilterCategory from "./components/landing-page/filter-category";

function App() {
  return (
    <div className="w-full h-full overflow-clip">
      <Header />
      <CardCarousel />
      <FilterCategory />
    </div>
  );
}

export default App;
