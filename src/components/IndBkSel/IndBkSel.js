import React from 'react'
import MenuBreadCrumb from './components/MenuBreadCrumb'
import SideNav from './components/SideNavs'


export default function IndBkSel(props) {
  
  return (
    <div className="ind-ft-books">
      <MenuBreadCrumb 
        cattitle={props.cattitle}
        menu={props.book}/>
      <div className="content-center ind-ft-books-wrapper">
        <SideNav 
          menus={props.menus}
          title={`${props.book}`}/>

        <div className='indvl-book-sel'>

          <div className="indvl-book-sel-wrapper text-2">
            <span className='title'>{`${props.cattitle.name} Books`}</span>


            <div className="content-center indvl-book-sel-desc">
              <p class='total-books'>{props.total} <span>Books</span></p>
              <div className='content-center grid-btn'>
                <div className="content-center btn-grid">
                  <span>
                    <img src="/images/grid-g.svg" alt="grid icon"/>
                    Grid
                  </span>
                </div>
                <div className="content-center btn-list">
                  <span>
                    <img src="/images/list-y.svg" alt="list icon"/>
                    List
                  </span>
                </div>
              </div>
            </div>


          </div>



        </div>
      </div>
    </div>
  )
}


