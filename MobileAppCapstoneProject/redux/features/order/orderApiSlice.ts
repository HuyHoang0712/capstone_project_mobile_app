import { apiSlice } from "../../apiSlice";
import { URLS } from "@/constants";

export const orderApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCurrentOrders: builder.query({
      query: () => URLS.ORDER_URL + `get_current_orders/`,
    }),
    getOrderByID: builder.query({
      query: (id) => URLS.ORDER_URL + `get_order_by_id/?id=${id}`,
    }),
  }),
});

export const { useGetCurrentOrdersQuery, useGetOrderByIDQuery } = orderApiSlice;
