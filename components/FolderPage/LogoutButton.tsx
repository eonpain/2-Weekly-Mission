import React, { useState } from "react";
import { useRouter } from "next/router";

function LogoutButton() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const router = useRouter();
  function handleLogout() {
    localStorage.removeItem("accessToken");
    setIsLoggedIn(false);
    router.push('/signin')
  }

  return (
    <div>
      {isLoggedIn ? (
        <button onClick={handleLogout}>로그아웃</button>
      ) : (null)}
    </div>
  );
}

export default LogoutButton;
