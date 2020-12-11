import React from 'react'
import Head from 'next/head'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import FeaturedBooks from '../components/FeaturedBooks/FeaturedBooks'
import {JSON} from '../utils/data'


import text1 from '../utils/data/menulists/textbook.json'
import text2 from '../utils/data/featuredbooks/textbooklists.json'

export default function Home() {
  // get book data
  const books = JSON.getData('daily')

  let b = []
  const a = text2.map(x => {
    return x.map(y =>{
      return b.push(y.name)
    })
  })
  
  const menu = text1.map(a => {
    return a.name
  })

  const g = []
  for (let x = 0; x <b.length; x++){
    if(!menu.includes(b[x])){
      g.push(b[x])
    }
  }

  console.log(g.sort())



  return (
    <div className='content-center main-container'>
      <Head>
        <title>Book-Worm | Home</title>
        <link rel="icon" href="/images/book-worm-small-logo.ico" />
      </Head>

      <main className='content-center page-container'>
        <Header 
          booksoftheday={true}
          books={books.daily}/>
        <FeaturedBooks 
          books={books.featured}/>
        <Footer />
      </main>
    </div>
  )
}
