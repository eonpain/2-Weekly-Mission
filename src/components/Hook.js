import { useEffect } from "react";

export const useFoldLink = (selectSortName, foldLinkMock, setFoldLink) => {
  useEffect(() => {
    setFoldLink(() => {
      if (selectSortName === 0) {
        return foldLinkMock;
      } else {
        return foldLinkMock.filter((item) => item.folder_id === selectSortName);
      }
    });
  }, [selectSortName, foldLinkMock]);
};

export const useLink = (foldLin) => {
  useEffect(() => {
    foldLin();
  }, []);
};
