const getReadBooks = () =>{
    const storedReadBooks = localStorage.getItem('read-books');
    if(storedReadBooks){
      return JSON.parse(storedReadBooks);
    }
    return [];
 }




const saveReadBooks = id =>{
const storedReadBooks = getReadBooks();
const ifExist = storedReadBooks.find(bookId => bookId === id);
if(!ifExist){
    storedReadBooks.push(id);
  localStorage.setItem('read-books',JSON.stringify(storedReadBooks))
}
}




export {saveReadBooks,getReadBooks}