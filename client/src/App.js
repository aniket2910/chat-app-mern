import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes path="/register"></Routes>
    </BrowserRouter>
  );
}

export default App;
