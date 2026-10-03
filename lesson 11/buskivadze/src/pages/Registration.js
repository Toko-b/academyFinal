import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useFormik, useField, FormikProvider } from "formik";
import * as Yup from "yup";

const schema = Yup.object({
  username: Yup.string("Enter valid username").min(1).required("username is required"),
  pass: Yup.string("Enter valid password")
    .min(8).max(20)
    .required("Password is required"),
});

const MyTextField = (props) => {
  const [field, meta] = useField(props);
  return (
    <>
      <input {...field} {...props} />
    </>
  );
};

function Register() {
  const [username, setUserName] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: { username: "", pass: "" },
    onSubmit: (values) => {
      const {username, pass} = values
      if(username){
        let userMassive = JSON.parse(localStorage.getItem("users")) || [];
        const existUser = userMassive.find((val) => val.username === username)
        if(existUser){
          alert("user alredy exists")
          return
        }
        let newUser = {username, pass}
        userMassive.push(newUser)
        localStorage.setItem("users", JSON.stringify(userMassive))
        navigate("/")
      }
    },
    validationSchema: schema,
  });
  return (
    <div>
      Register
      <FormikProvider value={formik}>
        <form onSubmit={formik.handleSubmit}>
          <MyTextField
            type="text"
            placeholder="enter Username"
            name="username"
          />
          <MyTextField
            type="password"
            placeholder="enter password"
            name="pass"
          />

          <button type="submit">registrate</button>

          {formik.errors.username && <p>{formik.errors.username}</p>}
          {formik.errors.pass && <p>{formik.errors.pass}</p>}
        </form>
      </FormikProvider>
    </div>
  );
}

export default Register;

// Field instead of inputs
