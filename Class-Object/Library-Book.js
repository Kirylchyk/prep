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
        // Find the index of the book with the given title using a traditional function
        const index = this.books.findIndex(function(book) {
            return book.title === title;
        });

        // If the book is found (index is not -1), remove it from the array
        if (index !== -1) {
            this.books.splice(index, 1);  // Remove the book at the found index by using splice
            console.log(`Book with title '${title}' has been removed.`);
        } else {
            console.log(`No book found with title '${title}'.`);
        }
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
console.log(book2.getDetails());

// Add books to the library
myLibrary.addBook(book1);
myLibrary.addBook(book2);

// List all books
myLibrary.listBooks();

// Remove a book and list again
myLibrary.removeBook("1984");
myLibrary.listBooks();