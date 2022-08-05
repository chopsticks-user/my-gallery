import React, { useEffect, useState, useRef } from "react";
import Header from "./components/Header";
import LoadingPage from "./components/LoadingPage";
import Gallery from "./components/Gallery";

const themes = {
  dark: {
    backgroundColor: "#1a1c1e",
    textColor: "#fff",
    borderColor: "#fff",
    galleryCardBgColor: ""
  },
  light: {
    backgroundColor: "#fff",
    textColor: "rgb(37, 37, 37)",
    borderColor: "#000"
  }
};

const App = () => {
  const [theme, setTheme] = useState<any>(themes.dark);
  const [darkTheme, setDarkTheme] = useState<boolean>(true);

  useEffect(() => {
    setTheme(darkTheme ? themes.dark : themes.light);
  }, [darkTheme]);

  const toggleTheme = () => {
    setDarkTheme(darkTheme => !darkTheme);
  }

  return (
    <>
      <div className="page-container" style={{backgroundColor: theme.backgroundColor}}>
        <Header
          theme={theme}
          darkTheme={darkTheme}
          toggleTheme={toggleTheme}
        />
        <Gallery
          theme={theme}
        />
      </div>
      <div className="tool-bar"></div>
      <LoadingPage />
    </>
  );
}

export default App;
