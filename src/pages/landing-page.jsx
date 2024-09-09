import React from "react";
import LandingHeader from "../components/landing-page/landing-header";
import CardCarousel from "../components/landing-page/card-carousel";
import FilterCategory from "../components/landing-page/filter-category";
import ContentCard from "../components/landing-page/content-card";
import LandingCart from "../components/landing-page/landing-cart";
import Footer from "../components/footer";
import { FilterProvider } from "../context/filter-context";
import { HomeModalProvider } from "../context/home-modal-context";
import HomeBurgerModal from "../components/landing-page/home-burger-modal";

function LandingPage() {
  return (
    <HomeModalProvider>
      <div className="w-full h-full overflow-clip">
        <LandingHeader />
        <HomeBurgerModal />
        <CardCarousel />
        <FilterProvider>
          <FilterCategory />
          <ContentCard />
        </FilterProvider>
        <LandingCart />
        <Footer />
      </div>
    </HomeModalProvider>
  );
}

export default LandingPage;
