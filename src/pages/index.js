import React, {useEffect, useState} from 'react'

import Head from 'next/head'
import {APIRequest} from '../utils/apis/api'
import Items from '../components/Items'

export default function Home() {
  const [data, setData] = useState({
    isSet: false,
    books: {}
  })


  useEffect(() => {
    (async function(){
      const books = await APIRequest.getData('economics', 1)
      if(!data.isSet){
        setData({
          isSet: true,
          books: books.items
        })
      }
    })()
  })


  return (
    <div className='container'>
      <Head>
        <title>Book-Worm | Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='container'>
        {
          data.isSet ? <Items items={data.books}/> : null
        }


        {/* <div className="book">
          <img src="http://books.google.com/books/content?id=puVqDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api" alt=""/>
          <span>This is a title</span>
          <span>by: Aiman ADlawan</span>
          <span>by: Aiman Adlawan</span>
          <span>Rating 7.3</span>
        </div> */}
      </main>

    </div>
  )
}
