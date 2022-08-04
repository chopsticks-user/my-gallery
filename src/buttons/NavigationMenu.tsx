import React from 'react';

type NavigationMenuProps = {
  sectionThemes: any;
}

const NavigationMenu: React.FC<NavigationMenuProps> = ({
  sectionThemes
}) => {

  return (
    <div className="header-dropdown-menu-container">
      <button className="header-dropdown-menu-button"
        style={{ color: sectionThemes.textColor }}>M</button>
      <ul className="header-dropdown-item-container" id="hdic-left"
        style={{ color: sectionThemes.textColor }}
      >
        {/* <li className="header-dropdown-item" id="hdi-1">
          <a href="/"
            style={{
              color: sectionThemes.textColor,
              textDecoration: "none"
            }}>
            Item 1
          </a>
        </li>
        <li className="header-dropdown-item" id="hdi-2">
          <a href="/"
            style={{
              color: sectionThemes.textColor,
              textDecoration: "none"
            }}>
            Item 2
          </a>
        </li>
        <li className="header-dropdown-item" id="hdi-3">
          <a href="/"
            style={{
              color: sectionThemes.textColor,
              textDecoration: "none"
            }}>
            Item 3
          </a>
        </li>
        <li className="header-dropdown-item" id="hdi-4">
          <a href="/"
            style={{
              color: sectionThemes.textColor,
              textDecoration: "none"
            }}>
            Item 4
          </a>
        </li> */}
      </ul>
    </div>
  );
}

export default NavigationMenu;