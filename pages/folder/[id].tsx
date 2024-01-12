import axiosInstance from '../../lib/axios';
import { ProfileData, FolderLink, FolderData, LinkData } from './type';

export async function ProfileApi(): Promise<ProfileData> {
  try {
    const response = await axiosInstance.get('users/1');
    return response.data;
  } catch (error) {
    console.error('Error fetching profile data:', error);
    throw error;
  }
}

export async function ShowFolders(): Promise<FolderLink[]> {
  try {
    const response = await axiosInstance.get('sample/folder');
    return response.data.folder.links;
  } catch (error) {
    console.error('Error fetching folder data:', error);
    throw error;
  }
}

export async function FetchFolderData(): Promise<FolderData[]> {
  try {
    const response = await axiosInstance.get('users/1/folders');
    return response.data.data;
  } catch (error) {
    console.error('Error fetching folder data:', error);
    throw error;
  }
}

export async function ShowAll(): Promise<LinkData[]> {
  try {
    const response = await axiosInstance.get('users/1/links');
    return response.data.data;
  } catch (error) {
    console.error('Error fetching links data:', error);
    throw error;
  }
}
