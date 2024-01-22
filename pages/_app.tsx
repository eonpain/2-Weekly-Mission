import App, { AppContext, AppProps, AppInitialProps } from "next/app";
import GlobalStyle from "../styles/GlobalStyle";
import { createContext, useState, useContext, useEffect } from "react";
import { onSigninUserData } from '@/pages/signin/signin.api.ts';

// 컨텍스트 생성
const UserContext = createContext<any>(null);



// 컨텍스트 프로바이더
export const UserProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<any>(null);
  
  useEffect(()=>{
    const userIdContext = async () => {
      const res = await onSigninUserData();
      console.log(res);
      userIdContext();
    }
  },[]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

// 컨텍스트 사용 훅
export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
const app = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <UserProvider>
        <GlobalStyle />
        <Component {...pageProps} />
      </UserProvider>
    </>
  );
};

export default app;
