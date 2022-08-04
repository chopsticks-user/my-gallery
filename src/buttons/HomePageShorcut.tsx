import React from 'react'

type HomepageShorcutProps = {
    iconColor: string;
    homepageIcon: string;
}

const HomepageShorcut:React.FC<HomepageShorcutProps> = ({
    iconColor, homepageIcon
}) => {
  return (
    <div className="header-homepage-shortcut-container">
    <a className="header-homepage-link" href="/"
      style={{ color: iconColor }}
    >
      {homepageIcon}
    </a>
  </div>
  )
}

export default HomepageShorcut