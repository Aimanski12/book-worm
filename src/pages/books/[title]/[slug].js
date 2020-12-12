import React, {useEffect, useState} from 'react'
import {Helpers} from '../../../utils/common/helpers'
import {useRouter} from 'next/router'

function Samp() {
  const [books, setBooks] = useState({
    isSet: false,
    book: {}
  })
  const router = useRouter()

  useEffect(() => {
    if(Object.keys(router.query).length != 0) {
      const title = router.query.title.split('-').join(' ')
      const author = router.query.slug.split('-').join(' ')
      const params = `q=${title}+inauthor:${author}`;
      if(!books.isSet) {
        (async function (){
          const data = await fetchData(params, 1, 40)
          if(data.items) {
            setBooks({ isSet: true, book: data.items })
          } else {
            setBooks({ isSet: true, book: {} })
          }
        })()
      }
    }
  })


  const showbooks = () => {
    if(Object.keys(books.book).length != 0) {
    return books.book.map((l, i) => {
      console.log({
        id: l.id, 
        isbn: l.volumeInfo.industryIdentifiers ? l.volumeInfo.industryIdentifiers[0].identifier : 'wala man',
        image: l.volumeInfo.imageLinks ? l.volumeInfo.imageLinks.thumbnail : 'no retrato'
      })
      return (<div className='content-center found-wrapper' key={i}>
        <img src={l.volumeInfo.imageLinks ? l.volumeInfo.imageLinks.thumbnail : ''} alt=""/>
          <span>{Helpers.sliceText(l.volumeInfo.title, 25)}</span>
          <span>{l.volumeInfo.authors ? l.volumeInfo.authors[0] : ''}</span>
        </div> )
    })
    } else {
      return <h1>No books found</h1>
    }
  }



  return (
    <div className="found">
      {showbooks()}
    </div>
  )
}

export default Samp










const fetchData = async (params, page, limit) => {
  // api key needed for the external api
  // const API_Key = `&key=AIzaSyCX1kIt4dHXByRj7Zw3PlElWq2SZJvrg4A`
  // const API_Key = `&key=AIzaSyDJKC1rdk4cCMfEzR0PIao0ftFas__0zo4`
  const API_Key = `&key=AIzaSyDJSQrDm_X_c-xiU49fKPrnY3Kn5bjqDBM`

  // google books api url
  const googleapi = 'https://www.googleapis.com/books/v1/volumes?'
  // additional parameters
  const addparams = `&maxResults=${limit}&orderBy=newest&prettyPrint=true`

  // combine the url 
  let url;

  if (page) {
    url = `${googleapi}${params}${addparams}&startIndex=${page}${API_Key}`
  } else {
    url = `${googleapi}${params}${API_Key}`
  }


  // fetch data using the GET method
  const result = await fetch(url, {
    method: 'GET',
    headers: {
      'Accept': 'application/json'
    }
  })

  // return data in JSON Format
  const data = await result.json()
  return data
}



