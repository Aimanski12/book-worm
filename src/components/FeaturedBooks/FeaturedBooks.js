import React from 'react'
import FeatureTitle from './components/FeatureTitle'
import Books from './components/Books'
import {JSON} from '../../utils/data'


function FeaturedBooks() {

  const books = JSON.books('ft-daily')

  const featurebooks = books.map((book, i) => {
    return (<Books books={book} key={i}/>)
  })

  return (
    <div className='featured-books'>
      <FeatureTitle />
      {featurebooks}
    </div>
  )
}

export default FeaturedBooks
