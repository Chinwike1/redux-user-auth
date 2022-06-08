import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import '../styles/profile.css'

const ProfileScreen = () => {
  const { userInfo } = useSelector((state) => state.user)

  const navigate = useNavigate()

  // redirect unauthenticated user to login screen
  useEffect(() => {
    if (userInfo === null) {
      navigate('/')
    }
  }, [userInfo, navigate])

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
