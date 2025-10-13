import Spline from "@splinetool/react-spline";
import SignUpForm from "../SignUpForm/SignUpForm";
import { useState } from "react";
import LoginForm from "../LoginForm/LoginForm";

function LoginSignupPage() {
  const [showLogin, setshowLogin] = useState<boolean>(true);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-screen w-screen">
      {/* Left Grid Cell */}
      <div className="relative bg-black overflow-hidden flex flex-col justify-center items-center">
        <Spline
          className="absolute inset-0 scale-110"
          scene="https://prod.spline.design/RYiWo5cRdhJm0gBV/scene.splinecode"
        />
        <h1 className="relative z-10 text-3xl md:text-4xl font-bold text-white text-center tracking-tight whitespace-nowrap">
          Bring your projects to Life
        </h1>
      </div>

      {/* Right Grid Cell */}
      <div className="flex flex-col justify-center items-center bg-white p-6 md:p-10">
        {showLogin ? <LoginForm /> : <SignUpForm />}
      </div>
    </div>
  );
}

export default LoginSignupPage;
