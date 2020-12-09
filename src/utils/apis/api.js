
const getparams = (obj) => {
  switch(obj.url) {
    case 'query': return `q="${obj.name.toLowerCase()}"`
    case 'cat': return `q=subject:"${obj.name.toLowerCase()}"`
    case 'author': return `q=inauthor:"${obj.name.toLowerCase()}"`
  }
}


export const APIRequest = (function(){
  // function to get the books according to 
  // category (fiction, non-fic, category, textbooks)
  const _getBooks = async (obj, page) => {
    // get the parameters according to query or category
    const params = getparams(obj[0])
    // fetch data from the function
    const data = await fetchData(params, page, 24)
    // sort and return
    return {
      name: obj[0],
      total: data.totalItems,
      books: data.items
    }
  }

  // function to add more books from the 
  // pagination when the buttons are clicked
  const _addBooks = async (obj, page) => {
    // get the parameters according to query or category
    const params = getparams(obj)
    // fetch data from the function
    const data = await fetchData(params, page, 24)
    // sort and return
    return {
      total: data.totalItems,
      books: data.items
    }
  }

  // this function will fetch for
  // recommended book from the selected books
  const _getRecommended = async (obj) => {
    // check for the parameters
    const params = getparams(obj)
    // fetch data
    const data = await fetchData(params, 1, 20)
    // return data
    return data.items
  }

  // function to get books by authors name
  const _getAuthor = async (obj) => {
    const params = getparams(obj)
    const data = await fetchData(params, 1, 25)
    return {
      books: data.items,
      total: data.totalItems
    }
  }

  return {
    getBooks(obj, page){
      return _getBooks(obj, page)
    }, 
    addBooks(obj, page) {
      return _addBooks(obj, page)
    },
    getRecommended(obj) {  
      return _getRecommended(obj)
    },
    getAuthor(obj){
      return _getAuthor(obj)
    }
  }
})()


const fetchData = async (params, page, limit) => {
  // api key needed for the external api
  const API_Key = `&key=AIzaSyCX1kIt4dHXByRj7Zw3PlElWq2SZJvrg4A`
  // google books api url
  const googleapi = 'https://www.googleapis.com/books/v1/volumes?'
  // additional parameters
  const addparams = `&maxResults=${limit}&orderBy=newest&prettyPrint=true`

  // combine the url 
  let url = `${googleapi}${params}${addparams}&startIndex=${page}${API_Key}`
  
  // fetch data using the GET method
  const result = await fetch(url, {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  })
  
  // return data in JSON Format
  const data = await result.json()
  return data
}
