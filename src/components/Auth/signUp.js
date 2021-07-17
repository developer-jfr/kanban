import React from "react";
import { Formik, Field, Form } from "formik";
import Textfield from './../Form/FormsUI/Textfield/index';
import Button from "./../Form/FormsUI/Button/index";
import * as Yup from "yup";
import {
  Container,
  Grid,
  Typography
} from '@material-ui/core';
import MainHeader from "../Header/MainHeader";
import { useDispatch, useSelector } from "react-redux";
import { createUsersThunk } from "../../redux/auth-reducer";
import { Link, Redirect } from "react-router-dom";


const INITIAL_FORM_STATE = {
  username: "",
  email: "",
  password: "",
};

const FORM_VALIDATION = Yup.object().shape({
  username: Yup.string()
  .required("Username can not be empty"),
  email: Yup.string()
  .required("Email can not be empty"),
  password: Yup.string()
  .required("Password can not be empty"),
});


const SignUp = () => {
  const dispatch = useDispatch();
  const isAuthorized = useSelector(state => state.users.isAuthorized);

 if(isAuthorized) {
    return  <Redirect to='/signin'/>
 }

const submit = (values) => {
  dispatch(createUsersThunk(values.username, values.email, values.password))
}

  return (
    <>
    <Grid item xs={12}>
    <MainHeader />
  </Grid>
<div>
  
  <Grid container>

    <Grid item xs={12}>
      <Container maxWidth="md">
        <div>
          <Formik
            initialValues={{
              ...INITIAL_FORM_STATE,
            }}
            validationSchema={FORM_VALIDATION}
            onSubmit={submit}
          >
            <Form>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography>
                    <h1>Sign Up</h1>
                  </Typography>
                </Grid>

                <Grid item xs={12}>
                  <Textfield name="username" label="Username" />
                </Grid>

                <Grid item xs={12}>
                  <Textfield name="email" label="Email" />
                </Grid>

                <Grid item xs={12}>
                  <Textfield name="password" label="Password" type='password' />
                </Grid>

                <Grid item xs={12}>
                  <Button>Submit Form</Button>
                </Grid>
                <div style={{padding: '10px 0px 0px 10px'}}>
                        <Button><Link to={'/signin'}>Sign In</Link></Button>
                      </div>
              
              </Grid>
            </Form>
          </Formik>
        </div>
      </Container>
    </Grid>
  </Grid>
</div>
</>
  );
};

export default SignUp;
