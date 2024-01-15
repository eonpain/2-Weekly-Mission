import axiosInstance from "@/lib/axios";
import { IFormInput, IEmailValue } from "./type";

export async function signup(userData: any) {
    const res = await axiosInstance.post(`/sign-up`, userData);
    return res;
  }

export async function checkEmail(userMail: IEmailValue) {
    const res = await axiosInstance.post(`/check-email`, userMail);
    return res;
  }