import React, { useEffect, useState } from "react";
import "./Gallery.css"

type GalleryProps = {
    theme: any;
}

const Gallery: React.FC<GalleryProps> = ({ theme }) => {
    const [projectCount, setProjectCount] = useState<number>(25);
    const [projectList, setProjectList] = useState<any[]>([]);

    const showProjects = () => {
        const newProjectList: any[] = [];
        for (let i = 0; i < projectCount; i++) {
            newProjectList.push(
                <div key={i} style={{border: `1px solid ${theme.borderColor}`}}>
                    <div></div>
                    <span></span>
                </div>
            );
        }
        setProjectList(newProjectList);
    }

    useEffect(() => {
        showProjects();
    }, [projectCount, theme]);


    return (
        <div
            className="gallery-container"
        >
            {projectList}
        </div>
    );
}

export default Gallery;