import React from 'react'
import './Header.css'
import PersonIcon from '@mui/material/icons/Person'
import IconButton from '@mui/material/core/IconButton'
import ForumIcon from '@mui/material/icons/Forum'
const Header = () => {
 return (
 <div className="header">
 <IconButton>
 <PersonIcon fontSize="large" className="header__icon" />
 </IconButton>
 <img className="header__logo" src="logo192.png" alt="header" />
 <IconButton>
 <ForumIcon fontSize="large" className="header__icon" />
 </IconButton>
 </div>
 )
}
export default Header