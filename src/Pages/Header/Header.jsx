import React from 'react'

import PersonIcon from '@mui/icons-material/Person';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';

import './Header.css'
import { IconButton } from '@mui/material';

const Header = () => {
  return (
    <div className='header'>
      <IconButton>
        <PersonIcon fontSize='large' className='header__icon' />
      </IconButton>

      <img src="https://assets.stickpng.com/images/6136258bf5966900044cbf6c.png" className='header__logo' alt="" />
      <IconButton>
        <QuestionAnswerIcon fontSize='large' className='header__icon' />
      </IconButton>
    </div>
  )
}

export default Header