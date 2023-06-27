import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseUrl =
  process.env.NODE_ENV !== 'production'
    ? 'http://127.0.0.1:5000/'
    : import.meta.env.VITE_SERVER_URL

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.userToken
      if (token) {
        headers.set('authorization', `Bearer ${token}`)
        return headers
      }
    },
  }),
  endpoints: (build) => ({
    getUserDetails: build.query({
      query: () => ({
        url: 'api/user/profile',
        method: 'GET',
      }),
    }),
  }),
})

// export react hook
export const { useGetUserDetailsQuery } = authApi
