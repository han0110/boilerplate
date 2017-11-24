# Boilerplate &middot; [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

This boilerplate is built with React/Redux by Webpack + Koa

## 0. Table of Contents

  - [Getting Started](#1-getting-started)
  - [Running the tests](#2-running-the-tests)
  - [Built With](#3-built-with)

## 1. Getting Started

### 1.1 Prerequisites

Koa requires **node v7.6.0** or higher for ES2015 and async function support.

### 1.2 Installing

```
git clone https://github.com/han0110/boilerplate && cd boilerplate
npm install
```

To build frontend
```
npm run build
```

To start server
```
npm run start
```

Then server will start at port 3000

## 2. Running the tests

### 2.1 style linting

- Lintint
```
npm run lint-styles
```

- Autofix
```
npm run lint-styles-fix
```

### 2.2 flow checking

- Checking
```
npm run flow
```

- Build flow-typed node-modules
```
npm run flow-typed
```

## 3. Built With

* [React/Redux](https://redux.js.org/) - Framework for frontend
* [Webpack](https://webpack.js.org/) - Modules ➔ Static assets
* [Flow](https://flow.org/en/) - Static type checker
* [CSS-Module](https://github.com/css-modules/css-modules) - CSS modulization
* [Koa](http://koajs.com/) - Framework for backend
