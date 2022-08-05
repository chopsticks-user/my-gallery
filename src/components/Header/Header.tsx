import { useRef } from 'react';
import AboutMe from '../../buttons/AboutMe';
import HomepageShorcut from '../../buttons/HomePageShorcut';
import Login from '../../buttons/Login';
import NavigationMenu from '../../buttons/NavigationMenu';
import SettingsMenu from '../../buttons/SettingsMenu';
import './Header.css';

type HeaderProps = {
  theme: any;
  darkTheme: boolean;
  toggleTheme: any;
}

const Header: React.FC<HeaderProps> = ({
  theme, darkTheme, toggleTheme
}) => {
  const textColor = "#fff";
  return (
    <div className="header-container">
      <div className="header-section-container" id="hsc-left">
        <NavigationMenu textColor={textColor} />
      </div>
      <HomepageShorcut textColor={textColor} homepageIcon={"GALLERY"} />
      <div className="header-section-container" id="hsc-right">
        <SettingsMenu
          textColor={textColor}
          darkTheme={darkTheme}
          toggleTheme={toggleTheme}
          settingsMenuIcon={"⚙"}
        />
        <span></span>
        <AboutMe
          textColor={textColor}
          aboutMeIcon={"About"}
        />
        <span></span>
        {/* <Login
          textColor={textColor}
          loginIcon={"Login"}
        />
        <span></span> */}
      </div>
    </div>
  );
}

export default Header;