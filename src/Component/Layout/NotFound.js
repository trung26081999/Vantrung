import React from 'react'
import notfound from '../../Assets/Login/notfound.svg'

const NotFound = () => {
  return (
    <div className='notfound'>
      <div className='container'>
        <img src={notfound} alt="notfound"/>
        <h1>Ops... Page Not Found !</h1>
      </div>
    </div>
  )
}

export default NotFound
