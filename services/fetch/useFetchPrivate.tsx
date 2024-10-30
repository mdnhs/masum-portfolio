// "use client";

// import useNetwork from "@/hooks/useNetwork";
// import { useSession } from "next-auth/react";
// import { useState } from "react";
// import toast from "react-hot-toast";
// import useInternetStore from "../store/useInternetStore";

// type fetchType = {
//   method: "GET" | "POST" | "PUT" | "DELETE";
//   path: string;
//   pathParams?: any;
//   cache?: "no-store" | "store";
//   payload?: any;
//   isFormData?: any;
//   showErrorToast?: boolean;
//   showSuccessToast?: boolean;
//   server?: string;
//   isRefreshToken?: boolean;
//   jwt?: string;
// };

// let attemptCount = 0;

// const useFetchPrivate = () => {
//   const { data: session, update } = useSession();

//   const [isPending, setIsPending] = useState(false);
//   //FOR HANDLING NO INTERNET
//   let isOnline = useNetwork();
//   const { isOnlineStore, setIsOnlineStore } = useInternetStore();
//   // RESET TO ONLINE
//   if (isOnline && !isOnlineStore) {
//     setIsOnlineStore(true);
//   }

//   const fetchPrivate = async (props: fetchType) => {
//     setIsPending(true);
//     const pathParams = !!props.pathParams
//       ? Object.entries(props.pathParams)
//         .map(
//           (item, index) => `${index === 0 ? "?" : ""}${item[0]}=${item[1]}`
//         )
//         .join("&")
//       : "";

//     try {
//       const response = await fetch(
//         `${props.server ?? process.env.SERVER}${props.path}${pathParams}`,
//         {
//           cache: props.cache ?? "no-store",
//           method: props.method,
//           headers: props.isFormData
//             ? {
//               Authorization: `Bearer ${session?.user?.token}`,
//               Platformtypeid: "1",
//             }
//             : {
//               Authorization: `Bearer ${props.jwt ? props.jwt : session?.user?.token
//                 }`,
//               Accept: "application/json",
//               "Content-Type": "application/json",
//               Platformtypeid: "1",
//             },
//           ...(props.method !== "GET" &&
//             props.payload && {
//             body: props.isFormData
//               ? props.payload
//               : JSON.stringify(props.payload),
//           }),
//         }
//       );

//       setIsPending(false);

//       // EXCEPTION STATUS HANDLE
//       if (response.status === 202) {
//         let res = {
//           isSuccess: true,
//           data: [],
//           errorData: null,
//           message: ["No Content"],
//         };

//         return res;
//       }

//       // DEFAULT STATUS HANDLE
//       const json = await response.json();

//       let res = {
//         isSuccess: response.ok,
//         data: json?.data ?? null,
//         errorData: null,
//         message: json?.message,
//         status: response.status,
//       };

//       // REQUEST ERROR
//       if (!response.ok) {
//         throw res;
//       }

//       // TOAST - SUCCESS
//       if (props?.showSuccessToast ?? true) {
//         if (res.isSuccess && response.status !== 202) {
//           res?.message?.map((item: string) => {
//             if (!!item) toast.success(item);
//           });
//         }
//       }

//       return res;
//     } catch (error: any) {
//       setIsPending(false);

//       // OFFLINE
//       if (!isOnline && isOnlineStore) {
//         setIsOnlineStore(false);
//       }

//       let isNetworkError = !error.hasOwnProperty("status") && isOnline;

//       let res = {
//         isSuccess: false,
//         data: null,
//         errorData: error?.data ?? null,
//         message: isNetworkError
//           ? [
//             `Sorry, this service is currently unavailable due to technical maintenance. We are working to get this resolved as soon as possible. Thank you for choosing FirstTrip!`,
//           ]
//           : error?.message,
//       };

//       // TOAST - ERROR
//       if (props.showErrorToast ?? true) {
//         if (isNetworkError) {
//           toast.error(res?.message[0]);
//         } else if (error.status !== 401) {
//           res?.message?.map((item: string) => {
//             if (!!item) toast.error(item);
//           });
//         }
//       }

//       // REFRESH TOKEN
//       if (error.status === 401 && attemptCount < 5) {
//         attemptCount += 1;
//         setTimeout(async () => {
//           await update();
//         }, 5000);
//       } else {
//         return res;
//       }
//     }
//   };

//   return { isPending, fetchPrivate };
// };

// export default useFetchPrivate;
