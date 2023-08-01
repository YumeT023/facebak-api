# facebak-api

##### Clone the repository

```
git clone https://github.com/YumeT023/facebak-api
```

##### Install the dependencies

navigate to the project directory: `cd facebak-api`

```
yarn install or npm install
```

##### Sync your db with the Prisma migration

##### # update the .env according to your credentials

```
DATABASE_URL="postgresql://{{name}}:{{password}}@localhost:5432/{{database}}?schema=public"
```

- `{{name}}` your postgres username, _postgres_ by default on windows
- `{{password}}` your postgres password
- `{{database}}` db name

##### # Push the prisma state to the provided database

```
npx prisma db push
```

#### Run the dev server

```
npm run dev
```

#### Build & run the build

```
npm run build
node  build/app.js
```

#### Miscellaneous

- `Format` npm run format
- `lint` check code style issues
