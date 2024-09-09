import React from "react";
import OrderTrackingHeader from "../components/order-tracking-page/order-tracking-header";
import { TrackingModalProvider } from "../context/tracking-modal-context";
import OrderTrackingBurgerModal from "../components/order-tracking-page/order-tracking-burger-modal";
import OrderTrackingForm from "../components/order-tracking-page/order-tracking-form";
import Footer from "../components/footer";

function OrderTrackingPage() {
  return (
    <TrackingModalProvider>
      <div className="w-full h-full overflow-clip">
        <OrderTrackingHeader />
        <OrderTrackingBurgerModal />
        <OrderTrackingForm />
        <Footer />
      </div>
    </TrackingModalProvider>
  );
}

export default OrderTrackingPage;
