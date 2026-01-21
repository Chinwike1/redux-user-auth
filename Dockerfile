FROM node:20-alpine
WORKDIR /app

RUN corepack enable && corepack prepare pnpm@latest --activate

COPY package.json pnpm-lock.yaml* ./
COPY backend/package.json backend/
COPY frontend/package.json frontend/

COPY backend/ backend/
COPY frontend/ frontend/

RUN pnpm run install:all

ENV NODE_ENV=production
RUN pnpm run build

EXPOSE 5000
CMD ["pnpm", "start"]
