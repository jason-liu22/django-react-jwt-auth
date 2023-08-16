# React JWT Authentication for Beginners

## Online Demo

https://djreactjwt-1-n3165612.deta.app/

## API Endpoint

https://djreactjwt-1-n3165612.deta.app/api/

## Scenario

- `/dashboard` is a protected route.
- if you are logged in, you have to see the avatar with profile menu in navbar.
- if you are not logged in and try to access to `/dashbaord`, it will show `login page`
- The user logged can't access to auth pages.

## What you will learn

- How to structure a react application
- How to architect public and protected routes with authenction.
- How to use react-router-dom

## This project is started from create-vite with react and swc

### Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
