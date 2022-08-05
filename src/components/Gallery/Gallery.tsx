import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Gallery.css"

type GalleryProps = {
    theme: any;
    guest: boolean;
}

const defaultGallery: any[] = [];

const Gallery: React.FC<GalleryProps> = ({
    theme, guest
}) => {
    const [cardCount, setCardCount] = useState<number>(25);
    const [cardList, setCardList] = useState<any[]>([]);

    const showCards = () => {
        const newcardList: any[] = [];
        for (let i: number = 0; i < cardCount; i++) {
            newcardList.push(
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
                    guest={guest}
                    cardBgColor={theme.galleryCardBgColor}
                    borderColor={theme.borderColor}
                    cardName={`oooooooooooooooooooooooooooooo`} // maximum 30 characters
                    primaryLink={`https://github.com`}
                    sourceLink={`https://github.com`}
                />
            );
        }
        setCardList(newcardList);
    }

    useEffect(() => {
        showCards();
    }, [cardCount, theme]);


    return (
        <div className="gallery-container">
            {cardList}
        </div>
    );
}

type GalleryCardProps = {
    guest: boolean;
    cardBgColor: string;
    borderColor: string;
    cardName: string;
    primaryLink: string;
    sourceLink: string;
}

export const GalleryCard: React.FC<GalleryCardProps> = ({
    guest, cardBgColor, borderColor, cardName, primaryLink, sourceLink
}) => {
    return (
        <div className="gallery-card-container" style={{ border: `1px solid ${borderColor}` }}>
            <div className="card-thumbnail" style={{ backgroundColor: cardBgColor }}></div>
            <div className="card-info">
                <a className="card-primary-link" href={primaryLink}
                    onClick={(e) => {
                        e.preventDefault();
                        window.open(primaryLink, "_blank");
                    }}
                >{cardName}
                </a>
                <a className="card-source-link" href={sourceLink}
                    onClick={(e) => {
                        e.preventDefault();
                        window.open(primaryLink, "_blank");
                    }}
                >{"</>"}
                </a>
                {
                    !guest ? <button
                        className="card-edit-button">
                        {"Edit"}
                    </button> : <></>
                }
            </div>
        </div>
    );
}

export default Gallery;