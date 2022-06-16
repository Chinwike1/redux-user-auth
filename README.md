# User Authentication with Redux Toolkit
Authentication workflow built with the MERN stack & Redux Toolkit. [Project demo here](https://redux-user-auth.herokuapp.com/)

## Features
* User Login & Register
* Protected routes with React Router v6
* JWT storage with localStorage
* Automatically fetches user details on page load (Header.js)
* Redux Toolkit's `createAsyncThunk`

## Usage
### Starter files
Clone the `starter-files` branch with the following command:

```bash
git clone --branch starter-files --single-branch https://github.com/Chinwike1/redux-user-auth.git
```

### ES Modules in Node
ECMAScript is used on the backend instead of CommonJS. This requires you to add the `.js` extension when importing a file — not package.

### MongoDB Setup
[Getting started with MongoDB Atlas](https://www.mongodb.com/docs/atlas/getting-started/)

### Environment Variables
```
NODE_ENV = development
PORT = 5000
MONGO_URI = 'insert_your_mongodb_uri'
JWT_SECRET = "any_string"
```

### Install Dependencies
Backend & Frontend
```
  npm install
  cd frontend
  npm install
```

### Available Scripts
```bash
  # Run frontend (:3000) & backend (:5000)
  npm run dev

  # Run backend only
  npm run server

  # Run frontend only
  npm run client
```

## License
GPL-3.0 — Open source license. Software can be used, copied, modified, e.t.c, free of charge.
