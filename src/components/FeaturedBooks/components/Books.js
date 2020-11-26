import React from 'react'
import FeaturedBooks from '../../Books/FeaturedType'
import Link from 'next/link'

function Books(props) {
  const book = props.books

  const books = (
    <>
      <div className="content-center featured-book-title">
        <span className='collection-title'>{book.name}</span>
        <Link href={book.link}>
          <a className='view-all-btn'>
            <span>View All</span>
          </a>
        </Link>
      </div>
       <div className="featured-books-slider">
        <div className="content-center featured-books-wrapper">
          
          <FeaturedBooks books={book.books}/>

        </div>
      </div>
    </>
  )

  return (
    <div className='featured-books-collection text-2'>
      {books}
      {/* <div className="content-center featured-book-title">
        <span className='collection-title'>Drama</span>
        <Link href='/'>
          <a className='view-all-btn'>
            <span>View All</span>
          </a>
        </Link>
      </div>

      <div className="featured-books-slider">
        <div className="content-center featured-books-wrapper">
          <div className="content-center featured-books-indiv">
            <Link href='/'>
              <a>
                <img src="http://books.google.com/books/content?id=6WbaCwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api" alt=""/>
              </a>
            </Link>
            <div className="content-center books-desc">
              <Link href='/'>
                <a className='book-title'>
                  12345678901234567..
                </a>
              </Link>
              <Link href='/'>
                <a className='book-author'>
                  Scott Hawkins
                </a>
              </Link>
            </div>
          </div>
          <div className="content-center featured-books-indiv">
            <Link href='/'>
              <a>
                <img src="http://books.google.com/books/content?id=6WbaCwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api" alt=""/>
              </a>
            </Link>
            <div className="content-center books-desc">
              <Link href='/'>
                <a className='book-title'>
                  Samples
                </a>
              </Link>
              <Link href='/'>
                <a className='book-author'>
                  Scott Hawkins
                </a>
              </Link>
            </div>
          </div>
          <div className="content-center featured-books-indiv">
            <Link href='/'>
              <a>
                <img src="http://books.google.com/books/content?id=6WbaCwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api" alt=""/>
              </a>
            </Link>
            <div className="content-center books-desc">
              <Link href='/'>
                <a className='book-title'>
                  Samples
                </a>
              </Link>
              <Link href='/'>
                <a className='book-author'>
                  Scott Hawkins
                </a>
              </Link>
            </div>
          </div>
          <div className="content-center featured-books-indiv">
            <Link href='/'>
              <a>
                <img src="http://books.google.com/books/content?id=6WbaCwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api" alt=""/>
              </a>
            </Link>
            <div className="content-center books-desc">
              <Link href='/'>
                <a className='book-title'>
                  Samples
                </a>
              </Link>
              <Link href='/'>
                <a className='book-author'>
                  Scott Hawkins
                </a>
              </Link>
            </div>
          </div>
          <div className="content-center featured-books-indiv">
            <Link href='/'>
              <a>
                <img src="http://books.google.com/books/content?id=6WbaCwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api" alt=""/>
              </a>
            </Link>
            <div className="content-center books-desc">
              <Link href='/'>
                <a className='book-title'>
                  Samples
                </a>
              </Link>
              <Link href='/'>
                <a className='book-author'>
                  Scott Hawkins
                </a>
              </Link>
            </div>
          </div>
          <div className="content-center featured-books-indiv">
            <Link href='/'>
              <a>
                <img src="http://books.google.com/books/content?id=6WbaCwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api" alt=""/>
              </a>
            </Link>
            <div className="content-center books-desc">
              <Link href='/'>
                <a className='book-title'>
                  Samples
                </a>
              </Link>
              <Link href='/'>
                <a className='book-author'>
                  Scott Hawkins
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div> */}


      



    </div>
  )
}

export default Books
