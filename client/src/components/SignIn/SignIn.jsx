import { useState } from "react";
import PropTypes from "prop-types";
import * as Yup from "yup";
import Grid from "@mui/material/Grid2";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import TextField from "@mui/material/TextField";
import Visible from "../common/Visible";
import { withStyles } from "tss-react/mui";
import { Formik, Field, ErrorMessage, Form } from "formik";
import { commonFetch } from "../../utils/services";
const styles = () => ({
  title: { fontStyle: "italic", color: "green" },
  error: { color: "red" },
});

const validationSchema = Yup.object().shape({
  username: Yup.string().required("Username is required."),
});

const SignIn = ({ classes, navigate, handleAddUser }) => {
  const [loader, setLoader] = useState(false);
  const [notFound, setNotFound] = useState(false);

  const submitForm = async ({ username = "" }) => {
    if (notFound) {
      setNotFound(false);
    }
    setLoader(true);
    const result = await commonFetch("GET", `${username}`);
    if (result?.status === "404") {
      setNotFound(true);
    } else {
      handleAddUser(result);
      navigate("/dashboard");
    }
    setLoader(false);
  };

  return (
    <Grid container mt={8} spacing={4} justifyContent="center">
      <Grid container direction="row" spacing={2} alignItems="center">
        <Grid>
          <Typography className={classes.title}>Git-Hub</Typography>
        </Grid>
      </Grid>
      <Grid size={12}>
        <Formik
          initialValues={{ username: "" }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) => {
            setSubmitting(false);
            submitForm(values);
          }}
        >
          {({ values, handleChange, handleBlur, handleSubmit }) => (
            <Form>
              <Grid
                container
                spacing={2}
                direction="column"
                alignItems="center"
              >
                <Grid size={6}>
                  <Field
                    as={TextField}
                    type="text"
                    label="username"
                    name="username"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.username}
                    required
                    fullWidth
                  />
                  <ErrorMessage
                    className={classes.error}
                    name="username"
                    component="div"
                  />
                </Grid>
                <Grid item size={6}>
                  <Button variant="contained" fullWidth onClick={handleSubmit}>
                    <Typography>Login</Typography>
                    <Visible when={loader}>
                      <CircularProgress color="secondary" size={24} />
                    </Visible>
                  </Button>
                </Grid>
                <Visible when={notFound}>
                  <Grid item align="center" size={6}>
                    <Typography color="error">User Not Found</Typography>
                  </Grid>
                </Visible>
              </Grid>
            </Form>
          )}
        </Formik>
      </Grid>
    </Grid>
  );
};

SignIn.propTypes = {
  classes: PropTypes.object,
  navigate: PropTypes.func,
  handleAddUser: PropTypes.func,
};

SignIn.defaultProps = {
  classes: {},
  navigate: () => {},
  handleAddUser: () => {},
};

export default withStyles(SignIn, styles);
