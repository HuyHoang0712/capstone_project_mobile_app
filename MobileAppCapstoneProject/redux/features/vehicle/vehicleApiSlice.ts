import { apiSlice } from "../../apiSlice";
import { URLS } from "@/constants";

export const vehicleApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAssignedVehicle: builder.query({
      query: () => URLS.VEHICLE_URL + "get_vehicle_by_user_id/",
    }),
  }),
});

export const { useGetAssignedVehicleQuery } = vehicleApiSlice;
