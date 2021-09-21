import React from 'react'
import './Widget.css'
function Widgets() {
    return (
        <div className="widget">
            <iframe src="https://www.facebook.com/CleverProgrammerr/"
            width="340"
            height="100%"
            style={{border:"none",overflow:"hidden"}}
            scrolling = "no"
            frameBorder = "0"
            allowTransparency="true"
            allow = "encrypted-media"
            ></iframe>
        </div>
    )
}

export default Widgets
