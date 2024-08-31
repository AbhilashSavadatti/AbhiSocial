# Authentication Component Documentation 

## Table of Contents 

* **1. Overview**
* **2. Component Structure**
    * **2.1. State**
    * **2.2. Functions**
        * **2.2.1. `handleAuthModelClose`**
        * **2.2.2. `handleAuthModelOpen`**
        * **2.2.3. `loginWithGoole`**
* **3. Usage** 

## 1. Overview 

The `Authentication` component is responsible for handling user authentication flow. It provides a user-friendly interface for both signing up and signing in using Google accounts. It also displays a visually appealing background image.

## 2. Component Structure 

The `Authentication` component is built using `React` and `MUI` material library. It utilizes `react-router-dom` for navigation, `redux` for state management, and `@react-oauth/google` for Google authentication. 

### 2.1. State

| State Variable | Description |
|---|---|
| `authModelOpen` | A boolean value that determines the visibility of the `AuthModel` component. |

### 2.2. Functions

#### 2.2.1. `handleAuthModelClose`

This function is triggered when the user closes the `AuthModel` component. It sets the `authModelOpen` state to `false` and navigates to the root path (`/`). 

```javascript
  const handleAuthModelClose = () => {
    setAuthModelOpen(false);
    navigate("/");
  };
```

#### 2.2.2. `handleAuthModelOpen`

This function is triggered when the user clicks on either the "Sign Up" or "Sign In" buttons. It sets the `authModelOpen` state to `true` and navigates to the specified path (`/signup` or `/signin`).

```javascript
  const handleAuthModelOpen = (path) => {
    setAuthModelOpen(true);
    navigate(path);
  };
```

#### 2.2.3. `loginWithGoole`

This function handles the Google login process. It dispatches the `loginWithGoogleAction` with the user's Google account information. 

```javascript
  const loginWithGoole = (res) => {
    console.log("res : ", res);
    dispatch(loginWithGoogleAction(res));
    // return
  };
```


## 3. Usage 

The `Authentication` component can be imported and used in other React components. 

```javascript
import Authentication from "./Authentication";

// ... other code

<Authentication />
```

The component renders the following elements:

* A visually appealing background image.
* A form with Google sign-in button and "Create Account" and "Sign In" buttons.
* The `AuthModel` component which handles user registration and login forms. 
