import React from "react";
import { useFormik, useField, FormikProvider } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router";

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

function Registration() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: { username: "", pass: "" },
    onSubmit: (values) => {
      const { username, pass } = values;
      const userMassive = JSON.parse(localStorage.getItem("users")) || [];
      const existUser = userMassive.find((val) => val.username === username);
      if (existUser) {
        alert("user alredy exists");
        return;
      }
      const newUser = { username, pass };
      userMassive.push(newUser);
      localStorage.setItem("users", JSON.stringify(userMassive));
      navigate("/");
    },
    validationSchema: schema
  });
  return (
    <div>
      <FormikProvider value={formik}>
        <form onSubmit={formik.handleSubmit}>
          <MyText type="text" placeholder="Enter Username" name="username" />
          <MyText type="password" placeholder="Enter Password" name="pass" />
          <button type="submit">Register</button>

          {formik.errors.username && <p>{formik.errors.username}</p>}
          {formik.errors.pass && <p>{formik.errors.pass}</p>}
        </form>
      </FormikProvider>
    </div>
  );
}

export default Registration;
