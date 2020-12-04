import React from 'react'
import Link from 'next/link'
import Lists from './components/Lists'

function Explore(props) {

  const menulists = props.menulists.books.map((menu, i) => {
    return <div key={i}
      className="explore-menu-wrapper text-1">
      <span>
        <Link href={`/${menu.name.toLowerCase()}`}>
          <a>{menu.name}</a>
        </Link>
      </span>
      <ul>
        <Lists 
          lists={menu.lists}
          name={menu.name}/>
      </ul>
    </div>
  })
  

  const textbooklist = props.menulists.textbooks.lists.map((list, i) => {
    return (
      <div className="explore-textbook-indvl" key={i}>
        <span>
          <Link 
            href='/textbooks/[slug]'
            as={`/textbooks/${list.link}`}>
            <a>{list.name}</a>
          </Link>
        </span>
        <ul>
          <Lists 
            name={props.menulists.textbooks.name}
            lists={list.lists}/>
        </ul>
      </div>
    )
  })

  return (
    <div className="content-center explore-container">
      {menulists}      
      <div className="explore-textbook-wrapper text-1">
        <span className='textbooks'>
          <Link href='/textbooks'>
            <a>Textbooks</a>
          </Link>
        </span>
        {textbooklist}
      </div>
    </div>
  )
}

export default Explore
