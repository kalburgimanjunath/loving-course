import { useState } from "react";
import { Header } from "./components";
import "./App.css";
import Menu from "./components/menu";
// import { Home } from "./pages";
import Start from "./pages/start";

function App() {
  return (
    <div className="mt-10">
      <Header />
      {/* <Home /> */}
      <Start />
    </div>
  );
}

export default App;
