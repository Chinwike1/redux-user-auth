import { createSlice } from '@reduxjs/toolkit'

const initialState = { bar: 'Swagger Terrific' }

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {},
})

// export const {  } = userSlice.actions

export default userSlice.reducer
