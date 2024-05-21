import { apiSlice } from "../../apiSlice";
import { URLS } from "@/constants";
export const issueApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createIssue: builder.mutation({
      query: ({ data, type }) => ({
        headers: { "Content-Type": "application/json" },
        url: URLS.ISSUE_URL + "create_issue/?type=" + type,
        method: "POST",
        body: JSON.stringify(data),
      }),
      onQueryStarted: async ({ data, type }, { dispatch, queryFulfilled }) => {
        try {
          const res = await queryFulfilled;
          dispatch(
            issueApiSlice.util.updateQueryData(
              "getCurrentEmployeeIssues",
              undefined,
              (draft) => {
                draft.push(res.data);
              }
            )
          );
        } catch (error) {}
      },
    }),

    getIssueById: builder.query({
      query: (id) => URLS.ISSUE_URL + `get_issue_by_id/?id=${id}`,
    }),
    getCurrentEmployeeIssues: builder.query({
      query: () => URLS.ISSUE_URL + `get_user_issues/`,
    }),
    updateIssueStatus: builder.mutation({
      query: (data: { id: string; status: number; type: string }) => ({
        headers: { "Content-Type": "application/json" },
        url:
          URLS.ISSUE_URL +
          `update_issue_status/?id=${data.id}&type=${data.type}`,
        method: "PUT",
        body: JSON.stringify(data),
      }),
      onQueryStarted: async (
        { id, type, ...put },
        { dispatch, queryFulfilled }
      ) => {
        try {
          const res = await queryFulfilled;

          dispatch(
            issueApiSlice.util.updateQueryData(
              "getIssueById",
              { id, type },
              (draft) => {
                Object.assign(draft, res.data);
              }
            )
          );

          dispatch(
            issueApiSlice.util.updateQueryData(
              "getCurrentEmployeeIssues",
              undefined,
              (draft) => {
                draft.map((item: any) => {
                  if (item.id === id) {
                    item.status = put.status;
                  }
                });
              }
            )
          );
        } catch (error) {}
      },
    }),
  }),
});

export const {
  useGetIssueByIdQuery,
  useUpdateIssueStatusMutation,
  useGetCurrentEmployeeIssuesQuery,
  useCreateIssueMutation,
} = issueApiSlice;
