import React, { useState } from 'react'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

export default function TreeItem({ label, children, onClick, icon }) {

    const [expanded, setExpanded] = useState(false)

    function handleClick(e) {
        e.stopPropagation()
        setExpanded(!expanded)
    }

    return (
        <li onClick={onClick}>
            {label}
            {children && <button onClick={handleClick}>{expanded ? <ExpandLessIcon/> : <ExpandMoreIcon />}</button>}
            {icon}
            {children && expanded && <ul>{children}</ul>}
        </li>
    )
}
