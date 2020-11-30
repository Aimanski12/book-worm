
// menu lists
import commonmenulists from './menulists/common.json'
import categorymenu from './menulists/categories.json'
import fictionmenulists from './menulists/fiction.json'
import nonfictionmenulists from './menulists/nonfiction.json'
import textbookmenulists from './menulists/textbook.json'

// featured books 
import dailylists from './featuredbooks/daily.json'
import categorylists from './featuredbooks/categorylists.json'
import fictionlists from './featuredbooks/fictionlists.json'
import nonfictionlist from './featuredbooks/nonfictionlists.json'
import textbooklists from './featuredbooks/textbooklists.json'

// books of the day
import dailybooks from './booksoftheday/daily.json'

// helper functions
import {Helpers} from '../common/helpers'

export const JSON = (function(){

  // function to extract data from the
  // json lists of books and menu
  const _data = (str) => {
    switch (str){
      case 'ftrlinks': return commonmenulists.footerlinks;
      case 'ftrnavs': return commonmenulists.footernavs;
      case 'mininavs': return commonmenulists.mininavs;
      case 'midmenu': return commonmenulists.midmenu;
      
      case 'ft-daily': return dailylists;

      case 'bk-daily': return dailybooks
    }
  }

  // get books according to the string provided
  const _books = (str) => {
    const day = Helpers.getDay()
    const bks = _data(str)
    return bks[day] 
  }

  return {
    data(str) {
      return _data(str)
    }, 
    books(str) {
      return _books(str)
    }
  }
})()


