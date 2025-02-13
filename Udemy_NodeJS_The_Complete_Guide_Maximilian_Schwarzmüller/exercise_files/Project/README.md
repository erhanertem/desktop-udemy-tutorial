### 👋 **I am Erhan ERTEM**

&emsp;

## Udemy NodeJS - The Complete Guide (MVC, REST APIs, GraphQL, Deno) by Maximilian Schwarzmüller

### **Objective:** Create Shop App

- Explore nodejs app folder structure
- Explore template engines

  - Designate and use a template engine
    - Pug
    - HBS
    - EJS

- Explore express routers
  - App router
  - Children routers
    - Significance of route order
- Error handling

  - Throwing errors
    - throw err vs next(err)
  - Setup error handling express middlewares
    - 404 Non existing route request error handling
    - Global express error handling
      - Malformed body error handling
      - Customizing error message and status
      - Setup custom error routes
        - Pass dotEnv variables
        - Pass custom error message onto EJS via user session (Promisified or Callback based error switching)
  - Global non-express error handling
    - uncaughtException
    - unhandledRejection
  - Error handling flash UI notifications
    - connect-flash package

- Explore express routes
  - Static routes
  - Params routes
- Data flow between routes
  - Query params
  - Hidden input field within POST forms
- DB handling in Nodejs
  - DB handling based on file read/write
    - Explore CRUD operations
  - DB handling based on mysql driver
    - Explore CRUD operations
  - DB handling based on mysql driver + sequelize ORM
    - Setup table associations
    - Setup ORM data models
    - Explore CRUD operations
  - DB handling based on mongodb driver
    - Explore CRUD operations
  - DB handling based on mongoose ODM
    - Explore CRUD operations
- Website security

  - Handle user signup and authentication
    - Explore cookie-based client-side authentication via cookie-session
    - Explore cookie-based server-side authentication via express-session
    - Sensitive user data encryption
      - bcrypt package
    - Route protection
      - UI-level/Client-side obstruction
      - Controller/Backend-side obstruction
        - In-controller guard clause construct
        - Middleware construct
  - CSRF Protection for Forms
    - csurf package (deprecated)
    - double csrf package
      - Explore csrf-sync for server-side sessions
      - Explore csrf-csrf for client-side sessions (adaptation to server-side sessions)
  - Advanced website security issues
    - Handle password reset
    - Adopt rate-limiter against token based brute-force attacks
  - User Authorization
    - Adopt Filter Database Inquiries (Ownership-based Authorization)
  - Validation
    - Validate inputs via express-validator
      - Implement input line specific validation flashes
      - Implement generic validation flashes
  - Sanitization
    - UI sanitization

- File Handling in NodeJS apps
  - Serving multiple static content
    - Relative versus absolute paths
  - File uploading
  - File downloading
    - View on browser
    - Save on file

**Aside from curriculum:**

- Implement nodejs controllers in async/await instead of cb style
- Slightly different approach of implementing functions w/ detailed error checking
- Flash card handling
  - Handle validation error ids with custom behavior: Timeout or upon-click/keypress
  - Setup self-destroying flash cards
    - Extend EJS variable onto non-NodeJS enviroment JS for timeout cards that is created inside or out of session
- Implement gracefull handling of a user whom has an active session but terminated credentials on DB side.
- Promote error redirects by persisting error message across redirects via registering to session @ global express errr handler middleware
- Implement rate limiting @ user pass reset controllers
  - Ip based via express-rate-limit
  - userID based via redis
- Create a fully dynamic multer upload middleware for higher flexibility.
- While uploading new file @ edit admin product, remove the older file from the server
- @ delete admin product, remove the associated admin product pic from the server

&emsp;

###### ⚠️Free-tier render services may experience throttling, leading to delayed app loading times. Since the API and client are hosted separately, getting the backend online may take additional time to respond due to enforced spin-downs on free-tier services.

#### <img src="./push.gif" width="30px"/>[Shop App](https://shop-app.onrender.com/)

<img src="./screenshot.webp" width="600px"/>

---

![JS](https://img.shields.io/badge/JavaScript-323330?style=square&logo=javascript&logoColor=F7DF1E) ![NodeJS](https://img.shields.io/badge/Node.js-339933?style=square&logo=nodedotjs&logoColor=white) ![ExpressJs](https://img.shields.io/badge/Express.js-000000?style=square&logo=express&logoColor=white) ![Handlebars](https://img.shields.io/badge/Handlebars%20js-f0772b?style=square&logo=handlebarsdotjs&logoColor=black) ![Pug](https://img.shields.io/badge/Pug-E3C29B?styleflat&logo=pug&logoColor=black) ![EJS](https://img.shields.io/badge/EJS-%23B4CA65.svg?styleflat&logo=ejs&logoColor=black) ![mySQL](https://img.shields.io/badge/MySQL-005C84?style=square&logo=mysql&logoColor=white) ![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=square&logo=Sequelize&logoColor=white) ![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=square&logo=mongodb&logoColor=white) ![Mongoose](https://img.shields.io/badge/Mongoose-880000.svg?style=square&logo=mongodb&logoColor=white) ![Redis](https://img.shields.io/badge/Redis-%23DD0031.svg?style=square&logo=redis&logoColor=white)
