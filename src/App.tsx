import React, { useEffect, useState, useRef } from "react";
import Header from "./components/Header";
import LoadingPage from "./components/LoadingPage";
import Gallery from "./components/Gallery";

const themes = {
  dark: {
    // backgroundColor: "linear-gradient(to right, #232526, #2e2e2e, #2e2e2e, #232526)",
    backgroundColor: "#1f1d1d",
    bgColorFallback: "#1f1d1d",
    textColor: "#fff",
    borderColor: "#1a2f2e",
    galleryCardBgColor: "#000",
    galleryCardInfoBgColor: {pl: "#7F7FD5", sl: "#86A8E7", ed: "#91EAE4"}
  },
  light: {
    backgroundColor: "linear-gradient(to right, #cfdef3, #e0eafc, #cfdef3)",
    bgColorFallback: "#e0eafc",
    textColor: "rgb(37, 37, 37)",
    borderColor: "#8e9eab",
    galleryCardBgColor: "#fff",
    galleryCardInfoBgColor: {pl: "#7F7FD5", sl: "#86A8E7", ed: "#91EAE4"}
  }
};

type GalleryCardInformation = {
  displayedName: string;
  displayedThumbnail: any;
  primaryLink: string;
  sourceLink: string;
}

type userBasicInfo = {
  isAdministrator: boolean;
  displayedName: string;
  gallery: GalleryCardInformation[];
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
    isAdministrator: false,
    displayedName: "",
    gallery: [{
      displayedName: "",
      displayedThumbnail: "",
      primaryLink: "",
      sourceLink: ""
    }]
  },
  settingInfo: {
    darkTheme: true,
    backgroundAnimation: 0
  }
}

const userInfo = {
  basicInfo: {
    isAdministrator: true,
    displayedName: "Frost",
    gallery: [{
      displayedName: "",
      displayedThumbnail: "",
      primaryLink: "",
      sourceLink: ""
    }]
  },
  settingInfo: {
    darkTheme: true,
    backgroundAnimation: 1
  }
}

const App = () => {
  const [guest, setGuest] = useState<boolean>(false);

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
  const [displayedGallery, setDisplayedGallery] = useState<GalleryCardInformation[]>(
    guest ? defaultUserInfo.basicInfo.gallery : userInfo.basicInfo.gallery
  );

  useEffect(() => {
    setTheme(darkTheme ? themes.dark : themes.light);
    if (!guest) {
      userInfo.settingInfo.darkTheme = darkTheme;
    }
    if (userInfo.basicInfo.isAdministrator) {
      defaultUserInfo.settingInfo.darkTheme = darkTheme;
    }
    console.log(userInfo);
  }, [darkTheme]);

  useEffect(() => {
    if (userInfo.basicInfo.isAdministrator) {
      defaultUserInfo.basicInfo.gallery = displayedGallery;
    }
    userInfo.basicInfo.gallery = displayedGallery;
  }, [displayedGallery]);

  const toggleTheme = (): void => {
    setDarkTheme(darkTheme => !darkTheme);
  }

  const editGallery = (newDisplayedGallery: any): void => {
    setDisplayedGallery(newDisplayedGallery);
  }

  const editCard = (modifiedCard: any): void => {

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
          guest={guest}
        />
      </div>
      <LoadingPage />
      {<div className="create-new-card-window"></div>}
      {<div className="edit-card-window"></div>}
    </>
  );
}

export default App;
