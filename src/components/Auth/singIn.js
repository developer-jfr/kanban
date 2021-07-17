import React from "react";
import { Formik, Field, Form } from "formik";

import { connect, useDispatch, useSelector } from "react-redux";
import { loginUsersThunk } from "../../redux/auth-reducer";
import { Link, Redirect } from "react-router-dom";
import {
  Container,
  Grid,
  Typography
} from '@material-ui/core';
import Textfield from './../Form/FormsUI/Textfield/index';
import Button from "./../Form/FormsUI/Button/index";
import * as Yup from "yup";
import MainHeader from "../Header/MainHeader";





const INITIAL_FORM_STATE = {
  username: "",
  password: "",
};

const FORM_VALIDATION = Yup.object().shape({
  username: Yup.string() 
  .required('Username can not be empty')
  .max(15),
  password: Yup.string().required("Password can not be empty"),
});

const SignIn = ({isLogined, showAlert}) => {
  const dispacth = useDispatch()
const submit = (values) => {
  dispacth(loginUsersThunk(values.username, values.password))
}

if(isLogined) {
  return <Redirect to={'/task'} />
}




  return (
    <>
      {showAlert && (
      <div class="alert alert-danger" role="alert">
      Incorresct email or password.Please try again
    </div>
      )}
      <Grid item xs={12}>
        <MainHeader />
      </Grid>
      <div >
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
                          <h1>Sign In</h1>
                        </Typography>
                      </Grid>

                      <Grid item xs={12}>
                        <Textfield name="username" label="Username" />
                      </Grid>

                      <Grid item xs={12}>
                        <Textfield
                          name="password"
                          label="Password"
                          type="password"
                        />
                      </Grid>

                      <Grid item xs={12}>
                        <Button>Submit Form</Button>
                      </Grid>
                      <div style={{padding: '10px 0px 0px 10px'}}>
                        <Button><Link to={'/signup'}>Sign Up</Link></Button>
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

const mstp = (state) => {
  return {
    isLogined: state.users.isLogined,
    showAlert: state.users.showAlert
  }
}

export default connect(mstp, null)(SignIn);
