# How to Setup the PsychGH Project

## Viewing the project
This project is currently hosted on Heroku. Click [here](https://psychgh.herokuapp.com/) to view a live demo of the project.

## Getting the Project

To get the latest, stable version of the PsychGH project, just run
`git clone https://github.com/TostySSB/psychgh.git`.

## Project Layout

After cloning the repository, you will see that we have three primary folders
in our project: `public`, `src`, and `docs`.

 -  `public` contains all of the bootstrapping code for the React application.
 -  `src` contains all of PsychGH's logic, components, and style sheets.
 -  `docs` contains all of the files for the user and developer documentation.

## Working with PsychGH

To run PsychGH in development mode, use the command `npm run dev` and your
browser will open to `http://localhost:3000` with the app running. As you make edits,
this page will reload. Linter errors will appear in the developer console.

If you run into errors while trying to run developement mode, use the command `npm install` in both the `root` directory of the project and the `client` directory.

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

## More Documentation

Visit our [documentation page](https://psychgh.readthedocs.io/en/latest/) for more info on how to use PsychGH
