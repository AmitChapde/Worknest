import { apiClient } from "../client";
import type { LoginPayload,LoginResponse,RegisterResponse,SignupPayload } from "./auth.types";


export const authApi={
    register:(data:SignupPayload)=>
       apiClient.post<RegisterResponse>("/auth/register",data),

    login:(data:LoginPayload)=>{
        return apiClient.post<LoginResponse>("/auth/login",data)
    }
}