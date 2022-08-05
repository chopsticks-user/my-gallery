import React from 'react';

type NavigationMenuProps = {
  textColor: any;
}

const NavigationMenu: React.FC<NavigationMenuProps> = ({ textColor }) => {

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
            Item 1
          </a>
        </li>
        <li className="header-dropdown-item" id="hdi-2">
          <a href="/"
            style={{
              color: textColor,
              textDecoration: "none"
            }}>
            Item 2
          </a>
        </li>
        <li className="header-dropdown-item" id="hdi-3">
          <a href="/"
            style={{
              color: textColor,
              textDecoration: "none"
            }}>
            Item 3
          </a>
        </li>
        <li className="header-dropdown-item" id="hdi-4">
          <a href="/"
            style={{
              color: textColor,
              textDecoration: "none"
            }}>
            Item 4
          </a>
        </li>
      </ul>
    </div>
  );
}

export default NavigationMenu;