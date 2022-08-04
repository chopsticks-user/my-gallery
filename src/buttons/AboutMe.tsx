
type AboutMeProps = {
    iconColor: any;
    aboutMeIcon: string;
}

const AboutMe: React.FC<AboutMeProps> = ({
    iconColor, aboutMeIcon
}) => {
    return (
        <div className="about-container header-right-element">
            <button id="hrdmb-about" style={{ color: iconColor }}>
                <a href="/about-me"
                    style={{
                        color: iconColor, textDecoration: "none"
                    }}>
                    {aboutMeIcon}
                </a>
            </button>
        </div>
    );
}

export default AboutMe;