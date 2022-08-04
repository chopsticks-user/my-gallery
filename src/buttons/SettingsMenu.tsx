import { ReactElement, useRef } from "react";

type SettingsMenuProps = {
    sectionThemes: any;
    darkTheme: boolean;
    toggleTheme: any;
    iconColor: string;
    settingsMenuIcon: string;
}

const SettingsMenu: React.FC<SettingsMenuProps> = ({
    sectionThemes, darkTheme, toggleTheme, iconColor, settingsMenuIcon
}) => {
    const themeIcons = { dark: "🌙", light: "⛅" }
    const themeIconRef = useRef<string>(darkTheme ? themeIcons.dark : themeIcons.light);

    const changeTheme = () => {
        themeIconRef.current = !darkTheme ? themeIcons.dark : themeIcons.light;
        toggleTheme();
    }

    return (
        <div className="setting-container header-right-element">
            <button className="header-dropdown-menu-button" id="hrdmb-settings"
                style={{
                    color: iconColor
                }}>
                <span>{settingsMenuIcon}</span>
            </button>
            <ul className="header-dropdown-item-container" id="hdic-settings">
                <li className="header-dropdown-item setting-item">
                    <button className="change-theme-button"
                        onClick={() => {
                            themeIconRef.current = !darkTheme ? themeIcons.dark : themeIcons.light;
                            toggleTheme();
                        }}>
                        {themeIconRef.current}
                    </button>
                </li>
                <li className="header-dropdown-item setting-item">
                    <button className="change-language-button"
                        style={{
                            color: sectionThemes.textColor,
                        }}>
                        {"EN"}
                    </button>
                </li>
                <li className="header-dropdown-item setting-item">
                    <button className="change-font-size-button"
                        style={{
                            color: sectionThemes.textColor,
                        }}>
                        {"🖋"}
                    </button>
                </li>
            </ul>
        </div>
    );
}

export default SettingsMenu;