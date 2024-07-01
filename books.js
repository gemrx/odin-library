const myLibrary = [];

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }

    getInfo() {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
    }
}

const harryPotter = new Book('Harry Potter and the Sorcerer\'s Stone', 'J.K. Rowling', 309, 'not read yet');
console.log(harryPotter.getInfo());


function addBookToLibrary(title, author) {

}