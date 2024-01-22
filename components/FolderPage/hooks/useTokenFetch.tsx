// import { useState, useEffect, useCallback } from "react";
// import axios, { CancelTokenSource } from "axios";

// function useTokenFetch<T>(url: string): { data: T | null; loading: boolean } {
//   const [fetchData, setFetchData] = useState<T | null>(null);
//   const [loading, setLoading] = useState<boolean>(true);

//   const fetching = useCallback(
//     async (token: string, cancelToken: CancelTokenSource) => {
//       setLoading(true);
//       try {
//         const response = await axios.get(url, {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//           cancelToken: cancelToken.token,
//         });

//         setFetchData(response.data);
//       } catch (error) {
//         console.error(error);
//         setFetchData(null);
//       } finally {
//         setLoading(false);
//       }
//     },
//     [url]
//   );

//   useEffect(() => {
//     const token = localStorage.getItem("accessToken");
//     const cancelToken = axios.CancelToken.source();

//     if (token) {
//       fetching(token, cancelToken);
//     } else {
//       setLoading(false);
//     }

//     return () => {
//       cancelToken.cancel();
//     };
//   }, [fetching]);

//   return { data: fetchData, loading };
// }

// export default useTokenFetch;
