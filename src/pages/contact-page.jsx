import React from "react";
import ContactHeader from "../components/contact-page/contact-header";
import ContactBurgerModal from "../components/contact-page/contact-burger-modal";
import { ContactModalProvider } from "../context/contact-modal-context";
import ContactForm from "../components/contact-page/contact-form";
import Footer from "../components/footer";

function ContactPage() {
  return (
    <ContactModalProvider>
      <div className="w-full h-full overflow-clip">
        <ContactHeader />
        <ContactBurgerModal />
        <ContactForm />
        <Footer />
      </div>
    </ContactModalProvider>
  );
}

export default ContactPage;
