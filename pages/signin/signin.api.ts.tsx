import axiosInstance from "@/lib/axios";

export async function signin(userData: any) {
  const res = await axiosInstance.post(`/sign-in`, userData);
  return res;
}

export async function onSigninUserData() {
  const res = await axiosInstance.get('/users');
  const userData = res.data.data[0];
  console.log(userData);
}
