import React from 'react'
import Link from 'next/link'

function SideNavs(props) {

  const lists = props.menus.map((l, i) => {
    return (
      <li key={i}>
        <Link 
          href={`/${props.title.toLowerCase()}/[slug]`}
          as={`/${props.title.toLowerCase()}/${l.link}`} >
          <a>{l.name}</a>
        </Link>
      </li>
    )
  })

  return (
    <div className="side-navs text-1">
      <span>{props.title === 'Textbooks' ? props.title : 
        `${props.title} Books`}</span>
      <ul>
        {lists}
      </ul>
    </div>
  )
}

export default SideNavs
