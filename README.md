# podcasts-app-ts

React / Typescript SPA - Showing the latest popular podcasts

---

## Description

This is a simple React / Typescript SPA that shows the latest popular podcasts in iTunes.
The app uses the [iTunes RSS Api](https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json) to fetch the data.

---

## Features

- The app shows the top 100 podcasts in the iTunes API
- The user can filter the podcasts by title
- The user can click on a podcast to see more details
- The user can see the podcast's author, title, image, and summary
- The user can see the podcast's episode list
- The user can play directly the podcast from the app

## Technologies

- ***React 18***
- ***Typescript***
- ***Next.js*** (for server-side rendering, routing and image optimization)
- ***React-query*** (for data fetching, cache, and disabling unnecessary fetching)
  - Using cache on data fetches the app feels more responsive specially when returning to previously visited pages.
  The cache is set to 24 hours (1 day).
- ***Eslint*** (for linting on local development)
- ***Prettier*** (for code formatting)

## Architecture

The project is structured in a modular way, with separate directories for components, constants, contexts, hooks, providers, screens, services, and utilities.

This makes the codebase easier to navigate and maintain. This also allows for better separation of concerns, reusability and easier testing.

All of this will help for future expansion (scalability) or for changing technologies / implementations if needed.

For state management I'm only using React Context API with useState hook combined with React-Query, this is enough for the size of the project by now, but if the project keeps growing we could combine it with useReducer hook or an external state management library like Redux.

For fetching data I'm only using the Fetch API as a HTTP client, but again, if the project keeps growing or for better compatibility in older browsers I would recommend using Axios.
The cache is handled by React-Query, allowing for better performance and less unnecessary fetching.

Routing, Navigation handled by Next.js using the App router and the useRouter hook. The App router allows setting layouts for the whole app like the header, or for specific sections like the podcast detail sidebar.

Testing is done with Jest and React Testing Library. The tests are located in the same directory as the component they are testing, this makes it easier to find and maintain the tests.

---

### Room for improvements

- Improve test coverage
- Make use of full server side rendering without affecting the perceived performance
- Show more information about the podcast like genre, release date, etc.
- Add additional filters like by author, genre, etc.
- Add filters to the episode list
- Include other data sources like Spotify, Google Podcasts, etc.
- Allow the user to add podcasts / episodes to a favorites list
- Allow the user to create playlists
- Create a player component that allows the user to play the podcast while navigating the app
- Add a dark mode

---

## >>> Try it out deployed [here](https://podcasts-app-ianchez.vercel.app/) <<<

---

## Installation

1. Clone the repository
2. Create a `.env.local` file in the root of the project following the structure of the `.env.example` file
    - A default config is already provided in the `.env.example` file
3. You need **Node.js** installed. I recommend using NVM [github repository](https://github.com/nvm-sh/nvm)
4. Make sure you have **yarn** configured. If not, check the [yarn getting-started guide](https://yarnpkg.com/getting-started)
5. Run `yarn install` to install the dependencies

---

### Available Scripts

In the project directory, you can run:

#### *`yarn dev`*

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

#### *`yarn test`*

Runs the tests in the project.

#### *`yarn lint`*

Runs the linter in the project.

#### *`yarn build`*

Builds the app for production to the `./next` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

#### *`yarn start`*

Runs the app in the production mode.\
Requires the app to be built first with `yarn build`.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
