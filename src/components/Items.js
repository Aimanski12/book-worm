import React from 'react'

function Items(props) {
  let a = props.items.map(item =>{
    return {
      id: item.id,
      title: item.volumeInfo.title ? item.volumeInfo.title : 'wala title',
      author: item.volumeInfo.authors ? item.volumeInfo.authors : 'walay author',
      thumbnail: item.volumeInfo.imageLinks ? item.volumeInfo.imageLinks.thumbnail : 'way picture'
    }
  })

  console.log(a)
  const authors = (lists) => {
    return lists.map((list, i) => {
      return (<span key={i}>{list}</span>)
    })
  }


  const books = props.items.map((item, i) =>{
    // console.log(item)
    return (
      <div className="book" key={i}>
        <img src={item.volumeInfo.imageLinks ? item.volumeInfo.imageLinks.thumbnail : ''} alt=""/>
          <span>{item.volumeInfo.title}</span>
          {item.volumeInfo.authors ? authors(item.volumeInfo.authors) : 'nnnnnnnn'}
          {/* <span>Rating {item.volumeInfo.averageRating ? 
            item.volumeInfo.averageRating : 0}</span> */}
      </div>
    )
  })

  // books()


  return (
    // <div className="book">
    <>
      {books} </>
      // {/* <img src="http://books.google.com/books/content?id=puVqDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api" alt=""/>
      // <span>This is a title</span>
      // <span>by: Aiman ADlawan</span>
      // <span>by: Aiman Adlawan</span>
      // <span>Rating 7.3</span> */}
    // </div>
  )
}

export default Items
