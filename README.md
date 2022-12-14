# React TypeScript Effector demorealworld

This is an Effector new version of [https://demo.realworld.io/]

## What's inside?

- [ReactJS](https://reactjs.org)
- [Vite](https://vitejs.dev)
- [TypeScript](https://www.typescriptlang.org)
- [Jest](https://jestjs.io)
- [Testing Library](https://testing-library.com)
- [Cypress](https://www.cypress.io)
- [ESLint](https://eslint.org)
- [Prettier](https://prettier.io)
- [Polyfills](https://github.com/vitejs/vite/tree/main/packages/plugin-legacy#readme)

## Getting started (Project initialisation)

1. **Copy .env and adjust env vars if necessary**

```bash
$  cp .env.local.example .env.local
```

2. Install dependencies.

```bash
$  pnpm i
```

3. Start dev server with hot reload at http://localhost:3000.

```bash
$  pnpm run dev
```

## You can also start dev server using Docker and then open it at http://0.0.0.0:4200 .

```bash
$  docker-compose up
```

## Recommended VS Code extensions

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

### Lint commands

```bash
pnpm run lint
```

### Build commands

```bash
pnpm run build
```

### Run the app in production mode at http://localhost:3000.

```bash
pnpm run serve
```

### Test commands

- Run unit tests and watch
  ```bash
  pnpm run test:unit
  ```
- Run unit tests with coverage
  ```bash
  pnpm run test:unit:coverage
  ```
- Run e2e tests
  ```bash
  pnpm run test:e2e
  ```

## License

This project is licensed under the MIT License.
