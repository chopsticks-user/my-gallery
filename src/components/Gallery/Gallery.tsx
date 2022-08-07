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
                borderColor={theme.borderColor}
                displayInfo={value}
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

type GalleryCardProps = {
    guest: boolean;
    borderColor: string;
    displayInfo: GalleryCardInformation;
}

export const GalleryCard: React.FC<GalleryCardProps> = ({
    guest, borderColor, displayInfo
}) => {
    return (
        <div className="gallery-card-container" style={{ border: `1px solid ${borderColor}` }}>
            <div className="card-thumbnail"
                style={{
                    backgroundColor: "black"
                }}></div>
            <div className="card-info">
                <a className="card-primary-link" href={displayInfo.primaryLink}
                    onClick={(e) => {
                        e.preventDefault();
                        window.open(displayInfo.primaryLink, "_blank");
                    }}
                >{displayInfo.name}
                </a>
                <span></span>
                <a className="card-source-link" href={displayInfo.sourceLink}
                    onClick={(e) => {
                        e.preventDefault();
                        window.open(displayInfo.primaryLink, "_blank");
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