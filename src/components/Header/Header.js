import React from 'react'
import ExploreMenu from './components/Explore-MyBooks'
import LogoInput from './components/LogoInput'
import Mininavs from './components/MiniNavs'

function Header() {
  return (
    <header>
      <div className="content-center navbar">
        <LogoInput />
        <ExploreMenu />
      </div>
      <Mininavs />
    </header>
  )
}

export default Header
