import React from "react";
import RegisterHeader from "../components/register-page/register-header";
import RegisterForm from "../components/register-page/register-form";
import Footer from "../components/footer";

function RegisterPage() {
  return (
    <div className="w-full h-full overflow-clip">
      <RegisterHeader />
      <RegisterForm />
      <Footer />
    </div>
  );
}

export default RegisterPage;
