let newBookBtn = document.querySelector('#new-book-btn')
let newBookForm = document.querySelector('.full-screen')
let titleInput = document.querySelector('#title')
let authorInput = document.querySelector('#author')
let pagesInput = document.querySelector('#pages')
let readInput = document.querySelector('#read')
let library = []

class Book {
    constructor(title, author, pages, read) {
        this.title = title    
        this.author = author
        this.pages = pages
        this.read = read
    }
}


newBookBtn.addEventListener("click", () => {
    newBookForm.style.display = 'flex'
});

closeFormBtn = document.querySelector('.close-btn')
closeFormBtn.addEventListener('click', (btn) => {
    newBookForm.style.display = 'none'
    titleInput.value = ''
    authorInput.value = ''
    pagesInput.value = ''
    readInput.value = ''
})

submitBookBtn = document.querySelector('#submitNewBook')
submitBookBtn.addEventListener('click', () => {
    library.push(new Book(titleInput.value, authorInput.value, pagesInput.value, readInput.value))
    newBookForm.style.display = 'none'
    titleInput.value = ''
    authorInput.value = ''
    pagesInput.value = ''
    readInput.value = ''
    createCards()
    
});

library.push(new Book('Thursday Murder Club', 'Richard Osmond', 385, 'Read'))
library.push(new Book('The Hobbit', 'JRR Tolkien', 560, 'Not Read'))
library.push(new Book('Sapiens', 'Yuval Noah Harari', 443, 'Not Read'))
createCards()


function createCards() {
    console.table(library )
    document.querySelector('.cards').innerHTML = ''
        library.forEach((book, i) => {
            let newCard = document.createElement('div')
            newCard.classList = 'card'
            let topCardSection = document.createElement('div')
            topCardSection.classList = 'cardTopHalf'    
            let title = document.createElement('p')
            title.textContent = `\"${book.title}\"`
            let author = document.createElement('p')
            author.textContent = book.author
            let pages = document.createElement('p')
            pages.textContent = book.pages + ' pages'
            topCardSection.append(title, author, pages)
            let btmCardSection = document.createElement('div')
            btmCardSection.classList = 'cardBtmHalf'
            let read = document.createElement('button')
            read.textContent = book.read
            read.classList = book.read == 'Read' ? 'read-btn' : 'not-read-btn'
            read.id = 'read' + i
            let del = document.createElement('button')
            del.id = 'del' + i
            del.textContent = 'Delete'
            del.classList = 'del-btn'
            btmCardSection.append(read, del)
            newCard.append(topCardSection, btmCardSection)
            document.querySelector('.cards').appendChild(newCard)
        })
    addDeleteListeners();
    addReadListeners();
    addUnReadListeners();
}


function addDeleteListeners() {
    deleteBtns = document.querySelectorAll('.del-btn')
    deleteBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
            let index = btn.id.substring(btn.id.length - 1);
            library.splice(index, 1)
            createCards();
        })
    });    
}

function addReadListeners() {
    readBtns = document.querySelectorAll('.read-btn')
    readBtns.forEach((btn) => {
        btn.addEventListener('click', (btn) => {
            let index = btn.target.id.substring(btn.target.id.length - 1);
            library[index].read = 'Not Read'
            createCards();
        })
    })
}

function addUnReadListeners() {
    unReadBtns = document.querySelectorAll('.not-read-btn')
    unReadBtns.forEach((btn) => {
        btn.addEventListener('click', (btn) => {
            let index = btn.target.id.substring(btn.target.id.length - 1);
            library[index].read = 'Read'
            createCards();
        })
    })
}