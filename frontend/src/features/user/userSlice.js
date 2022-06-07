import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: false,
  userInfo: [],
  userToken: null,
  error: null,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {},
})

export default userSlice.reducer
