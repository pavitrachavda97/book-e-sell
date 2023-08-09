import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "../../utils/theme";
import "../../assets/css/style.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Registration from "./Registration";

const Register = () => {
  return (
    <ThemeProvider theme={theme}>
      <ToastContainer />
      <Registration />
    </ThemeProvider>
  );
};

export default Register;
