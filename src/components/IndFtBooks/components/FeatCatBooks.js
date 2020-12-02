import React, {Fragment} from 'react'
import Link from 'next/link'
import FeatCategoryBooks from '../../Books/FeatCatBook'

function FeatCatBooks(props) {
  const books = props.ftcatbook.map((book, i) => {
    return (
      <Fragment key={i}>
        <div className="featured-cat-books-wrapper">
          <div className="content-center featured-cat-book-header text-2">
            <span>{book.name}</span>
            <Link href={`/${props.book.toLowerCase()}/[slug]`}
              as={`/${props.book.toLowerCase()}/${book.link}`}>
              <a>View All</a>
            </Link>
          </div>
        </div>

        <div className="featured-cat-books-list-cont">
          <div className="content-center featured-cat-books-list-wrapper text-2">
            <FeatCategoryBooks 
              books={book.books}/>
          </div>
        </div>
      </Fragment>
    )
  })

  return (
    <div className="featured-cat-books">
      <div className="content-center featured-cat-books-title text-2">
        <span>{`Featured ${props.book} Books of the day`}</span>
      </div>
     {books}
    </div>
  )
}

export default FeatCatBooks
