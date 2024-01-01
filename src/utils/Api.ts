import { ProfileData, FolderLink, FolderData, LinkData } from "./type";

export async function ProfileApi(): Promise<ProfileData> {
  const response = await fetch("https://bootcamp-api.codeit.kr/api/users/1");
  const profiledata = await response.json();
  return profiledata;
}

export async function ShowFolders(): Promise<FolderLink[]> {
  try {
    const response = await fetch(
      "https://bootcamp-api.codeit.kr/api/sample/folder"
    );
    const data = await response.json();
    return data.folder.links;
  } catch (error) {
    console.error("Error fetching folder data:", error);
    return [];
  }
}

export async function FetchFolderData(): Promise<FolderData[]> {
  try {
    const response = await fetch(
      "https://bootcamp-api.codeit.kr/api/users/1/folders"
    );
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Error fetching folder data:", error);
    return [];
  }
}

export async function ShowAll(): Promise<LinkData[]> {
  const response = await fetch(
    "https://bootcamp-api.codeit.kr/api/users/1/links"
  );
  const data = await response.json();
  return data.data;
}
