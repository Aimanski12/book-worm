import React, {useState} from 'react'
import Svg from '../../Svg/index'
import {JSON} from '../../../utils/data'
import {Helpers} from '../../../utils/common/helpers'

function BookDay() {
  const [current, setSlide] = useState(0)

  const booklist = JSON.books('bk-daily')

  const books = booklist.map((book, i) => {
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
              <span className='author'>Jessica Khoury</span>
              <p>{Helpers.sliceText(book.desc, 140)}</p>
              <button className='text-1'>View Details</button>
            </div>
          </div>

        </div>
      </div>
    )
  })

  const shift = (scrl) =>{
    const b = document.querySelectorAll('.book-of-the-day')
    if(scrl === 'left') {
      if(current <= 0){
        Helpers.slideBooks(b[b.length-1], b[current])
        setSlide(b.length-1)
      } else {
        Helpers.slideBooks(b[current-1], b[current])
        setSlide(current-1)
      }
    } else {
      if(current >= b.length-1) {
        Helpers.slideBooks(b[0], b[current])
        setSlide(0)
      } else {
        Helpers.slideBooks(b[current+1], b[current])
        setSlide(current+1)
      }
    }
  }

  return (

    <div className='book-of-the-day-wrapper'>
      <div className='content-center book-of-the-day-title'>
        <span className='text-1'>Books of the day</span>
      </div>


      <div className="book-of-the-day-container">

        <span 
          className='chevleft'
          onClick={()=>shift('left')}>
          <Svg svg='chevleft'/>
        </span>
        <span 
          className='chevright'
          onClick={()=>shift('right')}>
          <Svg svg='chevright'/>
        </span>

        {books}

      </div> 
    </div>
  )
}

export default BookDay
