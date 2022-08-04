import { useRef } from 'react';
import AboutMe from '../../buttons/AboutMe';
import HomepageShorcut from '../../buttons/HomePageShorcut';
import Login from '../../buttons/Login';
import NavigationMenu from '../../buttons/NavigationMenu';
import SettingsMenu from '../../buttons/SettingsMenu';
import './Header.css';

type HeaderProps = {
  sectionThemes: any;
  generalTheme: any;
  darkTheme: boolean;
  toggleTheme: any;
}

const Header: React.FC<HeaderProps> = ({
  sectionThemes, generalTheme, darkTheme, toggleTheme
}) => {
  return (
    <div className="header-container">
      <div className="header-section-container" id="hsc-left">
        <NavigationMenu sectionThemes={sectionThemes} />
      </div>
      <HomepageShorcut iconColor={sectionThemes.textColor} homepageIcon={"N3K😾"} />
      <div className="header-section-container" id="hsc-right">
        <SettingsMenu
          sectionThemes={sectionThemes}
          darkTheme={darkTheme}
          toggleTheme={toggleTheme}
          iconColor={sectionThemes.textColor}
          settingsMenuIcon={"⚙"}
        />
        <span></span>
        <AboutMe
          iconColor={sectionThemes.textColor}
          aboutMeIcon={"About"}
        />
        <span></span>
        <Login
          iconColor={sectionThemes.textColor}
          loginIcon={"Login"}
        />
        <span></span>
      </div>
    </div>
  );
}

export default Header;