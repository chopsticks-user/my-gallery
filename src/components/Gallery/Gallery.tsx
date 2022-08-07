import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { StringLiteral } from "typescript";
import "./Gallery.css"

type GalleryProps = {
    theme: any;
    guest: boolean;
}

const defaultGallery: any[] = [];

const Gallery: React.FC<GalleryProps> = ({
    theme, guest
}) => {
    const [cardCount, setCardCount] = useState<number>(4);
    const [cardList, setCardList] = useState<any[]>([]);

    const showCards = () => {
        const newcardList: any[] = [];
        for (let i: number = 0; i < cardCount; i++) {
            newcardList.push(
                <GalleryCard
                    key={i}
                    guest={guest}
                    cardBgColor={theme.galleryCardBgColor}
                    cardInfoBgColor={theme.galleryCardInfoBgColor}
                    borderColor={theme.borderColor}
                    cardName={`maximum 30 characters maximum 30`} // maximum 30 characters
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
        <div className="gallery-container"
            style={{
                backgroundColor: theme.bgColorFallback,
                background: theme.backgroundColor
            }}>
            {cardList}
        </div>
    );
}

type GalleryCardProps = {
    guest: boolean;
    cardBgColor: string;
    cardInfoBgColor: {pl: string, sl: string, ed: string};
    borderColor: string;
    cardName: string;
    primaryLink: string;
    sourceLink: string;
}

export const GalleryCard: React.FC<GalleryCardProps> = ({
    guest, cardBgColor, cardInfoBgColor, borderColor, cardName, primaryLink, sourceLink
}) => {
    return (
        <div className="gallery-card-container" style={{ border: `1px solid ${borderColor}` }}>
            <div className="card-thumbnail"
            style={{
                /* backgroundColor:  cardBgColor */
                backgroundColor: "black"
            }}></div>
            <div className="card-info">
                <a className="card-primary-link" href={primaryLink}
                    // style={{fontSize: "14px"}}
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
                >{"  </>  "}
                </a>
                <span></span>
                {
                    !guest ? <button
                        className="card-edit-button"
                        style={{backgroundColor: "transparent"}}>
                        {"Edit"}
                    </button> : <></>
                }
            </div>
        </div>
    );
}

export default Gallery;