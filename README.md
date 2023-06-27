# User Authentication with Redux Toolkit

Authentication workflow built with the MERN stack & Redux Toolkit. [Project demo here](https://redux-user-auth.netlify.app/)

![Redux Toolkit authentication demo](https://blog.logrocket.com/wp-content/uploads/2022/06/introduction-app-demo.gif)

## Features

- User Authentication — Login & Register
- Protected routes with React Router v6
- JWT storage with localStorage
- Automatically fetches user details on page load — Header.js
- Redux Toolkit's & RTK Query

## Usage

### Starter files

If you're following along with the [blog post](https://blog.logrocket.com/handling-user-authentication-redux-toolkit), clone the `starter-files` branch with the following command:

```bash
git clone --branch starter-files --single-branch https://github.com/Chinwike1/redux-user-auth.git
```

### ES Modules in Node

ECMAScript is used on the backend instead of CommonJS. This requires you to add the `.js` extension when importing a file — not package.

## MongoDB Setup

Follow this guide on "[Getting started with MongoDB Atlas](https://www.mongodb.com/docs/atlas/getting-started/)" to setup your database.

## Environment Variables

Environment variables are shown in `.env.example` files.

## Install Dependencies

Run this command to install dependencies in both the backend & frontend folders:

```
  npm install && cd frontend && npm install
```

## Start development server

```bash
  # Run frontend (:5173) & backend (:5000)
  npm run dev

  # Run backend only
  npm run server

  # Run frontend only
  npm run client
```

## Roadmap

- Update the authentication mechanism to use Cookies instead of WebStorage(Local or Session)

## License

GPL-3.0 — Open source license. Software can be used, copied, modified, e.t.c, free of charge.
