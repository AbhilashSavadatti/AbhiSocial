import {
    Button,
    FormControlLabel,
    Radio,
    RadioGroup,
    TextField,
    Typography,
  } from "@mui/material";
  import { ErrorMessage, Formik, Form, Field } from "formik";
  import React from "react";
import { useDispatch } from "react-redux";
  import * as Yup from "yup";
import { registerUserAction } from "../../Redux/Auth/auth.action";
import { useNavigate } from "react-router-dom";
  
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    gender: "",
  };
  
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    email: Yup.string().email("Invalid email!!!").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least six characters")
      .required("Password is required"),
    gender: Yup.string().required("Gender is required"),
  });
  
  const Register = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const handleSubmit = (values) => {
      console.log("Hande submit:", values);
      dispatch(registerUserAction({
        data:values}))
    };
  
    return (
      <>
        <Formik
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
          initialValues={initialValues}
        >
          {({ setFieldValue }) => (
            <Form className="space-y-5">
              <div className="space-y-5">
                <div>
                  <Field
                    as={TextField}
                    name="firstName"
                    placeholder="First Name"
                    type="text"
                    variant="outlined"
                    fullWidth
                  />
                  <ErrorMessage
                    name="firstName"
                    component="div"
                    className="text-red-500"
                  />
                </div>
                <div>
                  <Field
                    as={TextField}
                    name="lastName"
                    placeholder="Last Name"
                    type="text"
                    variant="outlined"
                    fullWidth
                  />
                  <ErrorMessage
                    name="lastName"
                    component="div"
                    className="text-red-500"
                  />
                </div>
                <div>
                  <Field
                    as={TextField}
                    name="email"
                    placeholder="Email"
                    type="email"
                    variant="outlined"
                    fullWidth
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500"
                  />
                </div>
                <div>
                  <Field
                    as={TextField}
                    name="password"
                    placeholder="Password"
                    type="password"
                    variant="outlined"
                    fullWidth
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-red-500"
                  />
                </div>
                <div>
                  <RadioGroup
                    row
                    aria-label="gender"
                    name="gender"
                    onChange={(e) => setFieldValue("gender", e.target.value)}
                  >
                    <FormControlLabel
                      value="female"
                      control={<Radio />}
                      label="Female"
                    />
                    <FormControlLabel
                      value="male"
                      control={<Radio />}
                      label="Male"
                    />
                  </RadioGroup>
                  <ErrorMessage
                    name="gender"
                    component="div"
                    className="text-red-500"
                  />
                </div>
                <Button
                  sx={{ padding: ".8rem 0rem" }}
                  fullWidth
                  type="submit"
                  variant="contained"
                  color="primary"
                >
                  Register
                </Button>
              </div>
            </Form>
          )}
          
        </Formik>
        <div className="flex gap-2 items-center justify-center pt-5">
        <p>if you already have an account ?</p>
        <Button onClick={()=>navigate("/login")}> Login</Button>
      </div>
        
      </>
    );
  };
  
  export default Register;
  