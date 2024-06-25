import { useState } from "react";
import { Header } from "./components";
import "./App.css";
import Menu from "./components/menu";
// import { Home } from "./pages";
import Start from "./pages/start";
import Footer from "./components/footer";

function App() {
  return (
    <div className="mt-10">
      <Header />
      {/* <Home /> */}
      <Start />
      <Footer />
    </div>
  );
}

export default App;
