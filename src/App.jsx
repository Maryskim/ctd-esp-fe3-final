
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import "./index.css";
import React, { useState} from "react";

export const themes = {
  light:{
    font: "black",
    background: "white",
  },

  dark: {
    font: "white",
    background: "black",
  },
};



function App() {


    const [theme, setTheme] = useState (themes.light);
  
    const handleChangeTheme = () => {
  theme === themes.dark ? setTheme (themes.light) : setTheme (themes.dark);
    };

  return (
      <div className="App">
          <Navbar onClick = {handleChangeTheme} theme={theme}/>
          <Outlet />
          <Footer/>
      </div>
  );
}

export default App;