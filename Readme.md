# hospital-api
> The server side for a hospital (only APIs) for the doctors of a Hospital. May be used for testing reports management and quarantine + well being of COVID-19 patients.
> There can be 2 types of Users
  - Doctors
  - Patients
> Doctors can log in. For every patient visit, the doctor can:
  - Register the patient in the app
  - After the checkup, create a Report
s
## Routes
  - /doctors/register
  - /doctors/login
  - /patients/register
  - /patients/:id/create_report
  - /patients/:id/all_reports
  - /reports/:status

## Technologies Used
1.  NodeJS
2.  Express
3.  JOI
4.  MongoDB
5.  Mongoose
6.  jsonwebtoken
7.  bcryptjs
8.  dotenv

## Prerequisites
- Git
- NodeJS
- CLI

## Installation


##### Into the project directory

`cd hospital-api`

##### Installing NPM dependencies

`npm install`

##### Then simply start your app

`npm start`

#### The Server should now be running at http://localhost:3000/

## Folder Structure

hospital-api
├── controllers
│   ├── doctors.js
│   ├── patients.js
│   └── reports.js
├── models
│   ├── Doctor.js
│   ├── Patient.js
│   └── Report.js
├── node_modules
├── routes
│   ├── doctors.js
│   ├── patients.js
│   ├── privateRoute.js
│   └── reports.js
├── .env
├── .gitignore
├── index.js
├── package.json
├── package-lock.json
├── README.md
└── validation.js
