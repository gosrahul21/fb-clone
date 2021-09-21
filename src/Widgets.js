import React from 'react'
import './Widget.css'
function Widgets() {
    return (
        <div className="widget">
            <iframe className="iframe" src="https://reactjs.org/docs/context.html" title="W3Schools Free Online Web Tutorials"
            width="340"
            // height="100%"
            style={{border:"none"}}
            // scrolling = "no"
            frameBorder = "0"
            allowTransparency="true"
            allow = "encrypted-media"
            ></iframe>
           <iframe width="340" height="315" src="https://www.youtube.com/embed/nthoDssMPSo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    )
}

export default Widgets
