import React, { useState } from 'react'
import TreeView from './treeView'

export default function TreeItem({label, children, onClick}){

    const [expanded, setExpanded] = useState(false)

    function handleClick(e){
        e.stopPropagation()
        setExpanded(!expanded)
    }

    return (
        <li onClick={onClick}>
            {children && <button onClick={handleClick}>{expanded? '-' : '+'}</button>}
            {label}
            {children && expanded && <ul>{children}</ul>}
        </li>
    )
}
