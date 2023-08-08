FROM node:18-alpine as base

# cache node_modules
FROM base as deps

WORKDIR /app
COPY package*.json ./
COPY yarn.lock ./
RUN yarn install

# build
FROM base as builder

ARG NODE_ENV
ENV NODE_ENV=${NODE_ENV}

WORKDIR /app
COPY . .
COPY --from=deps /app/node_modules ./node_modules
RUN yarn build

# run
FROM base as runner

ARG NODE_ENV
ENV NODE_ENV=${NODE_ENV}

WORKDIR /app

COPY package*.json ./
COPY --from=deps /app/node_modules ./node_modules
COPY --from=builder /app/build ./build
COPY --from=builder /app/public ./public

EXPOSE 3000

CMD ["yarn", "start"]
