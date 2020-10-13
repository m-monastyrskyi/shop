import React from 'react';
import "./MenuItem.styles.scss"
import {Link} from "react-router-dom";

const MenuItem = ({title, imageUrl, linkUrl, size}) => {
    return (
        <Link to={linkUrl} className={`menu-item ${size}`}>
            <div className="background-image" style={{
                backgroundImage: `url(${imageUrl})`
            }}/>
            <div className="content">
                <h1 className="title">{title}</h1>
                <span className="subtitle">SHOP NOW</span>
            </div>
        </Link>
    );
};

export default MenuItem;