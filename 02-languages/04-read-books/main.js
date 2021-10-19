// READ BOOK
const books = [
  { title: "Harry Potter y la piedra filosofal", isRead: true },
  { title: "Canción de hielo y fuego", isRead: false },
  { title: "Devastación", isRead: true },
  { title: "Hijos del dios binario", isRead: true },
  { title: "Código Limpio", isRead: false },
];

const isBookRead = (bookList, title) => {
  let result = false;

  bookList.map((book) => {
    if (book.title === title) result = book.isRead;
  });

  return result;
};

console.log(isBookRead(books, "Devastación")); // true
console.log(isBookRead(books, "Canción de hielo y fuego")); // false
console.log(isBookRead(books, "Los Pilares de la Tierra")); // false
console.log(isBookRead(books, "Hijos del dios binario")); // true
