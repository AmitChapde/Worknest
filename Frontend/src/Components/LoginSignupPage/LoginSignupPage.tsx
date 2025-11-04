import Spline from "@splinetool/react-spline";
import SignUpForm from "../SignUpForm/SignUpForm";
import LoginForm from "../LoginForm/LoginForm";
import { useLocation } from "react-router-dom";

function LoginSignupPage() {
  const location = useLocation();
  const showLogin = location.pathname !== "/auth/signup";

  return (
    <div className="flex flex-col md:flex-row h-full md:h-screen w-full">
      <div className="relative flex-1 bg-black flex justify-center items-center overflow-hidden">
        <Spline
          className="absolute inset-0 scale-110 pointer-events-none"
          scene="https://prod.spline.design/RYiWo5cRdhJm0gBV/scene.splinecode"
        />
        <h1 className="relative z-10 text-3xl md:text-4xl font-bold text-white text-center tracking-tight whitespace-nowrap">
          Bring your projects to Life
        </h1>
      </div>

      <div className="flex-1 flex flex-col justify-center items-center bg-white p-6 md:p-10">
        {showLogin ? <LoginForm /> : <SignUpForm />}
      </div>
    </div>
  );
}

export default LoginSignupPage;
