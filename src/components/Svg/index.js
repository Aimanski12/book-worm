import React from 'react'
import Search from './svgs/Search'
import Explore from './svgs/Explore'
import Mybooks from './svgs/MyBooks'

function index(props) {

  const svg = props.svg === 'search' ? <Search /> :
    props.svg === 'explore' ? <Explore />
    : <Mybooks />
    
  return (
    <>
      {svg}
    </>
  )
}

export default index
