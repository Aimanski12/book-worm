import React from 'react'

function sss(props) {
  let books = props.books.map(l => {
    return {
      id: l.id,
      title: l.volumeInfo.title,
      author: l.volumeInfo.authors,
      rating: l.volumeInfo.averageRating ? l.volumeInfo.averageRating : 'wala',
      image: l.volumeInfo.imageLinks ? l.volumeInfo.imageLinks.thumbnail :  'wala',
      descrption: l.volumeInfo.description
    }
  })
  console.log(books)
  let samp = props.books.map((x, i) => {
    return (
      <div className="sample" key={i}>
        {
          x.volumeInfo.imageLinks ? 
          <img src={x.volumeInfo.imageLinks.thumbnail} alt=""/> : 'no image'
        }
        <span>{x.volumeInfo.averageRating ? x.volumeInfo.averageRating : 'none'}</span>
        <span>{x.volumeInfo.title}</span>
      </div>

    )
  })


  return (
    <div className='sampa'>
      {samp}
    </div>
  )
}

export default sss
