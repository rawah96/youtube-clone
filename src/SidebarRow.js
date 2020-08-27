import React from 'react'
import './SidebarRow.css';
function SidebarRow({selected, Icon, title}) {
    /* the selected says:
    if selected, then add the selected class (in css)
    selected = true
    */
    return (
        <div className={`sidebarRow ${selected && "selected"}`}>
            <Icon className="sidebarRow-icon"/>
            <h2 className="sidebarRow-title">{title}</h2>
        </div>
    )
}

export default SidebarRow
