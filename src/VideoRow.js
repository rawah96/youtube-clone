import React from 'react'
import './VideoRow.css';

function VideoRow({views, subs, desc, timeStamp, channel, title, image}) {
    return (
        <div className="vid-row">
            <img src={image} alt=""/>
            <div className="vid-row-text">
                <h3>{title}</h3>
                <p className="headline">{channel} <span className="subs"> . {subs} </span> Subscribers {views} views . {timeStamp}</p>
                <p className="desc">{desc}</p>
            </div>
        </div>
    )
}

export default VideoRow
