import React, {useEffect, useState} from 'react'

import Head from 'next/head'
import {APIRequest} from '../utils/apis/api'
import Items from '../components/Items'

export default function Home() {
  const [data, setData] = useState({
    isSet: true,
    books: {}
  })


  useEffect(() => {
    (async function(){
      const books = await APIRequest.getData('auditing', 1)
      // books.items.map(i => {
      //   if (i.id === "5vxNDQAAQBAJ") {
      //     console.log(i)
      //   }
      // })
      
    })()
  })


  return (
    <div className='container'>
      <Head>
        <title>Book-Worm | Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='container'>
        <Items/>
      </main>

    </div>
  )
}
