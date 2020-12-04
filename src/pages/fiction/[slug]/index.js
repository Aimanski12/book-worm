import React from 'react'
import {useRouter} from 'next/router'
import Head from 'next/head'
import Header from '../../../components/Header/Header'
import Footer from '../../../components/Footer/Footer'
import IndBkSel from '../../../components/IndBkSel/IndBkSel'
import {JSON} from '../../../utils/data'
import {Helpers} from '../../../utils/common/helpers'
import {APIRequest} from '../../../utils/apis/api'

export default function Fiction({data}) {
  const router = useRouter()
  
  if(!data){
    router.replace('/404', window.location.pathname)
  } else {
    console.log(data)
  }





  return (
    <div className='content-center main-container'>
      <Head>
        <title>Book-Worm | Fiction | {data.name}</title>
        <link rel="icon" href="/images/book-worm-small-logo.ico" />
      </Head>

      <main className='content-center page-container'>
        <Header booksoftheday={false}/>
          <IndBkSel
            book='Fiction'
            cattitle={data.name}
            menus={data.menulists}
            books={data.books}
            total={data.total}/>
        <Footer />
      </main>
    </div>
  )
}


Fiction.getInitialProps = async (ctx) => {
  const {query} = ctx
  let data;
  const menulists = JSON.links('fiction')
  const linkdata = Helpers.checkIfExists(query.slug, menulists)

  if (!linkdata) {
    data = false
  } else {
    const books = await APIRequest.getBooks(linkdata, 1)
    data = { ...books, menulists }
  }
  return { data }
}