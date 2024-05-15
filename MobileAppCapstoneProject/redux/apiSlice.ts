import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query";
import { RootState } from "./store";
import { SecureStoreService } from "@/utils/SecureStore.service";
const apiURL =
  process.env.EXPO_PUBLIC_NODE_ENV === "production"
    ? process.env.EXPO_PUBLIC_BACKEND_PROD
    : process.env.EXPO_PUBLIC_BACKEND_DEV;

// const mutex = new Mutex();
const baseQuery = fetchBaseQuery({
  baseUrl: apiURL,
  prepareHeaders: (headers, { getState }) => {
    const state = getState() as RootState;
    const token = SecureStoreService.getAccessToken();
    const tokenExpired = SecureStoreService.isAccessExpired();
    if (token) {
      if (!tokenExpired) {
        headers.set("authorization", `Bearer ${token}`);
      } else {
        headers.set("authorization", `Bearer ${token}`);
        headers.set("x-refresh", `${token}`);
      }
      headers.set("Accept", "*/*");
    }
    return headers;
  },
});

const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);
  if (result?.error?.status === 401) {
    console.log("sending refresh token");

    const refreshResult = await baseQuery("auth/refresh", api, extraOptions);
    if (refreshResult?.data) {
      // store the new token
      // api.dispatch(setCredentials({ response: refreshResult.data }));
      // retry the original query with new access token
      result = await baseQuery(args, api, extraOptions);
    } else {
      // api.dispatch(logOut());
    }
  }
  return result;
};

export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({}),
});
