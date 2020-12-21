import React from 'react'
import Head from 'next/head'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import FeaturedBooks from '../components/FeaturedBooks/FeaturedBooks'
import {JSON} from '../utils/data'
import {SETFIREBASE} from '../utils/common/firebase'

export default function Home() {
  // get book data
  const books = JSON.getData('daily')
  SETFIREBASE.checkStorage('home')

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
