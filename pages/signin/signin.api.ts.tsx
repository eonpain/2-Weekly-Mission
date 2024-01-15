import axiosInstance from "@/lib/axios";

export async function signin(userData: any) {
  const res = await axiosInstance.post(`/sign-in`, userData);
  return res;
}
