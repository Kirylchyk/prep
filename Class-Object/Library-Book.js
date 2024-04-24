class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }

    getDetails() {
        return `${this.title} by ${this.author}, ${this.pages} pages`;
    }
}

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        this.books.push(book);
    }

    removeBook(title) {
        this.books = this.books.filter(book => book.title !== title);
    }

    listBooks() {
        if (this.books.length === 0) {
            console.log("No books in the library.");
        } else {
            console.log("Books in the library:");
            this.books.forEach(book => console.log(book.getDetails()));
        }
    }
}

// Create a new library
const myLibrary = new Library("Main Street Library");

// Create some books
const book1 = new Book("Harry Potter and the Sorcerer's Stone", "J.K. Rowling", 309);
const book2 = new Book("1984", "George Orwell", 328);

// Add books to the library
myLibrary.addBook(book1);
myLibrary.addBook(book2);

// List all books
myLibrary.listBooks();

// Remove a book and list again
myLibrary.removeBook("1984");
myLibrary.listBooks();