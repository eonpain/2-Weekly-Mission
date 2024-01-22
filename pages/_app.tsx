  import { AppProps } from "next/app";
  import GlobalStyle from "../styles/GlobalStyle";
  import { createContext, useState, useEffect } from "react";
  import axios from "@/lib/axios";
  import Header from "@/components/FolderPage/Header";
  import Footer from "@/components/FolderPage/Footer";

  // UserData 인터페이스와 관련 상태 정의
  interface UserData {
    auth_id: string;
    created_at: string;
    email: string;
    id: number;
    image_source: string;
    name: string;
  }

  // 컨텍스트 생성
  export const contextUserId = createContext<number | null>(null);

  export default function App({ Component, pageProps }: AppProps) {
    const [userData, setUserData] = useState<UserData | null>(null);
    const [login, setLogin] = useState<string>("null");
    const [userId, setUserId] = useState<number | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    // UserApi 함수 개선
    async function UserApi(userId: number | null) {
      if (!userId) return;
      try {
        const res = await axios.get(`/users/${userId}`);
        setUserData(res.data.data[0] as UserData);
        setIsLoading(false);
      } catch (error) {
        console.error("UserApi 에러:", error);
        setIsLoading(false);
      }
    }

    // fetchUserData 함수를 통해 사용자 데이터 가져오기
    useEffect(() => {
      async function fetchUserData() {
        try {
          const response = await axios.get("/users");
          console.log(response);
          setUserId(response.data.data[0].id);
          setIsLoading(false);
        } catch (error) {
          console.error("사용자 정보를 가져오지 못했습니다.", error);
          setIsLoading(false);
        }
      }
      fetchUserData();
    }, []);

    // localStorage의 'login' 값을 감지하고 상태를 업데이트하는 로직
    useEffect(() => {
      const accessToken = localStorage.getItem("accessToken") || "null";
      setLogin(accessToken);
    }, []);

    useEffect(() => {
      if (login !== "null") {
        UserApi(userId);
      }
    }, [userId]);

    useEffect(() => {
      if (login === "null") {
        setUserId(null);
        setUserData(null);
      }
    }, [login]);

    return (
      <>
        <contextUserId.Provider value={userId}>
          <GlobalStyle />
          {!isLoading && userId !== null && login !== "null" && <Header userData={userData} />}
          <Component {...pageProps} />
          {!isLoading && userId !== null && login !== "null" && <Footer />}
        </contextUserId.Provider>
      </>
    );
  }
