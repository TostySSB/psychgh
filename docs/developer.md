# How to Setup the PsychGH Project

## Getting the Project

To get the latest, stable version of the PsychGH project, just run
`git clone https://github.com/TostySSB/psychgh.git`.

## Project Layout

After cloning the repository, you will see that we have two primary folders
in our project: `client` and the root directory.
 -  `/client` contains the react application, so aptly named "client"
    -  `/public` contains all of the bootstrapping code for the React application.
    -  `/src` contains all of PsychGH's logic, components, and style sheets.
    -  `/docs` contains all of the files for the user and developer documentation.
 - `root` this folder is not named root, but instead refers to the root directory. This contains the Express backend application. This is responsible for all of the routing done by the client

## Install Node.js

Navigate to Node.JS's [download page](https://nodejs.org/en/download/current/) and download the appropriate installer for your system. Follow the instructions provided by the installer to fully install Node.js and NPM.

## Working with PsychGH

To run PsychGH in development mode, from within the root directory, use the command `npm install` to install all of the dependencies for the express server. Then execute the command `npm start` to start the backend Express server.

Then navigate to the client directory in a new terminal window and use the command `npm install` to install the client's dependencies. Then execute the command `npm start`. This should open a new browser window to `http://localhost:3000`. This will allow you to view the app running. As you make edits,
this page will reload. Linter errors will appear in the developer console.

To test PsychGH, use the command `npm test` in the project directory to launch
the test runner. Since we are using React's built-in test runner, see [Facebook's
documentation](https://facebook.github.io/create-react-app/docs/running-tests)
for more information. Automated tests are setup to be run via Travis, and all
configuration for Travis can be found in your `.travis.yml` file.

To build PsychGH, use the command `npm run build`. This buil the app and place
the production ready code into the `build` folder it creates inside the
project. This command builds optimized and minified javascript that is ready
to be deployed to the live site.

## Acessing Bug Reports

Visit our [issues site](https://github.com/TostySSB/psychgh/issues) to see a
list of currently open issues.

## Technologies used

- [NodeJS](https://nodejs.org/en/) [`Package Manager`]
   - NodeJS is the package manager of choice for PsychGH, though pip and other means of installing dependencies should work just fine aswell
- [React](https://reactjs.org/) [`Framework`]
   - React is our `JavaScript Library` we chose to use for building the front end UI. We chose react for its ease of use and component-based nature.
- [Express JS](https://expressjs.com/) [`Framework`]
   - Express acts as our `middleware` to verify calls to the database are made by users with the apropriate authority, and to add a layer of security by not directly accessing our database from our application's front end
- [MongoDB](https://www.mongodb.com/) [`Data Base`]
   - We use mongoDB as our database for storing both `practitioner` & `patient` data, as well as all the data required for the psychiatric guide
- [Okta](https://developer.okta.com/) [`Authentication`]
   - Okta is what we use to handle `user authentication` and verify routing using `tokens`

- [Surge](https://surge.sh/) [`Host`]
   - Surge is what we use to `host` PsychGH when it is deployed