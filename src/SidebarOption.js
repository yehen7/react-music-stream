import React from 'react'
import './SidebarOption.css'

function SidebarOption({option,Icon}) {
    return (
        <div className="sidebaroption">
            {Icon && <Icon className="icon_class"/>}
            {Icon ? <h4>{option}</h4> : <p>{option}</p>}
            
        </div>
    )
}

export default SidebarOption
