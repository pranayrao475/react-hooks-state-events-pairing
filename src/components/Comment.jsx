import React from "react";
//import video from "../data/video.js";

function Comment(props) {
    return (
        <>
        <h3>{props.user}</h3>
        <p>{props.text}</p>
        </>
    )
}

export default Comment;