import { apiSlice } from "../../apiSlice";
import { URLS } from "@/constants";

export const orderApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCurrentOrders: builder.query({
      query: () => URLS.ORDER_URL + `get_current_orders/`,
    }),
    getOrderByID: builder.query({
      query: (id) => URLS.ORDER_URL + `get_order_by_id/?id=${id}&flag=driver`,
    }),
    updateOrderStatus: builder.mutation({
      query: (data) => ({
        headers: { "Content-Type": "application/json" },
        url: URLS.ORDER_URL + `update_order_status/`,
        method: "PUT",
        body: JSON.stringify(data),
      }),
      onQueryStarted: async (
        { id, status, ...put },
        { dispatch, queryFulfilled }
      ) => {
        try {
          const res = await queryFulfilled;
          console.log("res", res.data);

          dispatch(
            orderApiSlice.util.updateQueryData(
              "getCurrentOrders",
              undefined,
              (draft) => {
                draft.map((item: any) => {
                  if (item.id === id) {
                    item.status = status;
                  }
                });
              }
            )
          );
          dispatch(
            orderApiSlice.util.updateQueryData(
              "getOrderByID",
              String(id),
              (draft) => {
                Object.assign(draft, res.data);
              }
            )
          );
        } catch (error: any) {}
      },
    }),
  }),
});

export const {
  useGetCurrentOrdersQuery,
  useGetOrderByIDQuery,
  useUpdateOrderStatusMutation,
} = orderApiSlice;
