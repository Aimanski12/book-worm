import React from 'react'
import Link from 'next/link'
import menu from '../../../utils/data/common.json'

function MidMenu() {

  const midmenu = menu.midmenu.map((m, i) => {
    return (
      <Link  href={m.link} key={i}>
        <a className='content-center text-1'>
          <img src={`/images${m.link}.svg`} alt={`${m.name.toLowerCase()} icon`}/>
          <span>{m.name}</span>
        </a>
      </Link>
    )
  })

  return (
    <div className='content-center mid-menu'>
      {midmenu}
    </div>
  )
}

export default MidMenu
