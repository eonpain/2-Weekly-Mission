import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { ShowAll } from "../../../pages/folder/[id]";
import { LinkData } from "../../../pages/folder/type";

export const useFoldLink = (selectSortName: number) => {
  const [foldLink, setFoldLink] = useState<LinkData[]>([]);
  const router = useRouter();
  const { query } = router;
  const searchValue = query.search as string | undefined;

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

        if (searchValue) {
          filteredLink = filteredLink.filter(
            (item: LinkData) =>
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
