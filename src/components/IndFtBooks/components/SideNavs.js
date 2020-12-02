import React from 'react'
import Link from 'next/link'

function SideNavs(props) {

  const lists = props.menus.map((l, i) => {
    return (
      <li key={i}>
        <Link href='/'>
          <a>{l.name}</a>
        </Link>
      </li>
    )
  })

  return (
    <div className="side-navs text-1">
      <span>{props.title}</span>
      <ul>
        {lists}
      </ul>
    </div>
  )
}

export default SideNavs
