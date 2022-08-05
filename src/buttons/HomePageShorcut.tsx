import React from 'react'

type HomepageShorcutProps = {
  textColor: string;
  homepageIcon: string;
}

const HomepageShorcut: React.FC<HomepageShorcutProps> = ({
  textColor, homepageIcon
}) => {
  return (
    <div className="header-homepage-shortcut-container">
      <a className="header-homepage-link" href="/"
        style={{ color: textColor }}
      >
        {homepageIcon}
      </a>
    </div>
  )
}

export default HomepageShorcut