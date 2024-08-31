import React from "react";
import Header from "./components/header";
import CardCarousel from "./components/landing-page/card-carousel";
import FilterCategory from "./components/landing-page/filter-category";
import ContentCard from "./components/landing-page/content-card";
import { FilterProvider } from "./context/filter-context";

function App() {
  return (
    <div className="w-full h-full overflow-clip">
      <Header />
      <CardCarousel />
      <FilterProvider>
        <FilterCategory />
        <ContentCard />
      </FilterProvider>
    </div>
  );
}

export default App;
