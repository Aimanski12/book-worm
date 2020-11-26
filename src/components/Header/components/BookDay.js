import React from 'react'
import Svg from '../../Svg/index'

function BookDay() {
  return (
    <div className='book-of-the-day'>
      <div className='content-center book-of-the-day-title'>
        <span className='text-1'>Books of the day</span>
      </div>
      <div className='book-of-the-day-cover'>
        <div className="book-cover-background"
          style={{'background': `url('http://books.google.com/books/content?id=5MRwDQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api') no-repeat center`,'backgroundSize': 'cover'}}></div>

        <span className='chevleft'>
          <Svg svg='chevleft'/>
        </span>
        <span className='chevright'>
          <Svg svg='chevright'/>
        </span>

        <div className="content-center book-of-the-day-desc text-1">
          <img src="http://books.google.com/books/content?id=5MRwDQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api" alt=""/>
          <div className='content-center book-of-the-day-desc-wrapper'>
            <h2>Kalahari</h2>
            <div className="ratings">
              <span>Ratings: 3.2</span>
              <Svg svg='star' />
            </div>
            <span className='author'>Jessica Khoury</span>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis nulla deleniti totam deserunt pariatur quia laboriosam non libero dolorem dignissimos!</p>
            <button className='text-1'>View Details</button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default BookDay
