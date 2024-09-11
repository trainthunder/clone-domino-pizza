import React from "react";
import AboutUsHeader from "../components/about-us-page/about-us-header";
import AboutUsBurgerModal from "../components/about-us-page/about-us-burger-modal";
import { AboutUsModalProvider } from "../context/about-us-modal-context";
import AboutUsMain from "../components/about-us-page/about-us-main";
import Footer from "../components/footer";

function AboutUsPage() {
  return (
    <AboutUsModalProvider>
      <div className="w-full h-full overflow-clip">
        <AboutUsHeader />
        <AboutUsBurgerModal />
        <AboutUsMain />
        <Footer />
      </div>
    </AboutUsModalProvider>
  );
}

export default AboutUsPage;
