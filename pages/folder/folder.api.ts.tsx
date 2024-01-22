import axiosInstance from '../../lib/axios';
import { ProfileData, FolderLink, FolderData, LinkData } from './type';

export async function profileApi(userId: number): Promise<ProfileData> {
  try {
    const url = `users/${userId}`;
    const response = await axiosInstance.get(url);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch user profile');
  }
}

export async function showFolders(): Promise<FolderLink[]> {
  try {
    const response = await axiosInstance.get('sample/folder');
    return response.data.folder.links;
  } catch (error) {
    console.error('Error fetching folder data:', error);
    throw error;
  }
}

export async function showAll(userId: number): Promise<LinkData[]> {
  try {
    const url = `users/${userId}/links`;
    const response = await axiosInstance.get(url);
    return response.data.data;
  } catch (error) {
    console.error('Error fetching links data:', error);
    throw error;
  }
}

export async function getFolders(){
  try {
    const url = `folders`;
    const response = await axiosInstance.get(url);
    return response.data.data;
  } catch (error) {
    console.error('Error fetching links data:', error);
    throw error;
  }
}

export async function userFolders(userId: string | string[]){
  try {
    const url = `folders/${userId}`;
    const response = await axiosInstance.get(url);
    return response;
  } catch (error) {
    console.error('Error fetching users folders data:', error);
    throw error;
  }
}