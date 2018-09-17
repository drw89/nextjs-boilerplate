# dashboard-boilerplate

[![Greenkeeper badge](https://badges.greenkeeper.io/drw89/test-domi.svg)](https://greenkeeper.io/)

A simple React boilerplate used for creating any kind of dashboard interacting with the micro-services architecture at Interdiscount.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

You have to install these applications to run the dashboard.

- [Node.js 8.11 (LTS)](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/lang/en/)

### Installing

Follow this step by step guide to get the dashboard up and running. First of all, clone the repository:
```
git clone http://yves.beutler@bitbucket:7990/scm/dash/dashboard-boilerplate.git
```

Then you need to download all dependencies:
```
yarn install
```

Finally, you can run the dashboard boilerplate in development mode:
```
yarn run dev
```

Visit http://localhost:3000 to see the dashboard.

## Running the tests

We use [Jest](https://jestjs.io/en/) as our testing platform. Every file with the postfix `test.js` will be tested.

To run every single test, please use:
```
yarn run test
```

If you only want to run all files with uncommited changes, use:
```
yarn run test:fast
```

If you want to keep the tests running with every code change, use:
```
yarn run test:watch
```

## Deployment

Follow these steps to deploy the dashboard on a production environment.

### Build the Application

To create all static assets and transpile the code, use:
```
yarn run build
```

### Start in Production Mode

Afterwards you can start the application:
```
yarn run start
```

## Built With

* [React](https://reactjs.org) - The UI library used to create a memorable user experience
* [Next.js](https://nextjs.org) - The lightweight framework for server-side applications
* [SASS](https://sass-lang.com) - The CSS preprocessor to style beautiful components
* [Jest](https://jestjs.io/en) - The handy testing platform used at Facebook
* [Babel](https://babeljs.io/) - The JavaScript compiler to use the newest language features

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.


---
Developed with &hearts; by Interdiscount.