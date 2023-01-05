import { Category } from './enums';
import { Book, Logger, Author, Librarian, TOptions, Magazine } from './interfaces';
import { UL, ReferenceItem, RefBook /*, Library */, Shelf } from './classes';
import { PersonBook, BookRequiredFields, UpdatedBook, СreateCustomerFunctionType } from './types';
import {
    getAllBooks,
    logFirstAvailable,
    getBookTitlesByCategory,
    logBookTitles,
    getBookAuthorByIndex,
    calcTotalPages,
    createCustomerID,
    createCustomer,
    getBookByID,
    checkoutBooks,
    assertsStringValue,
    bookTitleTransform,
    printBook,
    getProperty,
    setDefaultConfig,
    getTitles,
    printRefBook,
    purge,
    getObjectProperty,
    getBooksByCategory,
    logCategorySearch,
    getBooksByCategoryPromise,
    logSearchResults,
} from './functions';
import { Library } from './classes/library'; /* позиція значення */
// import { Library } from './classes'; /* позиція типу */
// import type { Library } from './classes'; /* позиція типу */

// ------------------------------------------------
function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}
showHello('greeting', 'TypeScript');

//===============
// Task 02 01
// console.log(getAllBooks());
// logFirstAvailable(getAllBooks());
// logBookTitles(getBookTitlesByCategory(Category.JavaScript));
// console.log(getBookAuthorByIndex(0));

// =========================
// Task 03 01
// const myID: string = createCustomerID('Ann', 10);
// console.log(myID);
// // let idGenerator: (name: string, id: number) => string;
let idGenerator: typeof createCustomerID;
idGenerator = (name: string, id: number) => `${name} - ${id}`;
idGenerator = createCustomerID;
// console.log(idGenerator('Boris', 15));

// ======================
// Task 03 02
// createCustomer('Tom');
// createCustomer('Tom', 30);
// createCustomer('Tom', 30, 'NJ');

// console.log(getBookTitlesByCategory());
// console.log(getBookTitlesByCategory(Category.Css));
// logFirstAvailable();

// console.log(getBookByID(1));
// console.log(checkoutBooks('Name', ...[1, 2, 4]));

// Task 03 03
// ==========================
// Function overload

// console.log(getTitles(true));
// console.log(getTitles('Lea Verou'));

// Task 03 04
// =========================
// Assertion Functions

// console.log(bookTitleTransform('Learn TYpe script'));

//================Інтерфейси============================
// опис форми об'єкта
// Task 04 01
const myBook: Book = {
    id: 5,
    title: 'Colors, Backgrounds, and Gradients',
    author: 'Eric A. Meyer',
    available: true,
    category: Category.Css,
    pages: 200,
    // year: 2015,
    // copies: 3,
    // markDamaged: (reason: string) => console.log(`Damaged: ${reason}`),
    markDamaged(reason: string) {
        console.log(`Damaged: ${reason}`);
    },
};

// printBook(myBook);
// myBook.markDamaged('missing back cover');

// Task 04 02
const logDamage: Logger = (reason: string) => console.log(`Damaged: ${reason}`);
// logDamage('missing back cover');

// Task 04 03

const favoriteAuthor: Author = {
    email: 'f@y.com',
    name: 'Anna',
    numBooksPublished: 5,
};
// const favoriteLibrarian: Librarian = {
//     email: 'a@y.com',
//     name: 'John',
//     department: 'Math',
//     assistCustomer: null,
// };

// Task 04.04
const offer: any = {
    book: {
        title: 'Essential TypeScript',
    },
};
// console.log(offer.magazine);
// console.log(offer.magazine?.getTitle());
// console.log(offer.book.getTitle?.());
// console.log(offer.book.authors?.[0]);

// Task 04.05

// console.log(getProperty(myBook, 'title'));
// console.log(getProperty(myBook, 'markDamaged'));
// console.log(getProperty(myBook, 'isbn'));

// Classes
// в классах вже є реалізація
// відрізняюьться станом, но однаова поведіка

// Task 05.01
// const ref = new ReferenceItem(1, 'Learn TS', 2022);
// // console.log(ref);
// ref.printItem();
// ref.publisher = 'ABC group';
// console.log(ref.publisher);
// console.log(ref.getID());

// Task 05.02 05.03

// const refBook: RefBook = new RefBook(1, 'Learn TS', 2022, 5);
// const refBook: RefBook = new RefBook(1, 'Learn TS', 2022, 5);
// refBook.printItem();
// refBook.printCitation()
// console.log(refBook);

// Task 05.04

// const favoriteLibrarian: Librarian /* & A */ = new UL.UniversityLibrarian();
// favoriteLibrarian.name = 'Max';
// favoriteLibrarian.assistCustomer('Tom', 'Learn TS')
// favoriteLibrarian.a = 5

// Task 05.05
const personBook: PersonBook = {
    name: 'Ton',
    author: 'Max',
    available: false,
    category: Category.Angular,
    email: 'f@',
    id: 5,
    title: 'Hello',
};

const options: TOptions = { duration: 20 };
const options2 = setDefaultConfig(options);
// console.log(Object.is(options, options2));

// Task 06.03, 06.04
// const refBook: RefBook = new RefBook(1, 'Learn TS', 2022, 5);
// printRefBook(refBook);
// const favoriteLibrarian: Librarian /* & A */ = new UL.UniversityLibrarian();
// printRefBook(favoriteLibrarian);

// Task 06.05
const flag = false;
if (flag) {
    import('./classes')
        .then(o => {
            const reader = new o.Reader();
            reader.name = 'Anna';
            reader.take(getAllBooks()[0]);

            console.log(reader);
        })
        .catch(err => console.log(err))
        .finally(() => console.log('complete!'));
}
// if (flag) {
//     const o = await import('./classes');
//     const reader = new o.Reader();
//     reader.name = 'Anna';
//     reader.take(getAllBooks()[0]);

//     console.log(reader);
// }

// Task 06.06
// let library: Library = new Library();
let library: Library = {
    id: 1,
    address: '',
    name: 'Tiomas',
};
// console.log(library);

// Task 07.01
const inventory: Book[] = [
    { id: 10, title: 'The C Programming Language', author: 'K & R', available: true, category: Category.Software },
    { id: 11, title: 'Code Complete', author: 'Steve McConnell', available: true, category: Category.Software },
    { id: 12, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true, category: Category.Software },
    { id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D.', available: true, category: Category.Software },
];

// const result = purge(inventory);
// const result = purge<Book>(inventory);
// console.log(result);
// const result1 = purge([1, 2, 3, 4, 5]);
// console.log(result1);

// Task 07.02,  07.03
// const bookShelf: Shelf<Book> = new Shelf<Book>();
// inventory.forEach(book => bookShelf.add(book));
// console.log(bookShelf.getFirst().title);

const magazines: Magazine[] = [
    { title: 'Programming Language Monthly', publisher: 'Code Mags' },
    { title: 'Literary Fiction Quarterly', publisher: 'College Press' },
    { title: 'Five Points', publisher: 'GSU' },
];
// const magazineShelf = new Shelf<Magazine>();
// magazines.forEach(mag => magazineShelf.add(mag));
// console.log(magazineShelf.getFirst().title);

// magazineShelf.printTitles();
// console.log(magazineShelf.find('Five Points'));

// console.log(getObjectProperty(magazines[0], 'publisher'));
// console.log(getObjectProperty(inventory[1], 'author'));
//
// Task 07.04
const bookRequiredFields: BookRequiredFields = {
    id: 5,
    author: 'Thomas',
    title: 'TheBook',
    category: Category.Css,
    available: true,
    pages: 500,
    markDamaged: null,
};

const updatedBook: UpdatedBook = {
    id: 25,
    author: 'Zander',
};

let params: Parameters<СreateCustomerFunctionType>;
params = ['Tom', 35, 'Kyiv'];
// createCustomer(...params);

// Task 08.01
// const favoriteLibrarian = new UL.UniversityLibrarian();
// const favoriteLibrarian2 = new UL.UniversityLibrarian();

// UL.UniversityLibrarian['newprop'] = 1;
// UL.UniversityLibrarian.prototype['newprop'] = 1;

// Task 08.02
// const fLibrarian = new UL.UniversityLibrarian();
// console.log(fLibrarian);
// fLibrarian.name = 'Tom';
// fLibrarian['printLibrarian']();

// Task 08.03
// const favoriteLibrarian = new UL.UniversityLibrarian();
// console.log(favoriteLibrarian);
// favoriteLibrarian.assistFaculty = null;
// favoriteLibrarian.teachCommunity = null;

// Task 08.04
// const refBook: RefBook = new RefBook(1, 'Learn TS', 2022, 5);
// refBook.printItem();

// Task 08.05
// const favoriteLibrarian = new UL.UniversityLibrarian();

// console.log(favoriteLibrarian);
// favoriteLibrarian.name = 'Tom';
// favoriteLibrarian.assistCustomer('Max', 'Learn TS');

// Task 08.06
// const favoriteLibrarian = new UL.UniversityLibrarian();
// favoriteLibrarian.name = 'Timoty';
// console.log(favoriteLibrarian.name);
// favoriteLibrarian.assistCustomer('Max', 'Learn TS');
// console.log(favoriteLibrarian);

// Task 08.07
// const refBook: RefBook = new RefBook(1, 'Learn TS', 2022, 5);
// // refBook.copies = 10.5;
// refBook.copies = 10;
// console.log(refBook.copies);

// Task 09.01
// console.log('Start');
// getBooksByCategory(Category.JavaScript, logCategorySearch);
// getBooksByCategory(Category.Software, logCategorySearch);
// console.log('end');\

// Task 09.02
// console.log('Start');
// getBooksByCategoryPromise(Category.JavaScript)
//     .then(titles => {
//         console.log(titles);
//         return Promise.resolve(titles.length);
//     })
//     .then(n => console.log(n))
//     .catch(reason => console.log(reason));

// getBooksByCategoryPromise(Category.Software)
//     .then(titles => console.log(titles))
//     .catch(reason => console.log(reason));
// console.log('end');

// Task 09.03
console.log('Begin');
logSearchResults(Category.JavaScript);
logSearchResults(Category.Software).catch(err => console.log(err));
console.log('End');
