import React, { useState } from "react";
import { useAuth } from "../components/AuthContext";
import { useField, useFormik, FormikProvider } from "formik";
import { Link, useNavigate } from "react-router";
import * as Yup from "yup";

const schema = Yup.object({
  username: Yup.string("Enter valid username")
    .min(1)
    .required("username is required"),
  pass: Yup.string("Enter valid password")
    .min(8)
    .max(20)
    .required("Password is required"),
});

const MyTextField = (props) => {
  const [field, meta] = useField(props);
  return (
    <>
      <input {...field} />
    </>
  );
};

function Login() {
  const [username, setUserName] = useState("");
  const [pass, setPass] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: { username: "", pass: "" },
    onSubmit: (values) => {
      const { username, pass } = values;
      if (values.username === username && values.pass === pass) {
        const allUser = JSON.parse(localStorage.getItem("users")) || []
        const existUser = allUser.find(
          (values) => values.username === username && values.pass === pass,
        );
        if (existUser) {
          login({ username, pass });
          navigate("/dashboard");
        }
      }
    },
    validationSchema: schema
  });

  return (
    <div>
      Login
      <FormikProvider value={formik}>
        <form onSubmit={formik.handleSubmit}>
          <MyTextField
            type="text"
            placeholder="enter username"
            name="username"
          />{" "}
          <MyTextField
            type="password"
            placeholder="enter password"
            name="pass"
          />
          <button type="submit">Login</button>

          {formik.errors.username && <p>{formik.errors.username}</p>}
          {formik.errors.pass && <p>{formik.errors.pass}</p>}
        </form>
      </FormikProvider>
      <button>
        <Link to="/registration">Register</Link>
      </button>
    </div>
  );
}

export default Login;
