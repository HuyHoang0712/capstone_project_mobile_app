import { apiSlice } from "../../apiSlice";
import { setCredentials } from "./authSlice";
import { SecureStoreService } from "@/utils/SecureStore.service";
export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        headers: { "Content-Type": "application/json" },
        url: "/auth/login/supervisor",
        method: "post",
        body: JSON.stringify(credentials),
      }),
      onQueryStarted: async (credentials, { dispatch, queryFulfilled }) => {
        try {
          const res = await queryFulfilled;
          SecureStoreService.setCredentials(res.data);
        } catch (error: any) {}
      },
    }),
  }),
});

export const { useLoginMutation } = authApiSlice;
