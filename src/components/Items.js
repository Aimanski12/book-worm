import React from 'react'
import fiction from '../utils/data/fictionlists.json'
import nonFic from '../utils/data/nonfictionlists.json'
import category from '../utils/data/categorlists.json'
import textbooks from '../utils/data/textbooklists.json'


function Items(props) {

  let author = (lists) => {
    // console.log(lists)
    return lists.map((list, i) => {
      return (
        <span className="author" key={i}>{list}</span>
      )
    })
  }

  let items = (lists) => {
    return lists.map((list, i) => {
      return (
        <div className="book" key={i}>
          <img src={list.thumbnail} alt=""/>
          <span className="title">{list.title}</span>
          {author(list.authors)}
        </div>    
      )
    })
  }

const booklist = (books) => {
  return (
    books.map((book, i) => {
      return (
        <div className="top" key={i}>
          <h3>{book.name}</h3>
          {items(book.books)}
        </div>
      )
    })
  )
}

  
let books = () => {
  return  (
    category.map((item , i) => {
      return booklist(item)
    })
  )
}





  return (
    <div>
      {books()}
    </div>
  )
}

export default Items
