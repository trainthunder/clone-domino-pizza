import React from "react";
import Header from "./components/header";
import CardCarousel from "./components/landing-page/card-carousel";
import FilterCategory from "./components/landing-page/filter-category";
import ContentCard from "./components/landing-page/content-card";
import { FilterProvider } from "./context/filter-context";
import LandingCart from "./components/landing-page/landing-cart";
import Footer from "./components/footer";

function App() {
  return (
    <div className="w-full h-full overflow-clip">
      <Header />
      <CardCarousel />
      <FilterProvider>
        <FilterCategory />
        <ContentCard />
      </FilterProvider>
      <LandingCart />
      <Footer />
    </div>
  );
}

export default App;
