import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { registerUser, userLogin } from './authActions'
import type { AuthState, User } from '../../types'

// initialize userToken from local storage
const userToken = localStorage.getItem('userToken')

const initialState: AuthState = {
  loading: false,
  userInfo: null,
  userToken,
  error: null,
  success: false,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem('userToken')
      state.loading = false
      state.userInfo = null
      state.userToken = null
      state.error = null
    },
    setCredentials: (state, action: PayloadAction<User>) => {
      state.userInfo = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      // login user
      .addCase(userLogin.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.loading = false
        state.userInfo = action.payload
        state.userToken = action.payload.userToken ?? null
      })
      .addCase(userLogin.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload ?? null
      })
      // register user
      .addCase(registerUser.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(registerUser.fulfilled, (state) => {
        state.loading = false
        state.success = true
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload ?? null
      })
  },
})

export const { logout, setCredentials } = authSlice.actions

export default authSlice.reducer
