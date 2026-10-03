import { createContext, useContext, useState } from "react";

const UserContext = createContext();

const users = {
  user1: {
    email: "Sincere@april.biz",
    password: "Gwenborough",
  },
};

export const UserProvider = ({ children }) => {
  let savedPassword = localStorage.getItem("password") || "";
  let savedEmail = localStorage.getItem("email") || "";
  const [password, setPassword] = useState(savedPassword);
  const [email, setEmail] = useState(savedEmail);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirm, setConfirm] = useState(false);
  const passwordHandler = (e) => {
    setPassword(e.target.value);
    localStorage.setItem("password", e.target.value);
  };
  const emailHandler = (e) => {
    setEmail(e.target.value);
    localStorage.setItem("email", e.target.value);
  };
  const submitHandler = () => {
    if (email !== users.user1.email) {
      setEmailError("Email you entered is incorrect");
    } else {
      setEmailError("");
    }
    if (password !== users.user1.password) {
      setPasswordError("Password you've entered is incorrect");
    } else {
      setPasswordError("");
    }

    if(email === users.user1.email && password === users.user1.password){
        setConfirm(true)
    }
  };
  return (
    <UserContext.Provider
      value={{
        submitHandler,
        email,
        emailHandler,
        password,
        passwordHandler,
        passwordError,
        emailError,
        confirm,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
