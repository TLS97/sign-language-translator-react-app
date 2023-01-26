import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useUser } from '../../context/UserContext';

const Navbar = () => {
    
    const { user } = useUser();
    const navigate = useNavigate()

    const handleUserClick = () => {
        navigate("/profile");
    }

// Show only "lost in translation" logo on the login page
// Show robot image, user and user image, and logout button on profile and translation page

  return (
    <div id="navbar">
      {user === null && <h3>Lost in Translation</h3>}
        { user !== null &&
          <>
            <img src={"Logo.png"} alt="Logo" />
            <h3>Lost in Translation</h3>
            <div id="navbar-user" onClick={handleUserClick}>
                <span>{ user.username }</span>
                <img src={"user.png"} alt="UserImage" />
            </div>
          </>
        }
    </div>
   
  )
}

export default Navbar