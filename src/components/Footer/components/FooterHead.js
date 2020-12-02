import React from 'react'
import Link  from 'next/link'

function FooterHead() {
  return (
    <div className="content-center footer-header">
      <Link href="/">
        <a>
          <img src="/images/navbar-logo.png" alt="book worm logo"/>
        </a>
      </Link>
      <Link href="/">
        <a>
          <img src="/images/google-books.png" alt="google books logo"/>
        </a>
      </Link>
    </div>
  )
}

export default FooterHead
