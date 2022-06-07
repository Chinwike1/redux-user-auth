import { NavLink } from 'react-router-dom'
import '../styles/header.css'

const Header = () => {
  return (
    <header>
      <div className='header-status'>
        <span>You're not logged in</span>
        <div className='cta'>
          <NavLink className='button' to='/login'>
            Login
          </NavLink>
        </div>
      </div>
      <nav className='container navigation'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/login'>Login</NavLink>
        <NavLink to='/register'>Register</NavLink>
        <NavLink to='/user-profile'>Profile</NavLink>
      </nav>
    </header>
  )
}

export default Header
