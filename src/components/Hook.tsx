import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ShowAll } from "../utils/Api";
import { LinkData } from "@utils/type";

export const useFoldLink = (selectSortName: number) => {
  const [foldLink, setFoldLink] = useState<LinkData[]>([]);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchValue = queryParams.get("search");

  useEffect(() => {
    const fetchFolders = async () => {
      try {
        const result = await ShowAll();
        let filteredLink = result;

        if (selectSortName !== 0) {
          filteredLink = filteredLink.filter(
            (item) => item.folder_id === selectSortName
          );
        }

        if (searchValue !== null) {
          filteredLink = filteredLink.filter(
            (item: any) =>
              (item.description && item.description.includes(searchValue)) ||
              (item.title && item.title.includes(searchValue)) ||
              (item.url && item.url.includes(searchValue))
          );
        }

        setFoldLink(filteredLink);
      } catch (error) {
        console.error("Error fetching folders:", error);
      }
    };

    fetchFolders();
  }, [selectSortName, searchValue]);

  return foldLink;
};
