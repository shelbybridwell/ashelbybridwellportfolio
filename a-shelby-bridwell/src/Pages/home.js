import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';
import "../styles/home.css"

export default function home() {
  return (
    <div className='home'>
      <div className='about'>
        <h2>Hi</h2>
        <div className='prompt'>
          <p>
            Hello
          </p>
          <LinkedInIcon />
          <EmailIcon />
          <GitHubIcon />
        </div>
      </div>
      <div className='skills'>
        <h1>Skills</h1>
        <ol className='list'>
          <li className='item'>
            <h2>Front-End</h2>
            <span></span>
          </li>
          <li className='item'>
            <h2>Back-End</h2>
            <span></span>
          </li>
        </ol>
      </div>
    </div>
  )
}
