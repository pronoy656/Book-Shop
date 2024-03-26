

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
  const storedWishListBooks = getReadBooks();
  const ifExist = storedWishListBooks.find(bookId => bookId === id);
  if(!ifExist){
     storedWishListBooks.push(id);
    localStorage.setItem('wishlist-books',JSON.stringify(storedWishListBooks))
  }
  // else{
  //  toast.alert ('cann not add')
  // }
 
  }




export {saveReadBooks,getReadBooks,getWishListBooks,saveWishListBooks}