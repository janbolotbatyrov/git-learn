import React from "react";
import { BrowserRouter, Link, Redirect, Route, Switch } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Navbar from "./components/UI/Navbar/Navbar";

import "./styles/App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <AppRouter />
    </BrowserRouter>
  );
};

export default App;
