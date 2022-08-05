import React, { Dispatch, SetStateAction } from 'react';

type NavigationMenuProps = {
  textColor: any;
  guest: boolean;
  setGuest: Dispatch<SetStateAction<boolean>>;
  setBackgroundAnimation: Dispatch<SetStateAction<number>>;
}

const NavigationMenu: React.FC<NavigationMenuProps> = ({
  textColor, guest, setGuest, setBackgroundAnimation
}) => {

  return (
    <div className="header-dropdown-menu-container">
      <button className="header-dropdown-menu-button"
        style={{ color: textColor }}>M</button>
      <ul className="header-dropdown-item-container" id="hdic-left"
        style={{ color: textColor }}
      >
        <li className="header-dropdown-item" id="hdi-1">
          <a href="/"
            style={{
              color: textColor,
              textDecoration: "none"
            }}>
            {"Login"}
          </a>
        </li>
        <li className="header-dropdown-item" id="hdi-2">
          <a href="/"
            style={{
              color: textColor,
              textDecoration: "none"
            }}>
            {"Background Animation"}
          </a>
        </li>
        <li className="header-dropdown-item" id="hdi-3">
          <a href="/"
            style={{
              color: textColor,
              textDecoration: "none"
            }}>
            {"Contact"}
          </a>
        </li>
        <li className="header-dropdown-item" id="hdi-4">
          <a href="/"
            style={{
              color: textColor,
              textDecoration: "none"
            }}>
            {"About"}
          </a>
        </li>
      </ul>
    </div>
  );
}

export default NavigationMenu;