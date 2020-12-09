import React, {useEffect, useState} from 'react'
import {useRouter} from 'next/router'
import Head from 'next/head'
import Header from '../../../../components/Header/Header'
import Footer from '../../../../components/Footer/Footer'
import RecommendedBook from '../../../../components/Books/RecommendedBook'

import {APIRequest} from '../../../../utils/apis/api'

export default function Author() {
  const [books, setBooks] = useState({author: '', book: {}})
  const router = useRouter()

  useEffect(() => {
    const query = router.query.slug.split('-').join(' ')
    if(query != undefined){
      (async function(){
        const data = await getdata(query, 1)
        if(Object.keys(books.book).length === 0) {
          setBooks({
            author: query,
            total: data.total,
            book: data.books
          })
        } else {
          if(books.author != query) {
            setBooks({
              ...books,
              total: data.total,
              book: data.books
            })
          }
        }
      })()
    }
  })

  const getdata = async (query, page) => {
    return await APIRequest.getAuthor({
      url: 'author',
      name: query
    }, page)
  }

  const addbooks = async (val) => {
    const n = val * 25 - 25 + 1;
    const data = await getdata(books.author, n)
    setBooks({
      ...books,
      book: data.books
    })
    window.scrollTo(0, 0);
  }

  return (
    <div className='content-center main-container'>
      <Head>
        <title>Book-Worm | Book Author</title>
        <link rel="icon" href="/images/book-worm-small-logo.ico" />
      </Head>
      <main className='content-center page-container'>
        <Header booksoftheday={false}/>

        { Object.keys(books.book).length != 0 ? 
          <RecommendedBook 
            title={`${books.total} books related to this author`}
            total={books.total}
            click={(val)=> addbooks(val)}
            books={books.book}/> : null}
        <Footer />
      </main>
    </div>
  )
}

