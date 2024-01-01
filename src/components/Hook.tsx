import { useState, useEffect } from "react";
import { ShowAll } from "../utils/Api";
import { LinkData } from "@utils/type";

export const useFoldLink = (selectSortName: number, foldLinkMock: any) => {
  const [foldLink, setFoldLink] = useState<LinkData[]>([]);

  useEffect(() => {
    const fetchFolders = async () => {
      try {
        const result = await ShowAll();
        if (selectSortName === 0) {
          setFoldLink(result);
        } else {
          const filteredFolders = result.filter(
            (item) => item.folder_id === selectSortName
          );
          setFoldLink(filteredFolders);
        }
      } catch (error) {
        console.error("Error fetching folders:", error);
      }
    };

    fetchFolders();
  }, [selectSortName, foldLinkMock]);

  return foldLink;
};
