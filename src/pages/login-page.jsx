import React from "react";
import LoginHeader from "../components/login-page/login-header";
import LoginForm from "../components/login-page/login-form";
import Footer from "../components/footer";

function LoginPage() {
  return (
    <div className="w-full h-full overflow-clip">
      <LoginHeader />
      <LoginForm />
      <Footer />
    </div>
  );
}

export default LoginPage;
