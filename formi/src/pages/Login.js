import React from "react";
import * as Yup from "yup";
import { useField, useFormik, FormikProvider } from "formik";
import { useNavigate } from "react-router";
import { useAuth } from "../compo/AuthContext";
const schema = Yup.object({
  username: Yup.string("Enter valid username")
    .min(3)
    .required("UserName is necessary"),
  pass: Yup.string("Enter valid Password")
    .min(8)
    .max(20)
    .required("Password is necessary"),
});

const MyText = (props) => {
  const [field, meta] = useField(props);
  return (
    <>
      <input {...field} {...props} />
    </>
  );
};

function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const formik = useFormik({
    initialValues: { username: "", pass: "" },
    onSubmit: (values) => {
      const { username, pass } = values;
      const AllUsers = JSON.parse(localStorage.getItem("users"));
      const existUser = AllUsers.find(
        (val) => val.username === username && val.pass === pass,
      );
      if (existUser) {
        login({ username, pass });
        navigate("/dashboard");
      }
    },
    validationSchema: schema,
  });
  return (
    <div>
      <button onClick={() => navigate("/registration")}>Registration</button>
      <FormikProvider value={formik}>
        <form onSubmit={formik.handleSubmit}>
          <MyText type="text" placeholder="enter Username" name="username" />
          <MyText type="password" placeholder="enter password" name="pass" />
          <button type="submit">Login</button>

          {formik.errors.username && <p>{formik.errors.username}</p>}
          {formik.errors.pass && <p>{formik.errors.pass}</p>}
        </form>
      </FormikProvider>
    </div>
  );
}

export default Login;
