import React from 'react'
import Link from 'next/link'
import {Helpers} from '../../utils/common/helpers'

function FeaturedType(props) {
  const lists = props.books
  
  const authors = (lists) => {
    return lists.map((list, i) => {
      return (
        <Link href='/' key={i}>
          <a className='book-author'>{list} </a>
        </Link>
      )
    })
  }

  const books = lists.map((list, i) => {
    return (
      <div key={i}
        className="content-center featured-books-indiv" >
      <Link href='/'>
        <a><img src={list.thumbnail} alt={`${list.title} book cover`}/></a>
      </Link>
      <div className="content-center books-desc">
        <Link href='/'>
        <a className='book-title'>{Helpers.sortBookTitle(list.title)}</a>
        </Link>
        <div className="book-author-wrapper">
          {authors(Helpers.sortAuthor(list.authors))}
        </div>
      </div>
    </div>   
    )
  })

  return (
   <>{books}</>
  )
}

export default FeaturedType
