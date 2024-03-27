

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


const getWishListBooks = () =>{
  const storedWishListBooks = localStorage.getItem('wishlist-books');
  if(storedWishListBooks){
    return JSON.parse(storedWishListBooks);
  }
  return [];
}


const saveWishListBooks = id =>{
  const storedWishListBooks = getWishListBooks();
  const ifExist = storedWishListBooks.find(bookId => bookId === id);
  if(ifExist === id){
    
    return []
  }
  else if(getReadBooks.id === id){
      return []
  }
  else{
    storedWishListBooks.push(id);
    localStorage.setItem('wishlist-books',JSON.stringify(storedWishListBooks))
  }
   
  }




export {saveReadBooks,getReadBooks,getWishListBooks,saveWishListBooks}