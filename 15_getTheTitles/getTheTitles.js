const getTheTitles = function(books) {
    return books.reduce((arr, book) => {
        arr.push(book.title);
        return arr;
    }, [])
};

const books = [
  {
    title: 'Book',
    author: 'Name'
  },
  {
    title: 'Book2',
    author: 'Name2'
  }
]

console.log(getTheTitles(books));
// Do not edit below this line
module.exports = getTheTitles;
