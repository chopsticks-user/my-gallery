import React, { useEffect, useState, useRef } from "react";
import Header from "./components/Header";
import LoadingPage from "./components/LoadingPage";
import Gallery from "./components/Gallery";

const sectionThemes = {
  header: {
    textColor: "#fff"
  },
  debugView: {
    contentFontSize: "14px",
  },
  workspace: {
    scriptFontSize: "15px",
    indexScriptSpacing: "1rem",
    focusedLineBorder: "1px solid #505558",
    focusedlineIndexColor: "red"
  }
}

const generalThemes = {
  dark: {
    backgroundColor: "#1a1c1e",
    sectionHeaderColor: "#252525",
    textColor: "#fff",
    // textColor: "rgb(220, 220, 220)",
    hoveredTextColor: "#fff"
  },
  light: {
    backgroundColor: "#fff",
    // backgroundColor: "rgb(228, 217, 217)",
    sectionHeaderColor: "rgb(211, 203, 203)",
    // textColor: "#222",
    textColor: "rgb(37, 37, 37)",
    hoveredTextColor: "#fff"
  }
};

const App = () => {
  const defaultsectionThemes = sectionThemes;
  const defaultgeneralTheme = generalThemes.dark;
  let currentSectionThemes = defaultsectionThemes;
  const [generalTheme, setGeneralTheme] = useState<any>(defaultgeneralTheme);
  const [darkTheme, setDarkTheme] = useState<boolean>(true);

  useEffect(() => {
    setGeneralTheme(darkTheme ? generalThemes.dark : generalThemes.light);
  }, [darkTheme]);

  const toggleTheme = () => {
    setDarkTheme(darkTheme => !darkTheme);
  }

  return (
    <>
      <div className="page-container">
        <Header
          sectionThemes={currentSectionThemes.header}
          generalTheme={generalTheme}
          darkTheme={darkTheme}
          toggleTheme={toggleTheme}
        />
        <Gallery />
      </div>
      <LoadingPage />
    </>
  );
}

export default App;
