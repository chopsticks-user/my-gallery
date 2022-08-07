import React, { ReactElement, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GalleryCardInformation } from "../../App";
import "./Gallery.css"

type GalleryProps = {
    theme: any;
    guest: boolean;
    galleryCardDisplayInfoList: GalleryCardInformation[];
}

const Gallery: React.FC<GalleryProps> = ({
    theme, guest, galleryCardDisplayInfoList
}) => {
    const cardList: ReactElement<GalleryCardProps>[] = galleryCardDisplayInfoList
        .map((value, index) => {
            return <GalleryCard
                key={index}
                guest={guest}
                cardBgColor={theme.galleryCardBgColor}
                borderColor={theme.borderColor}
                cardName={value.displayedName}
                thumbnail={value.displayedThumbnail}
                primaryLink={value.primaryLink}
                sourceLink={value.sourceLink}
            />
        });
    return (
        <div className="gallery-container"
            style={{
                backgroundColor: theme.bgColorFallback,
                background: theme.backgroundColor
            }}>
            {cardList}
        </div>
    );

}

// const showCards = () => {
//     const newcardList: ReactElement<GalleryCardProps>[] = [];
//     for (let i: number = 0; i < cardCount; i++) {
//         newcardList.push(
//             <GalleryCard
//                 key={i}
//                 guest={guest}
//                 cardBgColor={theme.galleryCardBgColor}
//                 borderColor={theme.borderColor}
//                 cardName={collection[i].displayedName}
//                 thumbnail={collection[i].displayedThumbnail}
//                 primaryLink={collection[i].primaryLink}
//                 sourceLink={collection[i].sourceLink}
//             />
//         );
//     }
// }

// useEffect(() => {
//     showCards();
// }, [cardCount, theme]);

type GalleryCardProps = {
    guest: boolean;
    cardBgColor: string;
    borderColor: string;
    cardName: string;
    thumbnail: any;
    primaryLink: string;
    sourceLink: string;
}

export const GalleryCard: React.FC<GalleryCardProps> = ({
    guest, cardBgColor, borderColor, cardName, thumbnail, primaryLink, sourceLink
}) => {
    return (
        <div className="gallery-card-container" style={{ border: `1px solid ${borderColor}` }}>
            <div className="card-thumbnail"
                style={{
                    backgroundColor: "black"
                }}></div>
            <div className="card-info">
                <a className="card-primary-link" href={primaryLink}
                    onClick={(e) => {
                        e.preventDefault();
                        window.open(primaryLink, "_blank");
                    }}
                >{cardName}
                </a>
                <span></span>
                <a className="card-source-link" href={sourceLink}
                    onClick={(e) => {
                        e.preventDefault();
                        window.open(primaryLink, "_blank");
                    }}
                >{"</>"}
                </a>
                <span></span>
                {
                    !guest ? <button
                        className="card-edit-button"
                        style={{ backgroundColor: "transparent" }}>
                        {"Edit"}
                    </button> : <></>
                }
            </div>
        </div>
    );
}

export default Gallery;