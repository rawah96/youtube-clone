import React from 'react'
import Avatar from '@material-ui/core/Avatar';
/* video components that takes a 1. title 2. channel 3. # of views
4. time stamp 5. display img 6. channel img
*/
function Video({image, title, channel, views, timestamp, channelImage}) {
    return (
        <div className="video">
            <img src={image} alt=""/>
            <div className="vid-info">
                <Avatar className="vid-avatar" alt={channel} src={channelImage}/>
                <div className="vid-text">
                    <h4>{title}</h4>
                    <p>{channel}</p>
                    <p>{views} . {timestamp}</p>
                </div>
            </div>
        </div>
    )
}

export default Video
