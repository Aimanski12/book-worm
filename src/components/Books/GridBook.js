import React from 'react'
import Link from 'next/link'
import Svg from '../Svg'
import Fade from 'react-reveal/Fade'
import {Helpers} from '../../utils/common/helpers'

function GridBook(props) {

   const authors = (lists) => {
    return lists.map((list, i) => {
      return (
        <Link href='/' key={i}>
          <a className='book-author'>{list} </a>
        </Link>
      )
    })
  }

  const books = props.books.map((book, i) => {
    return (
      <Fade key={i}>
        <div className="content-center indvl-book-wrapper text-2">
          <Link href='/'>
            <a>
              <img src={book.volumeInfo.imageLinks ? 
                book.volumeInfo.imageLinks.thumbnail : 
                '/images/book-worm.svg'} alt="book-worm cover"/>
            </a>
          </Link>

          <div className="content-center indvl-book-list-desc">
            <Link href='/'>
              <a className='title'>{Helpers.sliceText(book.volumeInfo.title, 17)}</a>
            </Link>
            <div className="author">
              { book.volumeInfo.authors ?             
                authors(Helpers.sortAuthor(book.volumeInfo.authors, 19)):
                'No Author Given'}
            </div>
            <div className="content-center rating">
              <span>Ratings</span>
              <span className='content-center rate'>
                {book.volumeInfo.averageRating ? 
                  book.volumeInfo.averageRating: 0 } <Svg svg='star'/></span>
            </div>
          </div>
        </div>
      </Fade>
    )
  })
  return (
    <>{books}</>
  )
}

export default GridBook
