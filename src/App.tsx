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

type userBasicInfo = {
  displayedName: string;
  gallery: any;
}

type userSettingInfo = {
  darkTheme: boolean;
  backgroundAnimation: number;
}

type User = {
  basicInfo: userBasicInfo;
  settingInfo: userSettingInfo;
}

const defaultUserInfo: User = {
  basicInfo: {
    displayedName: "",
    gallery: null,
  },
  settingInfo: {
    darkTheme: true,
    backgroundAnimation: 0
  }
}

const userInfo = {
  basicInfo: {
    displayedName: "Frost",
    gallery: null,
  },
  settingInfo: {
    darkTheme: true,
    backgroundAnimation: 1
  }
}

const App = () => {
  const [guest, setGuest] = useState<boolean>(true);

  const [displayedName, setDisplayedName] = useState<string>(
    guest ? defaultUserInfo.basicInfo.displayedName : userInfo.basicInfo.displayedName
  );
  const [backgroundAnimation, setBackgroundAnimation] = useState<number>(
    guest ? defaultUserInfo.settingInfo.backgroundAnimation : userInfo.settingInfo.backgroundAnimation
  );
  const [darkTheme, setDarkTheme] = useState<boolean>(
    guest ? defaultUserInfo.settingInfo.darkTheme : userInfo.settingInfo.darkTheme
  );
  const [theme, setTheme] = useState<any>(darkTheme ? themes.dark : themes.light);
  const [displayedGallery, setDisplayedGallery] = useState<any>(
    guest ? defaultUserInfo.basicInfo.gallery : userInfo.basicInfo.gallery
  );

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
          guest={guest}
          setGuest={setGuest}
          setBackgroundAnimation={setBackgroundAnimation}
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
