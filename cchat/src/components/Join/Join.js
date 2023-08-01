import React from 'react'
import './Join.css';
import logo from '../../images/logo.png';


const Join = () => {
  return (
    <div className='JoinPage'>
      <div className='JoinContainer'>
        <img src={logo} alt='logo' />
        <h1>Chat Room</h1>
        <input placeholder='Name' className='JoinInput' type='JoinInput' />
        <button className='JoinButton' type='submit'>Login</button>
      </div>
    </div>
  )
}

export default Join