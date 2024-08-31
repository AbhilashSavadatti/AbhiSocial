## App.js Documentation

**Table of Contents**

- [Introduction](#introduction)
- [Imports](#imports)
- [Component Function](#component-function)
- [State Management](#state-management)
- [Effects](#effects)
- [Routing](#routing)
- [Theme Management](#theme-management)

### Introduction

This file defines the main `App` component for the application. It handles user authentication, routing, and theme management. 

### Imports

The file imports the following modules:

| Module | Description |
|---|---|
| `Route` & `Routes` | From `react-router-dom` for routing functionality. |
| `./App.css` | For styling the application. |
| `Authentication` | The authentication component for login and signup. |
| `HomePage` | The main home page component. |
| `useDispatch` & `useSelector` | From `react-redux` for interacting with the Redux store. |
| `useEffect` & `useState` | From `react` for managing side effects and component state. |
| `getUserProfile` | From `./Store/Auth/Action` for fetching user profile data. |
| `darkTheme` & `lightTheme` | Custom theme objects for dark and light mode. |
| `Box`, `Button`, `CssBaseline` | From `@mui/material` for styling and layout. |
| `createTheme`, `ThemeProvider` | From `@mui/material/styles` for theme management. |
| `Palette` | From `@mui/icons-material` for the palette icon. |
| `VerifiedSuccess` | The success component for email verification. |
| `Message` | The message component for displaying notifications. |

### Component Function

The `App` function is the main component of the application.

| Function | Description |
|---|---|
| `dispatch` | A function to dispatch actions to the Redux store. |
| `auth` | An object containing authentication state from the Redux store. |
| `jwt` | The JWT token stored in local storage. |
| `currentTheme` | The currently active theme. |
| `theme` | An object containing theme state from the Redux store. |

### State Management

The component manages the following state variables:

| Variable | Description |
|---|---|
| `currentTheme` | Stores the currently active theme, either "dark" or "light." |

### Effects

The component uses two `useEffect` hooks:

| Hook | Description |
|---|---|
| `useEffect 1` |  Fetches the user profile if a JWT token exists in local storage. |
| `useEffect 2` | Updates the `currentTheme` state based on the value stored in local storage. |

### Routing

The component defines the following routes:

| Route | Description |
|---|---|
| `/` | Redirects to the home page if the user is authenticated, otherwise redirects to the authentication page. |
| `/signin` | The login route. |
| `/signup` | The signup route. |
| `/verified` | The email verification success route. |
| `/profile` | **(Commented out)** The user profile page route. |

### Theme Management

The component uses the `ThemeProvider` component from `@mui/material/styles` to manage the theme. The `currentTheme` state determines which theme to apply (either `darkTheme` or `lightTheme`). 
