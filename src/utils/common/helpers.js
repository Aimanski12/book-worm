
import gsap from 'gsap'
import {JSON} from '../../utils/data/'

export const Helpers = (function (){

  // function to sort title string
  const _sliceText = (text, n) => {
    const length = text.length
    if(length > n) {
      return `${text.substr(0, n)}...`
    } else {
      return text
    }
  } 

  // function to sort authors lists
  const _sortAuthor = (lists, n) => {
    let counter = 0
    let authors = []

    for (let x = 0; x < lists.length; x++) {
      let l = lists[x].length
      if (counter < n) {
        if ((counter + l) < n) {
          if(lists.length <= 1) {
            authors.push(lists[x])
          } else {
            authors.push(`${lists[x]}, `)
          }
          counter += l
        } else {
          authors.push(`${lists[x].substr(0, (n-counter))}..`)
          counter += l
        }
      } 
    }
    return authors
  }

  // gets the day of the week
  // returns a numeric value
  const _getDay = () => {
    return _now().getDay()
  }

  // small animation function to 'slide animate'
  // books when arrow is clicked
  const _slideBooks = (a, b) => {
    b.style.display = 'none'
    b.style.opacity = 0
    a.style.display = 'block'
    // animate the slide
    gsap.to(a, {opacity: 1, duration: .35})
  }


  // function to check if the query value
  // exists in the listed array 
  // returns true or false
  const _checkIfExists = (str, lists) => {
    const val = lists.filter(list => {
      return list.link === str
    })

    if(Object.keys(val).length === 0){
      return false
    } else {
      return val
    }
  }

  return {
    sliceText(text, n) {
      return _sliceText(text, n)
    },
    sortAuthor(lists, n) {
      return _sortAuthor(lists, n)
    }, 
    getDay() {
      return _getDay()
    },
    slideBooks (a, b) {
      return _slideBooks(a, b)
    },
    checkIfExists(str, lists) {
      return _checkIfExists(str, lists)
    }
  }

})()


const _now = () => {
  return new Date()
}
