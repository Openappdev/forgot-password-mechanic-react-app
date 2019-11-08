# Forgot Password Mechanic React App

This project has been developped by [Saad Blakime](https://github.com/Openappdev).
A single page showing forgot password recovery workflow using [React](https://reactjs.org/).

## To run locally

Assuming you have git and node installed, setup is simple:

```
git clone https://github.com/Openappdev/forgot-password-mechanic-react-app.git
cd forgot-password-mechanic-react-app
yarn
```

## Available Scripts

In the project directory, you can run:

#### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Testing Scripts

#### `yarn test`

`yarn test` launches the unit tests in the interactive watch mode.<br />
Four unit tests has been written with `jest`.

#### `yarn cypress:open`

Launches the integration test in web browser.<br />

##### Forgot Password Page Testing with CYPRESS

Run in command promp (at project root), the following the command `yarn cypress:open`.<br />
From the prompt window, clic on `Run all specs` button to run the `recovery_password.spec` integration test.

For more information about [cypress UI testing](https://docs.cypress.io/guides/getting-started/installing-cypress.html#Opening-Cypress).

#### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
The app is ready to be deployed!

## Approach

#### Code structure (architecture)

The project has been structured in a way to assure a well-folder structure, easy to read, quick understanding of the structure, scalable and easy to maintain in future.<br />

You can notice this aspects through:

##### Code flexibility and easy maintenability

The following illustrate that aspects.

###### Components Design

Their appearance and labels are customizable.

###### Components Reusabilty

The shared components in /src/components/shared have been created with reutilisability aspect in mind.

###### Less coupling more cohesion

-   Separation between services and components logic<br />
-   Use of static file containing all the label and text submitted to change in time. They can be changed without touching the component logic

##### Clean and quality code

You can see that through the using of:

###### Eslint

Eslint help to quickly find errors at the very begining of the project and fix them quickly, and being part of the continuous integration.

###### Clear comments and code indentation

-   `Indentation and comments:` <br />
    All the sources files are well indented and some have clear comments tags at the lines needed.<br />

-   `Use of helpers and Utils:` <br />
    Blocks of code (in components) have been moved to helpers and utils functions in order to reuse them and reduce component logic lines's codes. Thus, this increase the clearness and quality of the code. At the end, we have more design oriented component than logic/functional, reason why I use [JSX](https://reactjs.org/docs/introducing-jsx.html) approach in this project.

#### Testing core dependencies:

-   [Jest](https://jestjs.io/docs/ru/tutorial-react)

-   [Cypress](https://www.cypress.io/)

## Prerequisites

-   `NodeJS >= 10.16.3`
-   `npm >= 6.10.3`
-   `yarn >= 1.16.0`
-   `jest`
-   `cypress`
