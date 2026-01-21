# TypeScript Migration Plan

Goal: Migrate the entire codebase from JavaScript to TypeScript without changing features or behavior. All JavaScript source files should be converted to TypeScript equivalents.

## Inventory

Backend (Node/Express, ES modules):
- server entry: `backend/server.js`
- config: `backend/config/db.js`
- controllers: `backend/controllers/userController.js`
- middleware: `backend/middleware/authMiddleware.js`, `backend/middleware/errorMiddleware.js`
- models: `backend/models/userModel.js`
- routes: `backend/routes/userRoutes.js`
- utils: `backend/utils/generateToken.js`

Frontend (Vite + React):
- app entry: `frontend/src/index.jsx`
- app: `frontend/src/App.jsx`
- store + auth: `frontend/src/app/store.js`, `frontend/src/features/auth/authSlice.js`, `frontend/src/features/auth/authActions.js`, `frontend/src/app/services/auth/authService.js`
- components: `frontend/src/components/*.jsx`
- screens: `frontend/src/screens/*.jsx`
- routing: `frontend/src/routing/ProtectedRoute.jsx`
- tooling: `frontend/vite.config.js`

## Plan

1. Tooling and configuration
   - Add TypeScript dependencies in root, backend, and frontend where needed.
   - Create `tsconfig.json` at root, and separate `tsconfig.json` files for `backend` and `frontend` if required by tooling.
   - Update Vite config to use TypeScript and React (Vite + SWC) with `.ts/.tsx` support.
   - Add type definitions for Node, Express, Mongoose, React, and any other runtime library in use.

2. Backend migration
   - Rename all backend `.js` files to `.ts`.
   - Add explicit types for:
     - Express `Request`, `Response`, `NextFunction` handlers.
     - Mongoose models/schemas and user document interface.
     - Auth middleware user context typing.
   - Update any `__dirname` or path usage if needed for TS compilation output.
   - Add a build step that compiles to `dist/` and updates the backend start script to use compiled output.

3. Frontend migration
   - Rename `.jsx` to `.tsx` and `.js` to `.ts` in `frontend/src`.
   - Add a `vite-env.d.ts` file and any needed global typings.
   - Define types for auth state, user data, API responses, and async thunks.
   - Update React component props and hooks with appropriate types.

4. Shared linting and scripts
   - Update package scripts to use `tsc` (backend) and Vite (frontend) for builds.
   - Add type-check scripts for both apps.
   - Ensure nodemon/ts-node or tsx is used for backend dev mode.

5. Validation
   - Run type checks for backend and frontend.
   - Run `npm run dev` and verify existing behaviors.

## Notes / Constraints

- Keep API behavior and UI output unchanged.
- Do not add or remove runtime features.
- All JavaScript source files should be migrated; config files may remain JS if tooling requires it.

## Open Questions

- Preferred backend dev runner: `tsx`, `ts-node`, or `nodemon` + `ts-node`?
- Preferred backend build target: `dist/` with `node dist/server.js`?
- Should the root scripts orchestrate both backend and frontend builds with TypeScript steps?
