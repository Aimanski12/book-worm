import React from 'react'
import FeatureTitle from './components/FeatureTitle'
import Books from './components/Books'
import fiction from '../../utils/data/nonfictionlists.json'

function FeaturedBooks() {
  let f = fiction[0]

  const featurebooks = f.map((book, i) => {
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
