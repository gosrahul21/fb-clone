import React from 'react'
import './Widget.css'
function Widgets() {
    return (
        <div className="widget">
            <iframe className="iframe" src="https://reactjs.org/docs/context.html" title="W3Schools Free Online Web Tutorials"
            width="340"
            height="100%"
            style={{border:"none"}}
            // scrolling = "no"
            frameBorder = "0"
            allowTransparency="true"
            allow = "encrypted-media"
            ></iframe>
        </div>
    )
}

export default Widgets
