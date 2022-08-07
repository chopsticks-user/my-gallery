import React from 'react'

type ToolBarProps = {
    textColor: string;
    toolBarMenuIcon: string;
    addNewCard: any;
}

const ToolBar: React.FC<ToolBarProps> = ({
    textColor, toolBarMenuIcon, addNewCard
}) => {
    const addNewCardIcon = "+";
    return (
        <div className="setting-container header-right-element">
            <button className="header-dropdown-menu-button hrdmb-settings"
                style={{
                    color: textColor
                }}>
                <span>{toolBarMenuIcon}</span>
            </button>
            <ul className="header-dropdown-item-container hdic-settings" id="hdic-toolbar">
                <li className="header-dropdown-item setting-item">
                    <button
                        className="change-theme-button"
                        style={{ color: textColor, fontSize: "30px" }}
                        onClick={() => addNewCard({
                            name: "maximum 30 characters maximum 30", // maximum 30 characters
                            thumbnail: "",
                            primaryLink: `https://github.com`,
                            sourceLink: `https://github.com`
                        })}
                    >{addNewCardIcon}
                    </button>
                </li>
                <li className="header-dropdown-item setting-item">
                    <button
                        className="change-theme-button"
                        style={{ color: textColor, fontSize: "30px" }}
                    >
                    </button>
                </li>
            </ul>
        </div>
    );
}

export default ToolBar;