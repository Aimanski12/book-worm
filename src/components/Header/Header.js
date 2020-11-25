import React from 'react'
import Svg from '../Svg/index'

function Header() {
  return (
    <header className='content-center navbar'>
      <div className="content-center navbar-left">
        <div className='logo'>
          <a href="/">
            <img src="/images/navbar-logo.png" alt=""/>
          </a>
        </div>
        <div className="content-center navbar-input">
          <input
            type="text"
            placeholder="Enter book title or author"/>
          <button className='content-center'>
            <span>
              <Svg svg='search'/>
            </span>
          </button>
        </div>
      </div>
      <div className="content-center navbar-right">
        <div>
          <Svg svg='explore'/>
          <span>Explore Books</span>
        </div>
        <div>
          <Svg svg='my books'/>
          <span>My Books</span>
        </div>
      </div>
    </header>
  )
}

export default Header
