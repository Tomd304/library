let newBookBtn = document.querySelector('#new-book-btn')
let newBookForm = document.querySelector('.full-screen')
let titleInput = document.querySelector('#title')
let authorInput = document.querySelector('#author')
let pagesInput = document.querySelector('#pages')
let readInput = document.querySelector('#read')
let library = []

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

function newBook(title, author, pages, read) {
    library.push(new Book(title, author, pages, read))
}



newBookBtn.addEventListener("click", () => {
    newBookForm.style.display = 'flex'
});


submitBookBtn = document.querySelector('#submitNewBook')
submitBookBtn.addEventListener('click', () => {
    newBook(titleInput.value, authorInput.value, pagesInput.value, readInput.value)
    newBookForm.style.display = 'none'
    titleInput.value = ''
    authorInput.value = ''
    pagesInput.value = ''
    readInput.value = ''
    console.table(library)
});

newBook('Thursday Murder Club', 'Richard Osmond', 385, 'Yes')
console.table(library)