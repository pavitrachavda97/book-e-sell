import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "../../utils/theme";
import "../../assets/css/style.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Index } from "./Index";

const login = () => {
  return (
    <ThemeProvider theme={theme}>
      <ToastContainer />
      <Index />
    </ThemeProvider>
  );
};

export default login;
