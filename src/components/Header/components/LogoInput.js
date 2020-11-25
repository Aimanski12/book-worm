import React from 'react'
import Svg from '../../Svg/index'

function TopNav() {
  return (
    <div className="content-center navbar-left">
      <div className='logo'>
        <a href="/">
          <img src="/images/navbar-logo.png" alt=""/>
        </a>
      </div>
      <div className="content-center navbar-input">
        <input
          type="text"
          className='text-1'
          placeholder="Enter book title or author"/>
        <button className='content-center'>
          <span>
            <Svg svg='search'/>
          </span>
        </button>
      </div>
    </div>
  )
}

export default TopNav
