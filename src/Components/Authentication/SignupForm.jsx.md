## Signup Form Component Documentation

### Table of Contents

| Section | Description |
|---|---|
| **Overview** | General information about the component. |
| **Dependencies** | List of external libraries used. |
| **Props** |  No props are used in this component. |
| **State** |  List of states used in the component. |
| **Methods** | Description of the methods used in the component. |
| **Usage** | Instructions on how to use the component. |

### Overview

The `SignupForm` component is a React component responsible for handling user registration. It provides a form with fields for full name, email, password, and date of birth, and submits the data to the backend using the `registerUser` action from the Redux store.

### Dependencies

The following external libraries are used in the `SignupForm` component:

| Library | Description |
|---|---|
| `@mui/material` | Material UI components for the form elements. |
| `formik` | A library for handling forms and validation. |
| `react` | The React library. |
| `react-redux` | Library for connecting React components to a Redux store. |
| `yup` | A library for defining validation schemas. |

### State

The `SignupForm` component uses the `useFormik` hook to manage the form state. The initial state is defined as follows:

| Field | Initial Value |
|---|---|
| `fullName` | `""` |
| `email` | `""` |
| `password` | `""` |
| `dateOfBirth` | `{ day: "", month: "", year: "" }` |

### Methods

**`handleDateChange`:** This method updates the `dateOfBirth` state in the `formik` object when the user changes the day, month, or year in the date of birth select fields.

**`handleSubmit`:** This method is called when the user submits the form. It performs the following actions:

1. Extracts the `day`, `month`, and `year` values from the `dateOfBirth` state.
2. Combines these values into a string in the format `YYYY-MM-DD`.
3. Updates the `dateOfBirth` state with the combined date string.
4. Logs the entire form values to the console.
5. Dispatches the `registerUser` action to the Redux store with the form values as payload.

### Usage

The `SignupForm` component can be used in any React application where user registration is required. To use the component, simply import it into your desired component and render it:

```jsx
import SignupForm from './SignupForm';

const MyComponent = () => {
  return (
    <div>
      <SignupForm />
    </div>
  );
};

export default MyComponent;
```

The component will render a form with the following fields:

* Full Name
* Email
* Password
* Date of Birth (Day, Month, Year)

The user can fill in the form and submit it. Once submitted, the form data will be sent to the backend for registration.
