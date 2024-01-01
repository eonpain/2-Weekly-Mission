export interface ShardLink {
  id: number;
  createdAt: string;
  url: string;
  title: string;
  description: string;
  imageSource: string;
}

export interface FolderLink {
  id: number;
  name: string;
  owner: {
    id: number;
    name?: string;
    profileImageSource?: string;
  };
  links: ShardLink[];
}

export interface ProfileData {
  data: UserData[];
}

type UserData = {
  id: number;
  created_at: string;
  name: string;
  image_source: string;
  email: string;
  auth_id: string;
};
export interface FolderData {
  id: number;
  created_at: string;
  name: string;
  user_id: number;
  favorite: boolean;
  link: {
    count: number;
  };
}

export interface LinkData {
  id: number;
  created_at: string;
  updated_at: string | null;
  url: string;
  title: string;
  description: string;
  image_source: string;
  folder_id: number;
}
