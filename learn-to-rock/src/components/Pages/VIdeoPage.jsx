import React from "react";
import VideoOne from '../../assets/videos/matrix1980.mp4';

const VideoPage = () => {
    return(
        <div className="vh-100">
            <video  src={VideoOne} autoPlay loop muted />
                {/*<source src={VideoOne} type="video/mp4"/>*/}
        </div>
    );
}

export default VideoPage;