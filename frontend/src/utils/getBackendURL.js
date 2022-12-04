export const getBackendURL = () => {
  if (process.env.NODE_ENV === 'production') {
    return process.env.BACKEND_URL
  } else {
    return process.env.REACT_APP_BACKEND_URL
  }
}

export default getBackendURL
