import React, {useEffect, useState} from 'react'

import Head from 'next/head'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import FeaturedBooks from '../components/FeaturedBooks/FeaturedBooks'


import {APIRequest} from '../utils/apis/api'
import Sample from '../components/sss'

export default function Home() {
  const [data, setData] = useState({
    isSet: false,
    books: {}
  })


  useEffect(() => {
    (async function(){
      const books = await APIRequest.getData('jews', 80)
      if(!data.isSet) {
        setData({
          isSet: true,
          books: books.items
        })
      }
      
    })()
  })

  return (
    <div className='content-center main-container'>
      <Head>
        <title>Book-Worm | Home</title>
        <link rel="icon" href="/images/book-worm-small-logo.ico" />
      </Head>

      <main className='content-center page-container'>
        <Header />
        <FeaturedBooks />
        <Footer />






      </main>
        {
          data.isSet ? <Sample books={data.books}/> : null
        }

      <div className="samp"></div>
     
    </div>
  )
}

 