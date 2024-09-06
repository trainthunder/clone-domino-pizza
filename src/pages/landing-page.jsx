import React from "react";
import Header from "../components/header";
import CardCarousel from "../components/landing-page/card-carousel";
import FilterCategory from "../components/landing-page/filter-category";
import ContentCard from "../components/landing-page/content-card";
import LandingCart from "../components/landing-page/landing-cart";
import Footer from "../components/footer";
import { FilterProvider } from "../context/filter-context";
import { ModalProvider } from "../context/modal-context";
import BurgerModal from "../components/burger-modal";

function LandingPage() {
  return (
    <ModalProvider>
      <div className="w-full h-full overflow-clip">
        <Header />
        <BurgerModal />
        <CardCarousel />
        <FilterProvider>
          <FilterCategory />
          <ContentCard />
        </FilterProvider>
        <LandingCart />
        <Footer />
      </div>
    </ModalProvider>
  );
}

export default LandingPage;
