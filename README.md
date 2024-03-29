# DISCLAIMER

The app is related to my work as a Front-end developer at Vention. The app uses a local mock-up server imitating REST API which can be found in the src/api.mock.ts. The app is not responsive, so better run it on a full-screen resolution, preferably(1920x1080).

## Brief video demo

[![Custom Thumbnail](https://raw.githubusercontent.com/ddushev/Vention/master/src/publicMock/demo.png)](https://www.youtube.com/watch?v=hDx-R-lSQ3U)

## Achievements

1. Developed multiple reusable components and elements for maximum developer experience and efficiency
2. Used well-defined Webpack configuration with strict linting rules
3. Utilised Redux Toolkit for state managing as per client requirements
4. Used SCSS modules to prevent style conflicts and make it easier to maintain and refactor code
5. Applied several layers of optimization (such as lazy loading, React.memo, useMemo, image optimisation, and gzip compression) for maximum application performance and better UX
6. Analysed bundle size with the webpack-bundle-analyser plugin
7. Added functional and snapshot testing via Jest

## To install locally

1. Clone the repo locally.
2. Open the project folder in terminal and type `npm install` to install all dependencies.
3. In the terminal with the client folder type `npm start`.
4. Open the app at the address pointed out - most likely that would be <http://localhost:8080/>

## Overview

GameStore is a Singe Page Application that allows users to register login and logout into a system. Guest users have access only to the home page search and to login/register functionality. Logged-in users has access to all functionalities - filter games in product page, add/buy/remove/ games from cart, change profile data, upload a picture and change password. If the user is admin(username - ddushev) he can also add/edit/delete games.

## Pre-seed data

1. Users - there are two users which can be used initially to login into the app
   - ddushev (admin - can add/edit/delete games) - password: 123 (any password will work for login, but if trying to change the password the old password must be correct)
   - ddushev2 - password: 123(any password will work for login, but if trying to change the password the old password must be correct)
2. Games - there are several games added.

## Technical stack

1. HTML
2. SCSS
3. React
4. Typescript
5. Redux toolkit
6. Material UI
7. WUP
8. WebPack
