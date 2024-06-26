import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

export const authApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
       userLogin: build.mutation({
          query: (loginData) => ({
             url: `/login`,
             method: 'POST',
             data: loginData,
          }),
          invalidatesTags: [tagTypes.user],
       }),
       changePassword: build.mutation({
          query: (data) => ({
             url: `/change-password`,
             method: 'POST',
             contentType: 'application/json',
             data: data,
          }),
          invalidatesTags: [tagTypes.user],
       }),

       getAllUsers: build.query({
         query: () => ({
            url: '/all-users',
            method: 'GET',
         }),
         providesTags: [tagTypes.user],
      }),

      getWebsiteActivity: build.query({
         query: () => ({
            url: '/website-activity',
            method: 'GET',
         }),
         // providesTags: [tagTypes.lostItem],
      }),

      updateActiveStatus: build.mutation({
         query: (data) => {
            console.log(data);
            return {
               url: `/${data.userId}/activate`,
               method: 'PATCH',
               data: {isActive:data.body},
            };
         },
         invalidatesTags: [tagTypes.user],
      }),
      
    }),
 });
 
 export const {
 useChangePasswordMutation,
 useUserLoginMutation,
 useGetAllUsersQuery,
 useGetWebsiteActivityQuery,
 useUpdateActiveStatusMutation
 } = authApi;