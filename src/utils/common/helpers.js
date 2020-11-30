
import gsap from 'gsap'

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
  const _sortAuthor = (lists) => {
    let counter = 0
    let authors = []

    for (let x = 0; x < lists.length; x++) {
      let l = lists[x].length
      if (counter < 19) {
        if ((counter + l) < 19) {
          if(lists.length <= 1) {
            authors.push(lists[x])
          } else {
            authors.push(`${lists[x]},`)
          }
          counter += l
        } else {
          authors.push(`${lists[x].substr(0, (19-counter))}..`)
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

  const _slideBooks = (a, b) => {
    b.style.display = 'none'
    b.style.opacity = 0
    a.style.display = 'block'
    gsap.to(a, {opacity: 1, duration: .35})
    
  }

  return {
    sliceText(text, n) {
      return _sliceText(text, n)
    },
    sortAuthor(lists) {
      return _sortAuthor(lists)
    }, 
    getDay() {
      return _getDay()
    },
    slideBooks (a, b) {
      return _slideBooks(a, b)
    }
  }

})()


const _now = () => {
  return new Date()
}