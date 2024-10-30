/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import useNetwork from "@/hooks/useNetwork";
import { useState, useCallback, useEffect } from "react";
import toast from "react-hot-toast";
import useInternetStore from "../../store/useInternetStore";
import { siteConfig } from "@/config/site";

type fetchType = {
  method: "GET" | "POST" | "PUT" | "DELETE";
  path: string;
  pathParams?: Record<string, string>;
  cache?: "no-store" | "store";
  payload?: any;
  showErrorToast?: boolean;
  showSuccessToast?: boolean;
  server?: string;
};

let attemptCount = 0;

const useFetchPublic = () => {
  const [isPending, setIsPending] = useState(false);
  const isOnline = useNetwork();
  const { isOnlineStore, setIsOnlineStore } = useInternetStore();

  useEffect(() => {
    if (isOnline && !isOnlineStore) {
      setIsOnlineStore(true);
    }
  }, [isOnline, isOnlineStore, setIsOnlineStore]);

  const fetchPublic = useCallback(
    async (props: fetchType) => {
      setIsPending(true);
      const pathParams = props.pathParams
        ? "?" +
          new URLSearchParams(
            props.pathParams
          ).toString()
        : "";

      try {
        const response = await fetch(
          `${props.server ?? siteConfig.API_BASE_URL_PRODUCTION}${
            props.path
          }${pathParams}`,
          {
            cache: props.cache ?? "no-store",
            method: props.method,
            ...(props.method !== "GET" &&
              props.payload && { body: JSON.stringify(props.payload) }),
          }
        );

        setIsPending(false);

        if (response.status === 202) {
          return { isSuccess: true, data: [], message: ["No Content"] };
        }

        const json = await response.json();
        const res = {
          isSuccess: response.ok,
          data: json ?? null,
          message: json?.message ?? [],
        };

        if (!response.ok) throw res;

        if (props.showSuccessToast ?? true) {
          res.message.forEach((msg:string) => msg && toast.success(msg));
        }

        return res;
      } catch (error: any) {
        setIsPending(false);
        if (!isOnline && isOnlineStore) setIsOnlineStore(false);

        const isNetworkError = !error?.status && isOnline;
        const errorMessage = isNetworkError
          ? "Service unavailable due to technical maintenance."
          : error.message || "An unexpected error occurred.";

        if (props.showErrorToast ?? true) {
          toast.error(errorMessage);
        }

        if (error.status === 401 && attemptCount < 5) attemptCount += 1;

        return { isSuccess: false, data: null, message: [errorMessage] };
      }
    },
    [isOnline, isOnlineStore, setIsOnlineStore]
  );

  return { isPending, fetchPublic };
};

export default useFetchPublic;
