import { NavLink, Outlet } from 'react-router-dom'
import { useAppSelector } from '../app/hooks'

const ProtectedRoute = () => {
  const { userInfo } = useAppSelector((state) => state.auth)

  // show unauthorized screen if no user is found in redux store
  if (!userInfo) {
    return (
      <div className='unauthorized'>
        <h1>Unauthorized :(</h1>
        <span>
          <NavLink to='/login'>Login</NavLink> to gain access
        </span>
      </div>
    )
  }

  return <Outlet />
}

export default ProtectedRoute
