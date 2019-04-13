# How to Setup the PsychGH Project

## Getting the Project

To get the latest, stable version of the PsychGH project, just run
`git clone https://github.com/TostySSB/psychgh.git`.

## Project Layout

After cloning the repository, you will see that we have two primary folders
in our project: `client` and the root directory in the developement branch.
 -  `/client` contains the react application, so aptly named "client"
    -  `/public` contains all of the bootstrapping code for the React application.
    -  `/src` contains all of PsychGH's logic, components, and style sheets.
    -  `/docs` contains all of the files for the user and developer documentation.
 - `root` this folder is not named root, but instead refers to the root directory. This contains the Express backend application. This is responsible for all of the routing done by the client

## Install Node.js

Navigate to Node.JS's [download page](https://nodejs.org/en/download/current/) and download the appropriate installer for your system. Follow the instructions provided by the installer to fully install Node.js and NPM.

## Working with PsychGH

To run PsychGH in development mode, from within the root directory, use the command `npm install` to install all of the dependencies for the express server.Then navigate to the client directory in a new terminal window and use the command `npm install` to install the client's dependencies. 

Then, from within the 'root' directory, execute the command `npm run dev`. This runs both the express server and the react client concurrently. A browser window will open up to `http://localhost:3000`. This will allow you to view the app running. As you make edits,
this page, as well as the express server, will reload. Linter errors will appear in the developer console.

To test PsychGH, use the command `npm test` in the project directory to launch the test runner. Since we are using React's built-in test runner, see [Facebook's
documentation](https://facebook.github.io/create-react-app/docs/running-tests)
for more information. Automated tests are setup to be run via Travis, and all configuration for Travis can be found in your `.travis.yml` file.

To build PsychGH, use the command `npm run build` from within both the root and the client directory. This builds the app and places the production ready code into the `build` folder it creates inside the project. This command builds optimized and minified javascript that is ready
to be deployed to the live site.

## How to change the contact information

Navigate to client/src/components/layout, and open `Landing.js`. Then proceed to replace the default contact information with your own: `For assistance, please contact us at: tempEmailName@gmail.com`

This is especially `important` as practitioner verification is not handled by this application, and so will be done by those managing the Database to give the user `practitioner privilages`.

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
- [PassportJS](http://www.passportjs.org/) [`Authentication`]
   - PassportJS is what we use to handle `user authentication` and verify routing using `tokens`
- [StoryBook](https://www.learnstorybook.com/react/en/simple-component/) [`Component debugging`]
   - We use `storybook` for testing individual components as we make them, to ensure they work atleast before being added to the larger project. To `use` story book, `cd` into the stories directory in `client` and run the command `'yarn run storybook'`.
- [Jest](https://jestjs.io/) [`Test Cases`]
   -For unit test cases, we use `Jest`, the javascript testing framework that is built into the `creat-react-app` command we used to start this project.

## UML Diagram of the Server-Database structure

![UML Diagram](img/UML.png)

## Debugging Coverage at present:

<!-- ![Debugging Coverage](img/coverage_output.png) -->
----------------------------------|----------|----------|----------|----------|-------------------|
File                              |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
----------------------------------|----------|----------|----------|----------|-------------------|
All files                         |    24.71 |    15.38 |    15.79 |    24.63 |                   |
 src                              |    10.34 |     7.89 |     6.25 |    10.34 |                   |
  App.js                          |       20 |       25 |      100 |       20 |... 48,50,51,53,56 |
  index.js                        |        0 |      100 |      100 |        0 |      1,2,3,4,5,12 |
  serviceWorker.js                |        0 |        0 |        0 |        0 |... 23,130,131,132 |
  store.js                        |      100 |      100 |      100 |      100 |                   |
 src/Views                        |     6.12 |        0 |     4.17 |     6.25 |                   |
  DepressionChart.js              |       50 |      100 |       50 |       50 |                11 |
  DiagnosisChart.js               |     4.55 |        0 |        0 |     4.65 |... 43,144,150,166 |
  PHQ9.js                         |        0 |      100 |        0 |        0 |                 5 |
  PatientExploration.js           |        0 |      100 |        0 |        0 |                 6 |
  Patient_evaluation.js           |        0 |      100 |        0 |        0 |                13 |
 src/Views/Depression             |        0 |      100 |        0 |        0 |                   |
  DepressionChart1.js             |        0 |      100 |        0 |        0 |               1,5 |
  DepressionChart2.js             |        0 |      100 |        0 |        0 |        7,14,19,24 |
  DepressionChart3a.js            |        0 |      100 |        0 |        0 |              7,14 |
  DepressionChart3b.js            |        0 |      100 |        0 |        0 |              7,12 |
  DepressionChart3c.js            |        0 |      100 |        0 |        0 |                 5 |
  DepressionChart4a.js            |        0 |      100 |        0 |        0 |        7,11,16,21 |
  DepressionChart4b.js            |        0 |      100 |        0 |        0 |        7,11,16,21 |
  DepressionChart5a.js            |        0 |      100 |        0 |        0 |                 7 |
  DepressionChart5b.js            |        0 |      100 |        0 |        0 |                 5 |
  DepressionChart5c.js            |        0 |      100 |        0 |        0 |                 5 |
  DepressionChart6a.js            |        0 |      100 |        0 |        0 |                 5 |
  DepressionChart6b.js            |        0 |      100 |        0 |        0 |                 7 |
  DepressionChart6c.js            |        0 |      100 |        0 |        0 |                 7 |
 src/actions                      |    34.62 |      100 |     8.33 |    34.78 |                   |
  authActions.js                  |    26.09 |      100 |     8.33 |       25 |... 47,55,63,65,67 |
  types.js                        |      100 |      100 |      100 |      100 |                   |
 src/components                   |    73.68 |       50 |    71.43 |    81.25 |                   |
  Aux.js                          |       50 |      100 |        0 |      100 |                   |
  LoginIcon.js                    |    85.71 |       50 |      100 |    83.33 |                19 |
  MenuHandler.js                  |       70 |       50 |    66.67 |    77.78 |             16,27 |
 src/components/DiagnosisControls |       40 |      100 |        0 |       40 |                   |
  DiagnosisControl.js             |       50 |      100 |        0 |       50 |                 5 |
  DiagnosisControls.js            |    33.33 |      100 |        0 |    33.33 |               6,7 |
 src/components/UI/Backdrop       |       50 |        0 |        0 |       50 |                   |
  Backdrop.js                     |       50 |        0 |        0 |       50 |                 5 |
 src/components/UI/Modals         |        0 |        0 |        0 |        0 |                   |
  CardModal.js                    |        0 |        0 |        0 |        0 |... 12,126,130,131 |
 src/components/UI/cards          |    41.03 |     62.5 |       40 |    41.03 |                   |
  DiagnosisCard.js                |       70 |     62.5 |      100 |       70 |          16,22,32 |
  DiagnosisCardHeader.js          |        0 |      100 |        0 |        0 |               4,5 |
  DiagnosisControls.js            |        0 |      100 |        0 |        0 |             1,3,4 |
  DummyCard.js                    |    33.33 |      100 |        0 |    33.33 |             21,22 |
  GitHub.js                       |      100 |      100 |      100 |      100 |                   |
  NewDiagnosisChart.js            |        0 |      100 |        0 |        0 |            5,6,13 |
  PatientBio.js                   |      100 |      100 |      100 |      100 |                   |
  SurveyCard.js                   |        0 |      100 |        0 |        0 |... ,5,6,7,8,20,21 |
  readDocs.js                     |      100 |      100 |      100 |      100 |                   |
 src/components/UI/dialogs        |    11.76 |        0 |        0 |     12.5 |                   |
  PatientDialog.js                |    11.76 |        0 |        0 |     12.5 |... 52,55,56,57,63 |
 src/components/UI/forms          |     4.23 |        0 |        0 |     4.35 |                   |
  PHQ9Form.js                     |     4.23 |        0 |        0 |     4.35 |... 72,173,176,177 |
 src/components/UI/grids          |    66.67 |      100 |    66.67 |    55.56 |                   |
  DiagnosisGrid.js                |       50 |      100 |       50 |    33.33 |             12,13 |
  HomePageGrid.js                 |      100 |      100 |      100 |      100 |                   |
  PatientExplorationGrid.js       |       50 |      100 |       50 |    33.33 |             13,14 |
 src/components/UI/tables         |    26.67 |      100 |        0 |    28.57 |                   |
  patientList.js                  |    26.67 |      100 |        0 |    28.57 |... 0,92,95,99,100 |
 src/components/auth              |    43.75 |    42.86 |    42.86 |    46.67 |                   |
  Login.js                        |    41.18 |       50 |    42.86 |    43.75 |... 31,38,42,44,49 |
  Register.js                     |    46.67 |       25 |    42.86 |       50 |... 32,39,43,45,55 |
 src/components/dashboard         |    57.14 |      100 |    33.33 |    66.67 |                   |
  Dashboard.js                    |    57.14 |      100 |    33.33 |    66.67 |               8,9 |
 src/components/layout            |    66.67 |       75 |       40 |    66.67 |                   |
  Landing.js                      |      100 |      100 |      100 |      100 |                   |
  Navbar.js                       |     62.5 |       75 |       25 |     62.5 |          31,35,39 |
 src/components/private-route     |       50 |        0 |        0 |       60 |                   |
  PractitionerRoute.js            |       50 |        0 |        0 |       60 |              7,10 |
  PrivateRoute.js                 |       50 |        0 |        0 |       60 |              7,10 |
 src/reducers                     |       70 |    57.14 |      100 |       70 |                   |
  authReducer.js                  |    66.67 |       50 |      100 |    66.67 |             15,22 |
  errorReducer.js                 |       75 |    66.67 |      100 |       75 |                 8 |
  index.js                        |      100 |      100 |      100 |      100 |                   |
 src/utils                        |       25 |        0 |        0 |       25 |                   |
  setAuthToken.js                 |       25 |        0 |        0 |       25 |             4,6,9 |
----------------------------------|----------|----------|----------|----------|-------------------|

Test Suites: 10 passed, 10 total
Tests:       21 passed, 21 total
Snapshots:   0 total
Time:        19.811s
Ran all test suites.

## User Testing
Post feature release, we decided to have some actual would be users test the application.

User Profiles:
- `User 1:`
	- Full name: Karen Solberg
	- Occupation: Student (Mathematics Major Junior year)
- `User 2:`
	- Full name: Harold Oster
	- Occupation: Infectious disease specialist/general practitioner (Doctor)

**Their Tasks:**

      We asked User 1 to approach the website as a patient. This would include signing up as a patient and checking if they needed an evaluation test, then taking one if necessary. After this simple task, they would be free to explore around the website and try and tell us what features we had implemented for patients to use, thus allowing us to figure out what he was able to figure out intuitively.

      Meanwhile, we asked User 2 to joining the website as a practitioner, which includes signing up normally, then being verified by us as a practitioner before he could have practitioner privileges. After that, he would be tasked with evaluating a patient’s progress and diagnosing the appropriate methods of treatment. Please note, User 2 is a doctor, so they should approach this similarly to how a psychiatric practitioner would in the field. They would then be free to explore what practitioners have access to on the website and tell us what features there were available to him, thus allowing us to figure out what he was able to figure out intuitively.

**User’s Evaluation:**

- User 1
   - Took awhile to find the login page due to the login button being hidden behind a menu button
   - realized they had to register before logging in, and proceeded to do so without any problem
   - Took the evaluation test and submitted the results, though some of the test results were not reported correctly. 
   - Logged out
   - The ‘patient’ understands they can:  View their account, take depression evaluation tests, and log out.

- User 2:
	- Also took awhile to find the register/login page
   - Signed up successfully, we approved them as a Practitioner, & they gained access rights immediately.
   - Was able to add a specific patient just fine, and check their information
   - Was able to navigate to the depression diagnosis chart just fine & decide the next steps in the patient’s treatment accurately.
   - “The Diagnosis page looks bad” (It was a temporary implementation meant to be replaced)
   - Was able to edit the evaluation test
   - ”Wait, I really have to remake everything in the evaluation test each time I edit it?”
   - Was able to edit the diagnosis page with some difficulty.
   - The ‘practitioner’ understands they can: view my patient’s details, Add patients to my patient list, Search for a specific patient, view depression test evaluation results on a patient by patient basis, edit depression test & how it is evaluated.

**What we learned from them:**
- The main page is good for developers, but not so much for general Users right now.
- The header bar should have a series of buttons that are currently under the drop down style menu button. This should be changed for improvements in simplicity of design.
- The depression treatment plan page needs major revamping.
Normal Patients want to be able to view their own data.
They liked the minimalist design, and how simple we kept things.
- The editability of evaluation tests needs improvement.

**What we changed as a result:**
- The header bar now has a series of buttons inplace of a drop down menu.
- Remade the depression treatment plan page, basically redoing that function entirely
- Added ability for patient to view account information
- Updated evaluation tests to report correct values to the database
