import React from 'react'
import Link from 'next/link'
import {JSON} from '../../../utils/data'

function MiniNavs() {
  const navlist = JSON.data('mininavs')

  const mininavs = navlist.map((list, i) => {
    return (
      <Link href={list.link} key={i}>
        <a className='text-1'>{list.name}</a>
      </Link>
    )
  })
  
  return (
    <div className='mini-navs'>
      <div className="content-center mini-navs-wrapper">
        {mininavs}
      </div>
    </div>
  )
}

export default MiniNavs
