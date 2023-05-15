# CIIN

This project was created with vite.

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.


### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `npm run lint`

 Lets you execute linting from the terminal.

## Installation process

- Run `npm i` to install all dependencies
- Rename .env.exemple file to .env
- Start project with `npm run dev`

## Dependencies

- [React router dom](https://reactrouter.com/en/main) library to manage routing for React web applications
- [Iconoir](https://iconoir.com/) library to manage icons for React web applications


## Directory Structure

    .
    ├
    └── src
        ├── assets
        ├── components
        ├── pages
        ├── services
        ├── store
        ├── utils
        ├── hooks
        ├── store
        ├── App.tsx
        └── main.tsx

- The assets folder contains all of the project's static files, such as your logo, fonts and images.
- Components folder contains a bit collection of UI codes such as buttons, forms, avatars, and so on.
- The pages folder contains all your React application's web pages.
- Services folder contains code that allows you to interact with external API resources.
- The utils folder contains reusable function snippets for performing quick tasks like text truncation or down casing.
- Hooks folder contains codes and logic that can be reused across multiple components.
- The store folder houses your state management files, such as Redux,Contexts which are used to make certain functions and variables available throughout your application.
- App.tsx The main component of your React application. This file connects all components and views.
- main.tsx file is the React application's entry point. It is responsible for bootstrapping the React library and mounting it on the root element.
