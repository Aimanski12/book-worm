import React, {useEffect, useState} from 'react'

import Head from 'next/head'
import Header from '../components/Header/Header'

// import {APIRequest} from '../utils/apis/api'
// import Items from '../components/Items'

export default function Home() {
  const [data, setData] = useState({
    isSet: true,
    books: {}
  })


  useEffect(() => {
    (async function(){
      // const books = await APIRequest.getData('fantasy', 1)
      // books.items.map(i => {
      //   if (i.id === "5vxNDQAAQBAJ") {
      //     console.log(i)
      //   }
      // })
      
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
      </main>
     
    </div>
  )
}

