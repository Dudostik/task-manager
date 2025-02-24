# React | Vite | TypeScript | NestJS - Boilerplate

A boilerplate using React, Vite, Typscript, NestJS.

## Run the project

Run the following commands :

```
npm install
```

then

```
npm run start:all
```

More details about scripts [here](#scripts)

## Architecture of the projet

```
.
├── client
│   ├── public
│   ├── src
│   │   ├── assets
│   │   ├── components
│   │   │   ├── atoms
│   │   │   ├── molecules
│   │   │   ├── organisms
│   │   │   └── templates
│   │   ├── contexts
│   │   ├── layout
│   │   ├── pages
│   │   ├── stories
│   │   └── utils
│   └── tests
│       ├── e2e
│       ├── integration
│       └── unit
└── server
    ├── dist
    ├── prisma
    │   └── migrations
    ├── src
    │   ├── prisma
    │   └── user
    │       ├── dto
    │       └── entities
    └── test
```

## Scripts

This project uses npm scripts for managing workflow. Here's a list of the available commands:

- `npm run docker`: This command navigates to the *server* directory and starts the docker.

- `npm run start:client`: This command navigates to the *client* directory and starts the client development server.

- `npm run start:server`: This command navigates to the *server* directory, starts the server in development mode and
  runs the docker compose.

- `npm run start:all`: This command runs both the client and server start scripts concurrently. It also runs the docker
  compose.

- `npm run build:client`: This command navigates to the *client* directory and builds the client for production.

- `npm run build:server`: This command navigates to the *server* directory and builds the server for production.

- `npm run build:all`: This command runs both the client and server build scripts concurrently.

Please note that you need to have all the project dependencies installed before running these commands. You can install
the dependencies by running `npm install`.
