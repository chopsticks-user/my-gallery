
type AboutMeProps = {
    textColor: any;
    aboutMeIcon: string;
}

const AboutMe: React.FC<AboutMeProps> = ({
    textColor, aboutMeIcon
}) => {
    return (
        <div className="about-container header-right-element">
            <button id="hrdmb-about" style={{ color: textColor }}>
                <a href="/about-me"
                    style={{
                        color: textColor, textDecoration: "none"
                    }}>
                    {aboutMeIcon}
                </a>
            </button>
        </div>
    );
}

export default AboutMe;