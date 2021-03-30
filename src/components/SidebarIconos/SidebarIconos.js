import React from 'react'
import './SidebarIconos.css'

const SidebarIconos = ({Icon,selected,title}) => {
    return (
        <div className={`sidebar__Container ${selected && "selected"}`}>
            <Icon className="sidebar__Icono"/>
            <h2 className="sidebar__Title">{title}</h2>
        </div>
    )
}

export default SidebarIconos

