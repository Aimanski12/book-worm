import React from 'react'
import Svg from '../Svg'
import Link from 'next/link'
import {Helpers} from '../../utils/common/helpers'

function MainBookoftheDay(props) {

  const authors = (lists) => {
    return lists.map((name, i) => {
      return <span className='author'
        key={i}>{name }</span>
    })
  }

   const books = props.books.map((book, i) => {
    return (
      <div 
        key={i}
        className={`book-of-the-day ${i === 0 ? 'book-visible' : ''}`}>
        <div className='book-of-the-day-cover'>
          <div className="book-cover-background"
            style={{'background': `url('${book.image}') no-repeat center`,'backgroundSize': 'cover'}}></div>
          <div className="content-center book-of-the-day-desc text-1">
            <img src={book.image} alt=""/>
            <div className='content-center book-of-the-day-desc-wrapper'>
              <h2>{Helpers.sliceText(book.title, 19)}</h2>
              <div className="ratings">
                <span>Ratings: {book.rating}</span>
                <Svg svg='star' />
              </div>
              <div className="book-of-the-day-author">
                {authors(Helpers.sortAuthor(book.author, 35))}
              </div>
              <p>{Helpers.sliceText(book.desc, 140)}</p>
              
              <Link href='/'>
                <a className='text-1 content-center'>View Details</a>
              </Link>
            </div>
          </div>

        </div>
      </div>
    )
  })
  return (
    <>
      {books}
    </>
  )
}

export default MainBookoftheDay
