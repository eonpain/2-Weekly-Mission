export async function ProfileApi() {
  const response = await fetch("https://bootcamp-api.codeit.kr/api/users/1");
  const profiledata = await response.json();
  return profiledata;
}

export async function ShowFolders() {
  try {
    const response = await fetch("https://bootcamp-api.codeit.kr/api/sample/folder");
    const data = await response.json();
    return data.folder.links;
  } catch (error) {
    console.error("Error fetching folder data:", error);
    return [];
  }
}

export async function FetchFolderData() {
  try {
    const response = await fetch("https://bootcamp-api.codeit.kr/api/users/1/folders");
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Error fetching folder data:", error);
    return [];
  }
}


export async function ShowAll() {
  const response = await fetch("https://bootcamp-api.codeit.kr/api/users/1/links");
  const data = await response.json();
  return data.data;
}
