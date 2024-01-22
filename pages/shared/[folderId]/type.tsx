export type UserRawData = {
    id: number;
    created_at: string;
    name: string;
    image_source: string;
    email: string;
    auth_id: string;
};

export type UserData = {
    id: number;
    createdAt: string;
    ownerName: string;
    email: string;
    profileImage: string;
    authId: string;
}

export type FolderRawData = {
    id: number;
    created_at: string;
    name: string;
    user_id: number;
    link?: {
        count: number;
    };
};

export type LinkRawData = {
    id: number;
    created_at: string;
    updated_at: string;
    url: string;
    image_source: string;
    title: string;
    description: string;
    folder_id: number;
};