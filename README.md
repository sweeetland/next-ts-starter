# client-web

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/zeit/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Todo

- precommit hooks

- l18n

- tests

- ci

## Conventions

### Style Guides

- [JavaScript](https://github.com/airbnb/javascript) (mostly relevent for TS too)

- [TypeScript](https://github.com/basarat/typescript-book/blob/master/docs/styleguide/styleguide.md)

- [React](https://github.com/airbnb/javascript/tree/master/react)

### Folder Structure

Avoid placing files at the root of the project unless absolutely necessary. All application code should live in src/. Every page of the app is defined as a React component in a .tsx file in src/pages. All other components should live in src/components. Layout components can go in components/layout, reusable components live in components/shared, and components specfic to a certain page or domain can live inside a sub directory within src/components.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
