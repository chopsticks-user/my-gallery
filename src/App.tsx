import React, { useEffect, useState, useRef } from "react";
import Header from "./components/Header";
import LoadingPage from "./components/LoadingPage";
import Gallery from "./components/Gallery";

const themes = {
  dark: {
    backgroundColor: "#1a1c1e",
    textColor: "#fff",
    borderColor: "#1a2f2e",
    galleryCardBgColor: "#000"
  },
  light: {
    backgroundColor: "#fff",
    textColor: "rgb(37, 37, 37)",
    borderColor: "#000",
    galleryCardBgColor: "gray"
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
      <div className="page-container" style={{ backgroundColor: theme.backgroundColor }}>
        <Header
          theme={theme}
          darkTheme={darkTheme}
          toggleTheme={toggleTheme}
        />
        <Gallery
          theme={theme}
        />
      </div>
      <LoadingPage />
      {<div className="create-new-card-window"></div>}
      {<div className="edit-card-window"></div>}
    </>
  );
}

export default App;
