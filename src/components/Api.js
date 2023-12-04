// export async function ProfileApi() {
//   const response = await fetch("https://bootcamp-api.codeit.kr/api/users/1");
//   const data = await response.json();
//   return data;
// }

// export async function ShowFolders() {
//   const response = await fetch("https://bootcamp-api.codeit.kr/api/sample/folder");
//   const data = await response.json();
//   const sortdata = await data.data;
//   return sortdata;
// }

// export async function FolderData() {
//   const response = await fetch("https://bootcamp-api.codeit.kr/api/users/1/folders");
//   const data = await response.json();
//   return data;
// }

export async function ShowAll() {
  const response = await fetch("https://bootcamp-api.codeit.kr/api/users/1/links");
  const data = await response.json();
  return data;
}
