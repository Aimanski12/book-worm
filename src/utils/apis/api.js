import fiction from '../data/fiction.json'
import nonfiction from '../data/nonfiction.json'
import category from '../data/categories.json'
import text from '../data/textbook.json'
import navs from '../data/navs.json'
export const APIRequest = (function(){

  const _getData = async (book, page) => {
    const data = await fetchData(book, page)
    console.log(data)

    // console.log(text)

    data.items.map(d =>{
      // console.log(d.volumeInfo.title)
      if (d.id === 'kPTvAwAAQBAJ') {
        console.log(d)
      }
    })
    return data
  }


  return {
    getData(book, page){
      return _getData(book, page)
    }
  }

})()



const fetchData = async (book, page) => {

  // console.log(z.sort())

  // console.log(b)

  const API_Key = `AIzaSyCX1kIt4dHXByRj7Zw3PlElWq2SZJvrg4A`
  let url = `https://www.googleapis.com/books/v1/volumes?q=${'asian politics'}&maxResults=40&orderBy=newest&prettyPrint=true&startIndex=81&key=${API_Key}`



  url = `https://www.googleapis.com/books/v1/volumes?q=${book}&maxResults=40&prettyPrint=true&key=${API_Key}&startIndex=${page}`

  // 
  // url = `https://www.googleapis.com/books/v1/volumes?q=intitle:'fables'&maxResults=40&orderBy=newest&prettyPrint=true&startIndex=321&key=${API_Key}`


  // authors
  // url = `https://www.googleapis.com/books/v1/volumes?q=inauthor:"john grisham"&maxResults=40&orderBy=newest&prettyPrint=true&startIndex=321&key=${API_Key}`

  // category / genre
  url = `https://www.googleapis.com/books/v1/volumes?q=subject:"${book}"&maxResults=40&orderBy=newest&prettyPrint=true&key=${API_Key}&startIndex=${page}`

  // url = `https://www.googleapis.com/books/v1/volumes?q=${'best life'}&printType=magazines&key=${API_Key}&startIndex=${page}&maxResults=40&startIndex=41&orderBy=newest`                                  
  // ebook
  // url = `https://www.googleapis.com/books/v1/volumes?q="math"&maxResults=40&orderBy=newest&key=${API_Key}&startIndex=1&filter=ebooks`



// url = 'https://openlibrary.org/subjects/love.json?details=true'
// url = 'https://openlibrary.org/subjects/love.json?offest=1&limit=50'

// url = 'http://barnesandnobles.herokuapp.com/api/'

  const result = await fetch(url, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      // 'Authorization': API_Key
    },
  })
  
  const data = await result.json()
  // const a = data.items.map(b => {
  //   if (b.volumeInfo.categories) {
  //     // return b.volumeInfo.categories
  //     return {category: b.volumeInfo.categories, title: b.volumeInfo.title}
  //   } else {
  //     return null
  //   }
  // })

  // console.log(a)

  
  return data

}
