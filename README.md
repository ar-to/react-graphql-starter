# React Graphql Starter

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Dependencies & Prerequisites
[Chakra-UI](https://chakra-ui.com/docs/getting-started)

[React-Router](https://reactrouter.com/)

[React-Icons](https://react-icons.github.io/react-icons)

[Redux-Toolkit-Query](https://redux-toolkit.js.org/rtk-query/overview)

[Graphql-Request Client](https://www.npmjs.com/package/graphql-request) - depends on `graphql` also

[History](https://www.npmjs.com/package/history)

[Gitlab GraphQL API](https://docs.gitlab.com/ee/api/graphql/getting_started.html) - this project uses a personal token as a react env var via `REACT_APP_GITLAB_PERSONAL_ACCESS_TOKEN`. Change it inside a `.env.development.local`.

[React Env Vars](https://create-react-app.dev/docs/adding-custom-environment-variables/) - 
> You need to restart the development server after changing .env files.

[React MomentJS](https://www.npmjs.com/package/react-moment) - also depends on momentjs

## References
Style guides taken from a mix of sources. 
[AirBnB React Guide](https://airbnb.io/javascript/react/) - overall convensions

[Angular Naming](https://angular.io/guide/styleguide#general-naming-guidelines) - `feature.type.ts` convension is prefered but PascalCase is also supported.

[React Loading Skeleton](https://www.npmjs.com/package/react-content-loader) - another alternative can be [react-content-loader](https://www.npmjs.com/package/react-content-loader)

## TODO

- mock graphql api and update tests
- pagination: 20 by default but load more per user request
- ghost/skeleton screen loading
- persist search term  and result list between sessions(stop/start app) via state management
- UI/UX updates (animations, transitions, hover effects, etc)