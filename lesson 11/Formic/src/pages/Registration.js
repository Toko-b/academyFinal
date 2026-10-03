import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useFormik } from "formik";
import * as Yup from "yup";

const schema = Yup.object({
  username: Yup.string("Enter valid username").required("username is required"),
  pass: Yup.string("Enter valid password").max(5).required("Password is required"),
});

function Register() {
  const [username, setUserName] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: { username: "", pass: "" },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: schema,
  });

    // console.log(schema);
  //   const submitHandler = (e) => {
  //     e.preventDefault();
  //     if (username) {
  //       let userMassive = JSON.parse(localStorage.getItem("users")) || [];
  //       const existUser = userMassive.find(
  //         (value) => value.username === username,
  //       );
  //       if (existUser) {
  //         alert("user alredy exists");
  //         return;
  //       }
  //       let newUser = { username, pass };
  //       userMassive.push(newUser);
  //       localStorage.setItem("users", JSON.stringify(userMassive));
  //       navigate("/");
  //     }
  //   };
  return (
    <div>
      Register
      <form onSubmit={formik.handleSubmit}>
        <input
          type="text"
          placeholder="enter Username"
          value={formik.values.username}
          onChange={formik.handleChange}
          name="username"
        />
        <input
          type="password"
          placeholder="enter password"
          value={formik.values.pass}
          onChange={formik.handleChange}
          name="pass"
        />

        <button type="submit">registrate</button>

        {formik.errors.username && (<p>{formik.errors.username}</p>)}
        {formik.errors.pass && (<p>{formik.errors.pass}</p>)}
      </form>
    </div>
  );
}

export default Register;

// Field instead of inputs