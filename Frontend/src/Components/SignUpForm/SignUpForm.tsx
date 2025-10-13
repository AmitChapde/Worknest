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
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

function SignUpForm() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  return (
    <form className="p-6 w-full max-w-full md:w-1/2">
      <div className="flex flex-col justify-center items-center">
        <img src={logo} alt="logo" className="w-20 h-18  " />
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">
          Create an Account
        </h2>
      </div>

      <div className="flex flex-col gap-2 ">
        <Label htmlFor="Full Name">Full Name</Label>
        <Input type="text" placeholder="Full Name" required />
        <Label htmlFor="email">Email</Label>
        <Input type="email" placeholder="Email" required />

        <Label htmlFor="password">Password</Label>
        <InputGroup>
          <InputGroupInput placeholder="Password" type="password" />
          <InputGroupAddon align="inline-end">
            <Tooltip>
              <TooltipTrigger asChild>
                <InputGroupButton
                  variant="ghost"
                  aria-label="Info"
                  size="icon-xs"
                >
                  <div>
                    <span
                      className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      <FontAwesomeIcon
                        icon={showPassword ? faEyeSlash : faEye}
                      />
                    </span>
                  </div>
                </InputGroupButton>
              </TooltipTrigger>
              <TooltipContent>
                <p>{showPassword ? "show" : "hide"}</p>
              </TooltipContent>
            </Tooltip>
          </InputGroupAddon>
        </InputGroup>
        

        <Button>Submit</Button>
        <Button variant="outline">
          <FontAwesomeIcon icon={faGoogle} style={{ color: "#DB4437" }} />
          Continue with Google
        </Button>
      </div>
    </form>
  );
}

export default SignUpForm;
