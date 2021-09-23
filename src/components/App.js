import { useState } from "react";
import video from "../data/video.js";
import Header from "./Header.jsx";
//import Buttons from "./Buttons.jsx";
import CommentContainer from "./CommentContainer.jsx";
import Comment from "./Comment"

function App(props) {
  console.log("Here's your data:", video);

  const [visible, setVisible] = useState(false);
  return (
    <div className="App">
            <iframe
        width="919"
        height="525"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />

      <Header video={video.embedUrl} title={video.title} views={video.views} uploaded={video.createdAt}
      />
      {/* <Buttons /> */}
      {visible ? <Comment /> : null}
      
      <button onClick={()=> setVisible (!visible)}>{visible ? "Show Comments" : "Hide Comments"}</button>
      <CommentContainer comments={video.comments}/>
      
      
    </div>
  );
}

export default App;