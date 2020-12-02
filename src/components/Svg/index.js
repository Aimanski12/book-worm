import React from 'react'
import Search from './svgs/Search'
import Explore from './svgs/Explore'
import Mybooks from './svgs/MyBooks'
import ArrowLeft from './svgs/ArrowLeft'
import ArrowRight from './svgs/ArrowRight'
import ChevRight from './svgs/ChevRight'
import Star from './svgs/Star'

function index(props) {

  const svg = props.svg === 'search' ? <Search /> :
    props.svg === 'explore' ? <Explore /> :
    props.svg === 'chevright' ? <ChevRight /> :
    props.svg === 'star' ? <Star /> :
    props.svg === 'arrowleft' ? <ArrowLeft /> :
    props.svg === 'arrowright' ? <ArrowRight /> 
    : <Mybooks />
    
  return (
    <>
      {svg}
    </>
  )
}

export default index
