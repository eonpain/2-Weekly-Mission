import { useEffect } from "react";

export const useFoldLink = (selectList, foldLinkMock, setFoldLink) => {
    useEffect(() => {
      setFoldLink(() => {
        if (selectList === 0) {
          return foldLinkMock;
        } else {
          return foldLinkMock.filter((item) => item.folder_id === selectList);
        }
      });
    }, [selectList, foldLinkMock]);
}

    export const useLink = (foldLin) => {
        useEffect(() => {
          foldLin();
        }, []);
      };