/**
 * Composition
Create a Library class with a property books which is an array of book objects.
Each book object should have properties title, author, and year.
Add methods to the Library class to add a book, remove a book, and list all books.
 */

class Library {
  constructor([...book]) {
    this.books = [...book];
  }

  list() {
    console.log(this.books);
  }
  listNames() {
    this.books.forEach((element) => {
      console.log(element.name);
    });
  }
  addBook(bookObj) {
    this.books.push(bookObj);
  }
  deleteByName(nameToDelete) {
    let bookToDelete = this.books.findIndex((el) => (el.name = nameToDelete));
    this.books.splice(bookToDelete, 1);
  }
}

const booksArr = [
  { name: "Witcher", author: "Sapkowski" },
  { name: "The death at the golf field", author: "Christie" },
];
const newBook = { name: "Cinder", author: "Meyer" };
const nameToDelete = "Witcher";

const lib = new Library(booksArr);

lib.list();
lib.listNames();

lib.addBook(newBook);
lib.list();

lib.deleteByName(newBook);
lib.list();
