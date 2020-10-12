import React, {useState} from 'react';
import "./Directory.styles.scss"

import {initialSections} from "./initialSections";
import MenuItem from "../MenuItem";

const Directory = () => {
    const [sections, setSections] = useState(initialSections)

    return (
        <div className="directory-menu">
            {
                sections.map(({title, imageUrl, id, size}) => <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />)
            }
        </div>
    );
};

export default Directory;