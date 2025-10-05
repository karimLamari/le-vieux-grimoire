
```
le-vieux-grimoire
├─ backend
│  ├─ .env
│  ├─ app.js
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ server.js
│  └─ src
│     ├─ controllers
│     ├─ models
│     │  ├─ Book.js
│     │  └─ User.js
│     └─ routes
└─ frontend
   ├─ .eslintrc.json
   ├─ babel-plugin-macros.config.js
   ├─ Dockerfile
   ├─ package-lock.json
   ├─ package.json
   ├─ public
   │  ├─ data
   │  │  └─ data.json
   │  ├─ favicon.ico
   │  ├─ index.html
   │  ├─ logo192.png
   │  ├─ logo512.png
   │  ├─ manifest.json
   │  └─ robots.txt
   ├─ README.md
   └─ src
      ├─ App.css
      ├─ App.jsx
      ├─ App.test.js
      ├─ components
      │  ├─ BackArrow
      │  │  └─ BackArrow.jsx
      │  ├─ Books
      │  │  ├─ BestRatedBooks
      │  │  │  ├─ BestRatedBooks.jsx
      │  │  │  └─ BestRatedBooks.module.css
      │  │  ├─ BookForm
      │  │  │  ├─ BookForm.jsx
      │  │  │  └─ BookForm.module.css
      │  │  ├─ BookInfo
      │  │  │  └─ BookInfo.jsx
      │  │  ├─ BookItem
      │  │  │  ├─ BookItem.jsx
      │  │  │  └─ BookItem.module.css
      │  │  └─ BookRatingForm
      │  │     ├─ BookRatingForm.jsx
      │  │     └─ BookRatingForm.module.css
      │  ├─ Footer
      │  │  ├─ Footer.jsx
      │  │  └─ Footer.module.css
      │  ├─ Header
      │  │  ├─ Header.jsx
      │  │  └─ Header.module.css
      │  └─ ScrollToTop
      │     └─ ScrollToTop.jsx
      ├─ images
      │  ├─ add_file.png
      │  ├─ book_add.jpg
      │  ├─ book_delete.png
      │  ├─ home_banner.jpg
      │  ├─ Logo.png
      │  ├─ Logo.svg
      │  └─ map_footer.png
      ├─ index.css
      ├─ index.js
      ├─ lib
      │  ├─ common.js
      │  ├─ customHooks.js
      │  └─ functions.jsx
      ├─ logo.svg
      ├─ pages
      │  ├─ AddBook
      │  │  ├─ AddBook.jsx
      │  │  └─ AddBook.module.css
      │  ├─ Book
      │  │  ├─ Book.jsx
      │  │  └─ Book.module.css
      │  ├─ Home
      │  │  ├─ Home.jsx
      │  │  └─ Home.module.css
      │  ├─ SignIn
      │  │  ├─ SignIn.jsx
      │  │  └─ SignIn.module.css
      │  └─ updateBook
      │     ├─ UpdateBook.jsx
      │     └─ UpdateBook.module.css
      ├─ reportWebVitals.js
      ├─ setupTests.js
      └─ utils
         └─ constants.js

```
```
le-vieux-grimoire
├─ backend
│  ├─ .env
│  ├─ app.js
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ server.js
│  └─ src
│     ├─ controllers
│     │  └─ authController.js
│     ├─ models
│     │  ├─ Book.js
│     │  └─ User.js
│     └─ routes
│        └─ authRoutes.js
├─ frontend
│  ├─ .eslintrc.json
│  ├─ babel-plugin-macros.config.js
│  ├─ Dockerfile
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ public
│  │  ├─ data
│  │  │  └─ data.json
│  │  ├─ favicon.ico
│  │  ├─ index.html
│  │  ├─ logo192.png
│  │  ├─ logo512.png
│  │  ├─ manifest.json
│  │  └─ robots.txt
│  ├─ README.md
│  └─ src
│     ├─ App.css
│     ├─ App.jsx
│     ├─ App.test.js
│     ├─ components
│     │  ├─ BackArrow
│     │  │  └─ BackArrow.jsx
│     │  ├─ Books
│     │  │  ├─ BestRatedBooks
│     │  │  │  ├─ BestRatedBooks.jsx
│     │  │  │  └─ BestRatedBooks.module.css
│     │  │  ├─ BookForm
│     │  │  │  ├─ BookForm.jsx
│     │  │  │  └─ BookForm.module.css
│     │  │  ├─ BookInfo
│     │  │  │  └─ BookInfo.jsx
│     │  │  ├─ BookItem
│     │  │  │  ├─ BookItem.jsx
│     │  │  │  └─ BookItem.module.css
│     │  │  └─ BookRatingForm
│     │  │     ├─ BookRatingForm.jsx
│     │  │     └─ BookRatingForm.module.css
│     │  ├─ Footer
│     │  │  ├─ Footer.jsx
│     │  │  └─ Footer.module.css
│     │  ├─ Header
│     │  │  ├─ Header.jsx
│     │  │  └─ Header.module.css
│     │  └─ ScrollToTop
│     │     └─ ScrollToTop.jsx
│     ├─ images
│     │  ├─ add_file.png
│     │  ├─ book_add.jpg
│     │  ├─ book_delete.png
│     │  ├─ home_banner.jpg
│     │  ├─ Logo.png
│     │  ├─ Logo.svg
│     │  └─ map_footer.png
│     ├─ index.css
│     ├─ index.js
│     ├─ lib
│     │  ├─ common.js
│     │  ├─ customHooks.js
│     │  └─ functions.jsx
│     ├─ logo.svg
│     ├─ pages
│     │  ├─ AddBook
│     │  │  ├─ AddBook.jsx
│     │  │  └─ AddBook.module.css
│     │  ├─ Book
│     │  │  ├─ Book.jsx
│     │  │  └─ Book.module.css
│     │  ├─ Home
│     │  │  ├─ Home.jsx
│     │  │  └─ Home.module.css
│     │  ├─ SignIn
│     │  │  ├─ SignIn.jsx
│     │  │  └─ SignIn.module.css
│     │  └─ updateBook
│     │     ├─ UpdateBook.jsx
│     │     └─ UpdateBook.module.css
│     ├─ reportWebVitals.js
│     ├─ setupTests.js
│     └─ utils
│        └─ constants.js
└─ README.md

```