import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Gallery.css"

type GalleryProps = {
    theme: any;
}

const defaultGallery: any[] = [];

const Gallery: React.FC<GalleryProps> = ({ theme }) => {
    const [projectCount, setProjectCount] = useState<number>(25);
    const [projectList, setProjectList] = useState<any[]>([]);

    const showProjects = () => {
        const newProjectList: any[] = [];
        for (let i: number = 0; i < projectCount; i++) {
            newProjectList.push(
                // <div className="gallery-card-container" key={i} style={{ border: `1px solid ${theme.borderColor}` }}>
                //     <div className="gallery-card" style={{ backgroundColor: theme.galleryCardBgColor }}></div>
                //     <div className="gallery-info">
                //         <div style={{ width: "100%", height: "100%" }}>
                //             <a href="/">
                //                 {"asjhdjadhjad </>"}
                //             </a>
                //         </div>
                //     </div>
                // </div>
                <GalleryCard
                    key={i}
                    cardBgColor={theme.galleryCardBgColor}
                    borderColor={theme.borderColor}
                    cardName={`oooooooooooooooooooooooooooooo`} // maximum 30 characters
                    primaryLink={`https://github.com`}
                    sourceLink={`https://github.com`}
                />
            );
        }
        setProjectList(newProjectList);
    }

    useEffect(() => {
        showProjects();
    }, [projectCount, theme]);


    return (
        <div className="gallery-container">
            {projectList}
        </div>
    );
}

type GalleryCardProps = {
    cardBgColor: string;
    borderColor: string;
    cardName: string;
    primaryLink: string;
    sourceLink: string;
}

const GalleryCard: React.FC<GalleryCardProps> = ({
    cardBgColor, borderColor, cardName, primaryLink, sourceLink
}) => {
    return (
        <div className="gallery-card-container" style={{ border: `1px solid ${borderColor}` }}>
            <div className="card-thumbnail" style={{ backgroundColor: cardBgColor }}></div>
            <div className="card-info">
                <Link className="card-primary-link" to={primaryLink}
                    onClick={(e) => {
                        e.preventDefault();
                        window.open(primaryLink, "_blank");
                    }}
                >{cardName}
                </Link>
                <Link className="card-source-link" to={sourceLink}
                    onClick={(e) => {
                        e.preventDefault();
                        window.open(primaryLink, "_blank");
                    }}
                >{"</>"}
                </Link>
                <button className="card-edit-button">
                    {"Edit"}
                </button>
            </div>
        </div>
    );
}

export default Gallery;