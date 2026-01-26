import { useAppSelector } from '../app/hooks'
import '../styles/profile.css'

const ProfileScreen = () => {
  const { userInfo } = useAppSelector((state) => state.auth)

  return (
    <div>
      <figure>{userInfo?.firstName.charAt(0).toUpperCase()}</figure>
      <span>
        Welcome <strong>{userInfo?.firstName}!</strong> You can view this page
        because you're logged in
      </span>
    </div>
  )
}

export default ProfileScreen
