import React, {useState} from 'react'
import {useRouter} from 'next/router'
import {Helpers} from '../../../utils/common/helpers'
import Svg from '../../Svg/index'

function TopNav() {
  const router = useRouter()
  const [value, setValue] = useState('')

  const search = (e) => {
    if(e === 'Enter' || e === 'click') {
      if (!/^\s*$/.test(value)){
        router.replace('/search/title-and-author/[slug]', 
          `/search/title-and-author/${Helpers.setTextToUrl(value)}`)

      }
    }
  }

  return (
    <div className="content-center navbar-left">
      <div className='logo'>
        <a href="/">
          <img src="/images/navbar-logo.png" alt=""/>
        </a>
      </div>
      <div className="content-center navbar-input">
        <input
          type="text"
          value={value}
          onChange={(e)=> setValue(e.target.value)}
          onKeyPress={(e)=> search(e.code)}
          className='text-1 font-a6'
          placeholder="Enter book title or author"/>
        <button 
          onClick={()=> search('click')}
          className='content-center'>
          <span>
            <Svg svg='search'/>
          </span>
        </button>
      </div>
    </div>
  )
}

export default TopNav
