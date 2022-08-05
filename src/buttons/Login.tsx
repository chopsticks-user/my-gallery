
type LoginProps = {
    textColor: string,
    loginIcon: string
}

const Login: React.FC<LoginProps> = ({
    textColor, loginIcon
}) => {
    return (
        <div className="login-container header-right-element">
            <button className="header-dropdown-menu-button" id="hrdmb-login"
                style={{
                    color: textColor
                }}>
                {loginIcon}
            </button>
            <ul className="header-dropdown-item-container" id="hdic-login">

            </ul>
        </div>
    );
}

export default Login;