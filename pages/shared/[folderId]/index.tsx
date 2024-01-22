import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "@/styles/Shared.module.css";
import Header from "@/components/SharedPage/Header";
import Footer from "@/components/SharedPage/Footer";
import Section from "@/components/SharedPage/Section";
import Card from "@/components/SharedPage/Card";
import Search from "@/components/SharedPage/Search";
import axiosInstance from "@/lib/axios";
import { getFolder, getUser, getLinks } from "./shared.api.ts";

function Shared() {
  const [folder, setFolder] = useState<any>(null);
  const [user, setUser] = useState<any>(null);
  const [link, setLink] = useState<any>(null);
  const router = useRouter();
  const { folderId } = router.query;

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (folderId) {
          const folderData = await getFolder(folderId as string);
          const userData = await getUser(folderData.userId);
          setFolder(folderData);
          setUser(userData);

          const linksData = await getLinks(folderData.userId);
          setLink(linksData);
        }
      } catch (error) {
        console.error("데이터를 가져오는 중에 오류가 발생했습니다:", error);
      }
    };

    fetchData();
  }, [folderId]);
  console.log(link);

  // const getLinks = async (folderId, userId) => {
  //   const queryString = folderId === 'all' ? '' : `?folderId=${folderId}`;
  //   const response = await axiosInstance.get(`/users/${userId}/links${queryString}`);
  //   console.log(response);
  //   return response.data;
  // }

  return (
    <>
      <Header />

      <Section folderData={folder} userData={user} />
      <Search />
      <div className={styles.cardBox}>
        {link && link.map((link: any) => {
          return <Card key={link.id} data={link} />;
        })}
      </div>
      <Footer />
    </>
  );
}

export default Shared;
