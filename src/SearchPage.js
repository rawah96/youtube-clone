import React from 'react'
import './SearchPage.css'
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined'
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow.js'
import logo from "./logo192.png"
function SearchPage() {
    return (
        <div className="search-pg">
            <div className="filter-icon">
                <TuneOutlinedIcon/>
                <h2>FILTER</h2>
            </div>
            <hr/>

            <ChannelRow
            img = {logo}
            channel="Rawah Alsinan"
            verified
            subs="1000,000"
            vids={100}
            description="Great Projects for your Portfolio!"
            />
            <hr/>
            <VideoRow
            views="1.5M views"
            subs="700K"
            description="Building awesome projects to add to your portfolio!"
            timeStamp="1 day ago"
            channel="React Devs"
            title="let's build projects with react!!"
            image={logo}
            />
            <VideoRow
            views="1.5M views"
            subs="700K"
            description="Building awesome projects to add to your portfolio!"
            timeStamp="1 day ago"
            channel="React Devs"
            title="let's build projects with react!!"
            image={logo}
            />
            <VideoRow
            views="1.5M views"
            subs="700K"
            description="Building awesome projects to add to your portfolio!"
            timeStamp="1 day ago"
            channel="React Devs"
            title="let's build projects with react!!"
            image={logo}
            />
            <VideoRow
            views="1.5M views"
            subs="700K"
            description="Building awesome projects to add to your portfolio!"
            timeStamp="1 day ago"
            channel="React Devs"
            title="let's build projects with react!!"
            image={logo}
            />
            <VideoRow
            views="1.5M views"
            subs="700K"
            description="Building awesome projects to add to your portfolio!"
            timeStamp="1 day ago"
            channel="React Devs"
            title="let's build projects with react!!"
            image={logo}
            />
            <VideoRow
            views="1.5M views"
            subs="700K"
            description="Building awesome projects to add to your portfolio!"
            timeStamp="1 day ago"
            channel="React Devs"
            title="let's build projects with react!!"
            image={logo}
            />
            <VideoRow
            views="1.5M views"
            subs="700K"
            description="Building awesome projects to add to your portfolio!"
            timeStamp="1 day ago"
            channel="React Devs"
            title="let's build projects with react!!"
            image={logo}
            />

            
        </div>
    )
}

export default SearchPage
