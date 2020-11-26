import React from 'react'
import ExploreMenu from './components/Explore-MyBooks'
import LogoInput from './components/LogoInput'
import Mininavs from './components/MiniNavs'
import BookDay from './components/BookDay'
import MidMenu from './components/MidMenu'

function Header() {
  return (
    <header>
      <div className="content-center navbar">
        <LogoInput />
        <ExploreMenu />
      </div>
      <Mininavs />
      <BookDay />
      <MidMenu />
    </header>
  )
}

export default Header
