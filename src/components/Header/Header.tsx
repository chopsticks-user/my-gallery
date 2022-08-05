import { Dispatch, SetStateAction, useRef } from 'react';
import AboutMe from '../../buttons/About';
import HomepageShorcut from '../../buttons/HomePageShorcut';
import Login from '../../buttons/Login';
import NavigationMenu from '../../buttons/NavigationMenu';
import SettingsMenu from '../../buttons/SettingsMenu';
import ToolBar from '../../buttons/ToolBar';
import './Header.css';

type HeaderProps = {
  theme: any;
  darkTheme: boolean;
  toggleTheme: any;
  guest: boolean;
  setGuest: Dispatch<SetStateAction<boolean>>;
  setBackgroundAnimation: Dispatch<SetStateAction<number>>;
}

const Header: React.FC<HeaderProps> = ({
  theme, darkTheme, toggleTheme, guest, setGuest, setBackgroundAnimation
}) => {
  const textColor = "#fff";
  const settingsMenuIcon = "⚙";
  const toolBarMenuIcon = "🔧";
  return (
    <div className="header-container">
      <div className="header-section-container" id="hsc-left">
        <NavigationMenu
          textColor={textColor}
          guest={guest}
          setGuest={setGuest}
          setBackgroundAnimation={setBackgroundAnimation}
        />
      </div>
      <HomepageShorcut textColor={textColor} homepageIcon={"GALLERY"} />
      <div className="header-section-container" id="hsc-right">
        <SettingsMenu
          textColor={textColor}
          darkTheme={darkTheme}
          toggleTheme={toggleTheme}
          settingsMenuIcon={settingsMenuIcon}
          guest={guest}
        />
        <span></span>
        {
          !guest ? <ToolBar
            textColor={textColor}
            toolBarMenuIcon={toolBarMenuIcon}
          /> : <></>
        }
        <span></span>
      </div>
    </div>
  );
}

export default Header;