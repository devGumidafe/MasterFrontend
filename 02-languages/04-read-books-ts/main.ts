// TYPESCRIPT
class Book {
    public title: String;
    public isRead: Boolean;
}

class CheckBook {
    public static isBookRead(bookList: Book[], title: string): boolean {
        return bookList.some((book) => book.title === title && book.isRead);
    }
}

const books: Book[] = [
    { title: "Harry Potter y la piedra filosofal", isRead: true },
    { title: "Canción de hielo y fuego", isRead: false },
    { title: "Devastación", isRead: true },
    { title: "Hijos del dios binario", isRead: true },
    { title: "Código Limpio", isRead: false },
];


console.log(CheckBook.isBookRead(books, "Devastación")); // true
console.log(CheckBook.isBookRead(books, "Canción de hielo y fuego")); // false
console.log(CheckBook.isBookRead(books, "Los Pilares de la Tierra")); // false
console.log(CheckBook.isBookRead(books, "Hijos del dios binario")); // true