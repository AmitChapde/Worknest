import { Button } from "../ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Label } from "@radix-ui/react-label";
import { Input } from "../ui/input";
import logo from "../../assets/logo.png";
import { useState } from "react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "../ui/input-group";
import { Link } from "react-router-dom";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

function LoginForm() {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <form className="w-full max-w-md flex flex-col">
  
      <div className="flex flex-col justify-center items-center mb-6">
        <img src={logo} alt="logo" className="w-20 h-20" />
        <h2 className="text-2xl font-semibold text-gray-800 mt-2">Login</h2>
      </div>

   
      <div className="flex flex-col gap-4 flex-grow">
     
        <div className="flex flex-col gap-2">
          <Label htmlFor="email">Email</Label>
          <Input type="email" placeholder="Email" />
        </div>

        <div className="flex flex-col gap-2 relative">
          <Label htmlFor="password">Password</Label>
          <InputGroup>
            <InputGroupInput
              placeholder="Password"
              type={showPassword ? "text" : "password"}
            />
            <InputGroupAddon align="inline-end">
              <Tooltip>
                <TooltipTrigger asChild>
                  <InputGroupButton
                    variant="ghost"
                    aria-label="Toggle password visibility"
                    size="icon-xs"
                    onClick={(e) => {e.preventDefault(); setShowPassword(!showPassword);}} 
                  >
                    <FontAwesomeIcon
                      icon={showPassword ? faEyeSlash : faEye}
                      className="text-gray-500"
                    />
                  </InputGroupButton>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{showPassword ? "Hide" : "Show"} password</p>
                </TooltipContent>
              </Tooltip>
            </InputGroupAddon>
          </InputGroup>
        </div>

    
        <div className="flex justify-end">
          <p className="text-sm text-blue-500 cursor-pointer">Forgot Password?</p>
        </div>

       
        <div className="flex flex-col gap-2">
          <Button>Submit</Button>
          <Button variant="outline" className="flex items-center justify-center gap-2">
            <FontAwesomeIcon icon={faGoogle} style={{ color: "#DB4437" }} />
            Continue with Google
          </Button>
        </div>
      </div>

      <div className="flex justify-center py-4">
        <p className="text-sm">
          Don't have an Account?{" "}
          <Link to="/auth/signup" className="text-blue-500 cursor-pointer">
            Create One
          </Link>
        </p>
      </div>
    </form>
  );
}

export default LoginForm;