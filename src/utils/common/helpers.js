
export const Helpers = (function (){

  // function to sort title string
  const _sortBookTitle = (text) => {
    const length = text.length
    if(length > 17) {
      return `${text.substr(0, 17)}...`
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

  return {
    sortBookTitle(text) {
      return _sortBookTitle(text)
    },
    sortAuthor(lists) {
      return _sortAuthor(lists)
    }
  }

})()