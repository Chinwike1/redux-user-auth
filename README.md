# User Authentication with Redux Toolkit

Authentication workflow built with the MERN stack, Redux Toolkit & TypeScript. [Project demo here](https://redux-user-auth.netlify.app/)

![Redux Toolkit authentication demo](https://blog.logrocket.com/wp-content/uploads/2022/06/introduction-app-demo.gif)

## Features

- User Authentication — Login & Register
- MongoDB
- Application context with Redux Toolkit
- Data fetching with RTK Query
- Protected routes with React Router v6
- JWT storage with localStorage
- Automatically fetches user details on page load — Header.tsx
- TailwindCSS v4 with Dark Mode

## Usage

### Starter files

If you're following along with the [blog post](https://blog.logrocket.com/handling-user-authentication-redux-toolkit), clone the `starter-files` branch with the following command:

```bash
git clone --branch starter-files --single-branch https://github.com/Chinwike1/redux-user-auth.git
```

## MongoDB Setup

Follow this guide on "[Getting started with MongoDB Atlas](https://www.mongodb.com/docs/atlas/getting-started/)" to setup your database.

## Environment Variables

Environment variables are shown in `.env.example` files.

## Install Dependencies

Run this command first in both dev and production to install dependencies in root, /backend & /frontend:

```bash
pnpm run install:all
```

## Start development server

```bash
# Run frontend (:5173) & backend (:5000)
pnpm run dev

# Run backend only
pnpm run dev:server

# Run frontend only
pnpm run dev:client
```

## Build

```bash
# Build both backend and frontend
pnpm run build

# Build backend only (TypeScript compilation)
pnpm run build:backend

# Build frontend only (Vite production build)
pnpm run build:frontend
```

## Production

```bash
# First, build the project
pnpm run build

# Start the production server (serves built frontend)
pnpm start
```

## Docker

You can also deploy using Docker and Docker Compose:

```bash
# Build and run with docker compose
docker compose up --build
```

The container runs on port 5000. Make sure to set the required environment variables (`MONGO_URI`, `JWT_SECRET`) either in a `.env` file or pass them directly to Docker Compose.

## License

GPL-3.0 — Open source license. Software can be used, copied, modified, e.t.c, free of charge.
