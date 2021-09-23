import React from "react";
import Buttons from "./Buttons"
import video from "../data/video.js";

function Header() {
    return (
        <div>
            <div>{video.embedUrl}</div>
        <h1>{video.title}</h1>
        <p>{video.views} Views | Uploaded {video.createdAt}</p>
        <Buttons />
        </div>
    )
}

export default Header;