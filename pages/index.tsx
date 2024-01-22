import Link from "next/link";
import { useContext } from "react";
import { contextUserId } from "@/pages/_app";

export default function Home() {
  const ContextUserId = Number(useContext(contextUserId));
  return (
    <>
      <div style={{ height: "500px", width: "100%" }}></div>
      <Link href={`/shared/${ContextUserId}`}>shared</Link>
      <br></br>
      <Link href="/signup">signup</Link>
      <br></br>
      <Link href="/signin">signin</Link>
      <br></br>
      <Link href={`/folder/${ContextUserId}`}>folder</Link>
    </>
  );
}
