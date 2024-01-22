import axiosInstance from "@/lib/axios";
import { UserRawData, FolderRawData, LinkRawData } from "./type";
import { useCallback } from "react";

export async function getFolder(folderId: string) {
    const res = await axiosInstance.get<{ data: FolderRawData[] }>(`folders/${folderId}`);
    const folderResponse = res.data?.data?.[0];

    const folderData = folderResponse
    ? {
        folderId: folderResponse.id,
        userId: folderResponse.user_id,
        name: folderResponse.name,
    }
    : {
        folderId: 0,
        userId: 0,
        name: '',
    };

    return folderData;
}

export async function getUser(userId: number){
    const res = await axiosInstance.get<{ data: UserRawData[] }>(`users/${userId}`);
    const userResponse = res.data?.data?.[0];

    const userData = userResponse
    ? {
        id: userResponse.id,
        createdAt: userResponse.created_at,
        ownerName: userResponse.name,
        email: userResponse.email,
        profileImage: userResponse.image_source,
        authId: userResponse.auth_id,
    }
    : {
        id: 0,
        createdAt: '',
        ownerName: '',
        email: '',
        profileImage: '',
        authId: '',
    };
    return userData;
}

export async function getLinks(userId: any) {
    const res = await axiosInstance.get<{data: LinkRawData[]}>(`/users/${userId}/links`);
    const linksResponse = res.data?.data;

    const linksData = linksResponse
      ? linksResponse.map(linkResponse => ({
          id: linkResponse.id,
          createdAt: linkResponse.created_at,
          url: linkResponse.url,
          title: linkResponse.title,
          description: linkResponse.description,
          imageSource: linkResponse.image_source,
          folder_id: linkResponse.folder_id,
        }))
      : [];
  
    return linksData;
  }

  export async function getAllLinks(userId: any){
     const res = await axiosInstance.get(``)
  }