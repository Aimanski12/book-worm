import React from 'react'
import Search from './svgs/Search'
import Explore from './svgs/Explore'
import Mybooks from './svgs/MyBooks'
import ChevLeft from './svgs/ChevLeft'
import ChevRight from './svgs/ChevRight'
import Star from './svgs/Star'

function index(props) {

  const svg = props.svg === 'search' ? <Search /> :
    props.svg === 'explore' ? <Explore /> :
    props.svg === 'star' ? <Star /> :
    props.svg === 'chevleft' ? <ChevLeft /> :
    props.svg === 'chevright' ? <ChevRight /> 
    : <Mybooks />
    
  return (
    <>
      {svg}
    </>
  )
}

export default index
