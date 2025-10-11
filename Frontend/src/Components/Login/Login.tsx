import { Button } from "../ui/button";
import Spline from "@splinetool/react-spline";
import LoginForm   from "../LoginForm/LoginForm";

function Login() {
  return (
    <>
      <div className="hidden md:h-screen w-screen flex ">
     
          <div className="w-1/2 h-full overflow-hidden relative">
            <Spline
              className="absolute inset-0 scale-110"
              scene="https://prod.spline.design/RYiWo5cRdhJm0gBV/scene.splinecode"
              
            />
            <h1 className="absolute top-5  left-1/2 -translate-x-1/2 text-4xl font-bold  text-center tracking-tight whitespace-nowrap">
            Bring your projects to Life
          </h1>
          </div>
     

        <div>
          <Button>Butt</Button>
        </div>
      </div>

       <div className="flex flex-col md:hidden h-screen w-screen overflow-y-scroll snap-y snap-mandatory">
        {/* Robot Section */}
        <div className="h-screen snap-start relative overflow-hidden bg-black">
          <Spline scene="https://prod.spline.design/uRpPqlmCZue2YtR8/scene.splinecode"
                  className="absolute inset-0 scale-110" />
          <h1 className="absolute top-10 left-1/2 -translate-x-1/2 text-3xl font-bold text-white text-center tracking-tight">
            Bring your projects to life.
          </h1>
        </div>

        {/* Login Section */}
        <div className="h-screen snap-start flex items-center justify-center bg-white">
          <LoginForm />
        </div>
        </div>
    </>
  );
}

export default Login;
