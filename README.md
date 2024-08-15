# MSIB Dibimbing.id Fullstack Engineer Study Case - Backend

A GraphQL API to manage notes using [Express.js](https://expressjs.com/) and [Apollo Server](https://www.npmjs.com/package/apollo-server).

## Table of Contents

- [MSIB Dibimbing.id Fullstack Engineer Study Case - Backend](#msib-dibimbingid-fullstack-engineer-study-case---backend)
  - [Table of Contents](#table-of-contents)
  - [Project](#project)
    - [Commands](#commands)
      - [Install Dependencies](#install-dependencies)
      - [Environment variables](#environment-variables)
      - [Migrations](#migrations)
      - [Data Seeding (Optional)](#data-seeding-optional)
      - [Development](#development)
      - [Production](#production)
    - [Structure](#structure)
    - [API](#api)
    - [Query](#query)
      - [Get All Notes](#get-all-notes)
      - [Get Specific Note](#get-specific-note)
    - [Mutation](#mutation)
      - [Create Note](#create-note)
      - [Update Note](#update-note)
      - [Delete Note](#delete-note)

## Project

### Commands

#### Install Dependencies

```shell
npm i
```

#### Environment variables

To set up the environment variables, please add the following key-value pairs to the `.env` file:

```env
DATABASE_URL=postgres://postgres:postgres@localhost:5432/msib
PORT=4000
NODE_ENV=development
```

Notes:

- `DATABASE_URL`: Database connection URL.
- `PORT`: Port number where the application will run.
- `NODE_ENV`: Environment mode (development, production, etc.).

#### Migrations

Apply schema migrations with the following command:

```shell
npm run db:migrate
```

#### Data Seeding (Optional)

Populate your database with an initial set of data with the following command:

```shell
npm run db:seed
```

#### Development

Run the app in development mode with the following command:

```shell
npm run dev
```

#### Production

Run the app in production mode with the following command:

```shell
npm run build
npm run start
```

### Structure

- `src`: contains all the source code for the app.
  - `index.ts`: the entry point of the app.
  - `drizzle`: contains the database configuration and migration files.
    - `db.ts`: contains the code for the database query client.
    - `migrate.ts`: contains the code to apply schema migrations.
    - `schema.ts`: contains the database schema definitions.
    - `seed.ts`: contains the code for seeding data.
  - `graphql`: contains the GraphQL configuration.
    - `schema.ts`: contains the type definitions and resolvers for GraphQL.
    - `resolvers-types.ts`: contains the generated types for type safety.

### API

### Query

#### Get All Notes

```gql
query Notes($sortOrder: Order) {
    notes(orderBy: { createdAt: $sortOrder }) {
        id
        title
        body
        createdAt
    }
}
```

#### Get Specific Note

```gql
query Note($id: ID!) {
    note(id: $id) {
        id
        title
        body
        createdAt
    }
}
```

### Mutation

#### Create Note

```gql
mutation CreateNote(
    $title: title_String_NotNull_minLength_1!
    $body: body_String_NotNull_minLength_1!
) {
    createNote(input: { title: $title, body: $body }) {
        id
    }
}
```

#### Update Note

```gql
mutation UpdateNote(
    $id: ID!
    $title: title_String_NotNull_minLength_1!
    $body: body_String_NotNull_minLength_1!
) {
    updateNote(id: $id, input: { title: $title, body: $body }) {
        id
    }
}
```

#### Delete Note

```gql
mutation DeleteNote($id: ID!) {
    deleteNote(id: $id) {
        id
    }
}
```
