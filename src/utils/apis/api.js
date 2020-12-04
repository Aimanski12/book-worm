
const getparams = (obj) => {
  // const query = 'q=asian'
  // const cat = 'subject:classics'
  // const title = `q=intitle:fables`
  // const isbn = `q=isbn:12345678945`
  // const author = `q=inauthor:john grisham`
  switch(obj.url) {
    case 'query': return `q="${obj.name.toLowerCase()}"`
    case 'cat': return `q=subject:"${obj.name.toLowerCase()}"`
  }
}


export const APIRequest = (function(){
  // function to get the books according to 
  // category (fiction, non-fic, category, textbooks)
  const _getBooks = async (obj, page) => {
    // get the parameters according to query or category
    const params = getparams(obj[0])
    // fetch data from the function
    const data = await fetchData(params, page)
    // sort and return
    return {
      name: obj[0],
      total: data.totalItems,
      books: data.items
    }
  }

  return {
    getBooks(obj, page){
      return _getBooks(obj, page)
    }
  }
})()





const fetchData = async (params, page) => {
  // api key needed for the external api
  const API_Key = `&key=AIzaSyCX1kIt4dHXByRj7Zw3PlElWq2SZJvrg4A`
  // google books api url
  const googleapi = 'https://www.googleapis.com/books/v1/volumes?'
  // additional parameters
  const addparams = '&maxResults=40&orderBy=newest&prettyPrint=true'

  // combine the url
  const url = `${googleapi}${params}${addparams}&startIndex=${page}${API_Key}`
  
  // fetch data using the GET method
  const result = await fetch(url, {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  })
  
  // return data in JSON Format
  const data = await result.json()
  return data
}

















// let url = `https://www.googleapis.com/books/v1/volumes?q=${'asian politics'}&maxResults=40&orderBy=newest&prettyPrint=true&startIndex=81&key=${API_Key}`

// url = `https://www.googleapis.com/books/v1/volumes?q=${book}&maxResults=40&prettyPrint=true&key=${API_Key}&startIndex=${page}`


// url = `https://www.googleapis.com/books/v1/volumes?q=subject:"${book}"&maxResults=40&orderBy=newest&prettyPrint=true&key=${API_Key}&startIndex=${page}`




// 
// url = `https://www.googleapis.com/books/v1/volumes?q=intitle:'fables'&maxResults=40&orderBy=newest&prettyPrint=true&startIndex=321&key=${API_Key}`


// authors
// url = `https://www.googleapis.com/books/v1/volumes?q=inauthor:"john grisham"&maxResults=40&orderBy=newest&prettyPrint=true&startIndex=321&key=${API_Key}`

// category / genre

// url = `https://www.googleapis.com/books/v1/volumes?q=${'best life'}&printType=magazines&key=${API_Key}&startIndex=${page}&maxResults=40&startIndex=41&orderBy=newest`                                  
// ebook
// url = `https://www.googleapis.com/books/v1/volumes?q="math"&maxResults=40&orderBy=newest&key=${API_Key}&startIndex=1&filter=ebooks`



// url = 'https://openlibrary.org/subjects/love.json?details=true'
// url = 'https://openlibrary.org/subjects/love.json?offest=1&limit=50'

// url = 'http://barnesandnobles.herokuapp.com/api/'