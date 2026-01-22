import axios, { AxiosError } from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import type { User, LoginCredentials, RegisterCredentials } from '../../types'

const backendURL = 'http://localhost:5000/'

interface ApiErrorResponse {
  message: string
}

export const userLogin = createAsyncThunk<User, LoginCredentials, { rejectValue: string }>(
  'auth/login',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }

      const { data } = await axios.post<User>(`${backendURL}api/user/login`, { email, password }, config)

      // store user's token in local storage
      if (data.userToken) {
        localStorage.setItem('userToken', data.userToken)
      }

      return data
    } catch (error) {
      const axiosError = error as AxiosError<ApiErrorResponse>
      if (axiosError.response && axiosError.response.data.message) {
        return rejectWithValue(axiosError.response.data.message)
      } else {
        return rejectWithValue(axiosError.message)
      }
    }
  }
)

export const registerUser = createAsyncThunk<void, RegisterCredentials, { rejectValue: string }>(
  'auth/register',
  async ({ firstName, email, password }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }

      await axios.post(`${backendURL}api/user/register`, { firstName, email, password }, config)
    } catch (error) {
      const axiosError = error as AxiosError<ApiErrorResponse>
      if (axiosError.response && axiosError.response.data.message) {
        return rejectWithValue(axiosError.response.data.message)
      } else {
        return rejectWithValue(axiosError.message)
      }
    }
  }
)
