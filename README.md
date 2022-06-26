# User Authentication with Redux Toolkit
Authentication workflow built with the MERN stack & Redux Toolkit. [Project demo here](https://redux-user-auth.herokuapp.com/)

![Redux Toolkit authentication demo](https://ucf1a8f53223e1708ce0b00f4d9a.previews.dropboxusercontent.com/p/thumb/ABlAZFsxtiIT8TaGgXqmKL1dhrkkK_ZnqQT6eleZqh8c3vmMetO7-qmsNyO5z-S4XL_mcZ3h2iYZEMcuxh4S7sB4j2RxZLA29Fz5rP3tRl7oRX1dFpHt0FfY1pNWKUApmwNXfs0W9zIb30Z8KqysJ7VkSya9aXRnPy2peXE6GDmu0GacthLNOf8DBUA-GMvUUuMzNKoJUbRnOaeL4i2s0Ot6mRjwi5EcgoH4X5cTGkRENUmFRI5-cxUxUnasjYBUjB0pGnw5MW-VhDCDYi12cs5TnppwD_WgsNpsZFtNNQGTfE8l137L0ZAJ2iA1hkc6HfC_pxNYHnGIM0eoWopYsEc2Y4-_wyCzrpPlRKfKVhh0fqLgp09bILfHJ2O75IQjdUKHrSOoqMttTsWbaOf_shuF/p.gif)

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
