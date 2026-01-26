export interface User {
  _id: string
  firstName: string
  email: string
  userToken?: string
}

export interface AuthState {
  loading: boolean
  userInfo: User | null
  userToken: string | null
  error: string | null
  success: boolean
}

export interface LoginCredentials {
  email: string
  password: string
}

export interface RegisterCredentials {
  firstName: string
  email: string
  password: string
}

export interface ApiError {
  message: string
  stack?: string
}
