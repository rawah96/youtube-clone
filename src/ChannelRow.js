import React from 'react'
import './ChannelRow.css'
import Avatar from '@material-ui/core/Avatar'
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

function ChannelRow({img, channel, verified, subs, vids, description}) {
    return (
        <div className="channelRow">
            <Avatar className="channelrow-logo" img src={img}/>
            
            <div className="channelRow-text">
                {channel} {verified && <CheckCircleOutlineIcon/>}

                <p>{subs} subscribers . {vids} videos</p>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default ChannelRow
