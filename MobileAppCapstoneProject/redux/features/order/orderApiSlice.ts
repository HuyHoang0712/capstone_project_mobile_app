import { apiSlice } from "../../apiSlice";
import { URLS } from "@/constants";

export const orderApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCurrentOrders: builder.query({
      query: () => URLS.ORDER_URL + `get_current_orders/`,
    }),
  }),
});

export const { useGetCurrentOrdersQuery } = orderApiSlice;
