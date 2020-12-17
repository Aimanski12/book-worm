import React from 'react'
import ExploreMenu from './components/Explore-MyBooks'
import LogoInput from './components/LogoInput'
import Mininavs from './components/MiniNavs'
import BookDay from './components/BookDay'
import MidMenu from './components/MidMenu'

function Header(props) {
  return (
    <header>
      <div className="content-center navbar">
        <LogoInput />

        <div className="burger-nav">
          <div className="burger-btn">
            <img src="/images/burger-btn.svg" alt=""/>
          </div>
          <div className="burger-menulist-wrapper">
            sadf
          </div>
        </div>




        <ExploreMenu />
      </div>
      <Mininavs />
      {props.booksoftheday ? 
        <BookDay books={props.books}/> : null}
      <MidMenu />
    </header>
  )
}

export default Header
