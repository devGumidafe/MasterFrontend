// READ BOOK
const books = [
  { title: "Harry Potter y la piedra filosofal", isRead: true },
  { title: "Canción de hielo y fuego", isRead: false },
  { title: "Devastación", isRead: true },
  { title: "Hijos del dios binario", isRead: true },
  { title: "Código Limpio", isRead: false },
];

const isBookRead = (bookList, titleSearch) =>
  bookList.some(({title, isRead}) => title === titleSearch && isRead);

  
console.log(isBookRead(books, "Devastación")); // true
console.log(isBookRead(books, "Canción de hielo y fuego")); // false
console.log(isBookRead(books, "Los Pilares de la Tierra")); // false
console.log(isBookRead(books, "Hijos del dios binario")); // true
