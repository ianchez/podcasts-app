# podcasts-app-ts
React / Typescript SPA - Showing the latest popular podcasts

## Description

This is a simple React / Typescript SPA that shows the latest popular podcasts in iTunes.
The app uses the [iTunes RSS Api](https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json) to fetch the data.

## Installation
1. Clone the repository
2. You need **Node.js** installed. I recommend using NVM [github repository](https://github.com/nvm-sh/nvm)
3. Make sure you have **yarn** configured. If not, check the [yarn getting-started guide](https://yarnpkg.com/getting-started)
4. Run `yarn install` to install the dependencies

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.