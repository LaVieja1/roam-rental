# Roam Rental

Proyecto FullStack clon de la página Airbnb
Con opciones para buscar propiedades para reservar, añadir favoritas, y añadir nuevas.

![image](https://github.com/LaVieja1/roam-rental/assets/65514301/d756b9df-6bdb-4a0d-91f7-f1f982e3b62e)
![image](https://github.com/LaVieja1/roam-rental/assets/65514301/cae40019-1c73-4b96-8198-35499cd6d4df)
![image](https://github.com/LaVieja1/roam-rental/assets/65514301/6bd112c8-adb0-4ad2-a451-be513f781ff2)

## Stack

- Next.js
- Next-Auth
- Server Actions
- React
- Prisma
- MongoDB
- TailwindCSS
- Cloudinary

### Instalar paquetes

```shell
npm i | pnpm install
```

### Setup .env

```js
DATABASE_URL=
NEXTAUTH_SECRET=
GITHUB_ID=
GITHUB_SECRET=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=
```

### Setup Prisma

MongoDB

```shell
npx prisma generate
npx prisma db push

```

### Iniciar la app

```shell
npm run dev | pnpm run dev
```
