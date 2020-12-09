import React from 'react'
import Svg from '../Svg'

function BookDetails(props) {
  const bookdata = props.book

  const authors = (lists) => {
    return lists.map((list, i) => {
      return <li key={i}>{list}</li>
    })
  }

  return (
    <div className="book-details text-2">
      <span className='book-details-title'>Book Details</span>
      <div className="content-center book-details-wrapper">
        <img src={bookdata.volumeInfo.imageLinks ?
          bookdata.volumeInfo.imageLinks.thumbnail : 
            '/images/book-worm.svg'} 
          alt={`${bookdata.volumeInfo.title} book cover`}/>
        <div className="content-center book-selected-details-wrapper">
          <span className='book-title'>{bookdata.volumeInfo.title}</span>
          <div className="book-selected-details-authors">
            <span>Listed Authors:</span>
            <ul>{bookdata.volumeInfo.authors ? 
              authors(bookdata.volumeInfo.authors) : 'No Author Given'}
            </ul>
          </div>

          <div className="content-center book-selected-ratings">
            <span>Ratings: </span>
            <span>{bookdata.volumeInfo.averageRating ?
              bookdata.volumeInfo.averageRating : 0 } 
              <Svg svg={'star'}/></span>
          </div>

            <p className="book-desc">{bookdata.volumeInfo.description ? 
              bookdata.volumeInfo.description : 'No book description given.'}</p>

          <div className="content-center book-total-page">
            <span>Page Count: </span>
            <span>{bookdata.volumeInfo.pageCount ? 
              `${bookdata.volumeInfo.pageCount} p.` : 'Not provided.'} </span>
          </div>

          <div className="content-center book-released-date">
            <span>Released Date: </span>
            <span>{bookdata.volumeInfo.publishedDate ? 
              bookdata.volumeInfo.publishedDate : 'Not provided'}</span>
          </div>

          <div className="content-center book-released-date">
            <span>Book Version: </span>
            <span>{bookdata.volumeInfo.contentVersion ? 
              bookdata.volumeInfo.contentVersion : 'Not provided'}</span>
          </div>

          <div className="content-center book-publisher">
            <span>Publisher: </span>
            <span>{bookdata.volumeInfo.publisher ? 
              bookdata.volumeInfo.publisher : 'Not provided'}</span>
          </div>

          <div className="content-center book-isbn">
            <span>ISBN Number: </span>
            <span>{bookdata.volumeInfo.industryIdentifiers ? 
              bookdata.volumeInfo.industryIdentifiers[0].identifier : 'Not provided'}</span>
          </div>

          <div className="content-center book-idnum">
            <span>Book ID: </span>
            <span>{bookdata.id ? 
              bookdata.id : 'Not provided'}</span>
          </div>

        </div>
      </div>
    </div>
  )
}

export default BookDetails
