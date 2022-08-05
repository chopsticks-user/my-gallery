import { ReactElement, useRef } from "react";

type SettingsMenuProps = {
    textColor: string;
    darkTheme: boolean;
    toggleTheme: any;
    settingsMenuIcon: string;
}

const SettingsMenu: React.FC<SettingsMenuProps> = ({
    textColor, darkTheme, toggleTheme, settingsMenuIcon
}) => {
    const themeIcons = { dark: "🌙", light: "⛅" }
    const themeIconRef = useRef<string>(darkTheme ? themeIcons.dark : themeIcons.light);

    const changeTheme = () => {
        themeIconRef.current = !darkTheme ? themeIcons.dark : themeIcons.light;
        toggleTheme();
    }

    return (
        <div className="setting-container header-right-element">
            <button className="header-dropdown-menu-button hrdmb-settings"
                style={{
                    color: textColor
                }}>
                <span>{settingsMenuIcon}</span>
            </button>
            <ul className="header-dropdown-item-container hdic-settings">
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
                            color: textColor,
                        }}>
                        {"EN"}
                    </button>
                </li>
                <li className="header-dropdown-item setting-item">
                    <button className="change-font-size-button"
                        style={{
                            color: textColor,
                        }}>
                        {"🖋"}
                    </button>
                </li>
            </ul>
        </div>
    );
}

export default SettingsMenu;