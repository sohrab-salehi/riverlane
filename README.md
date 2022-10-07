# 💫 Summary

The **circuit visualizer** web application has the ability to generate a quantum circuit based on the provided gate number. Visitors can generate quantum circuits as much as required and switch between them to see the circuit in detail. The circuits list is **temporary** and will refresh after every page reload. To serve appropriate data for a web application, I used **flask_restful**. I do not have any experience in using Flask but I found it a good choice for developing minimal REST API.

### Linter & code formatter
For code formatting, `Eslint` and `Prettier` was used with **Airbnb** config in this project.

### Important libraries
* [Ant design](https://ant.design/)
* [React router v6](https://reactrouter.com/)
* [Axios](https://axios-http.com/)
* [React testing library](https://testing-library.com/docs/react-testing-library/intro/)
* [Sass](https://sass-lang.com/)

This project was developed in response to [Riverlane](https://www.riverlane.com/)'s code challenge for the front-end role.

**This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).**

<br />

## 🏃‍♂️ How to run the project?
---
### Front-end
At first, please route to the project directory and use the commands below to install all the dependencies.
```
npm install
```
or use `yarn`
```
yarn
```
For running the project in development environment use the commands below:
```
npm start
```
or use `yarn`
```
yarn start
```
### Back-end
At the root of backend directory run commands below to install all required packages using `pip`:
```
pip install -r requirments.txt
```
To run server use this command:
```
flask --app app run
```
<br />

## Available Scripts
---
In the project directory, you can run different commands for different purposes.

### 🛠 Run the tests
```
npm run test
```
Launches the test runner in the interactive watch mode and runs unit tests.

### 🏗️ Build the project
```
npm run build
```
Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### 🎛️ Eject webpack configs
```
npm run eject
```

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

<br />

## Logging web vitals
---
You can observe web vitals parameters like cumulative layout shift(CLS) or first input delay(FID) by passing `console.log` function to `reportWebVitals()` in `index.tsx`.

<br />

## Learn More
---
You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).