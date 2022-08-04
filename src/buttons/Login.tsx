
type LoginProps = {
    iconColor: string,
    loginIcon: string
}

const Login: React.FC<LoginProps> = ({
    iconColor, loginIcon
}) => {
    return (
        <div className="login-container header-right-element">
            <button className="header-dropdown-menu-button" id="hrdmb-login"
                style={{
                    color: iconColor
                }}>
                {loginIcon}
            </button>
            <ul className="header-dropdown-item-container" id="hdic-login">

            </ul>
        </div>
    );
}

export default Login;