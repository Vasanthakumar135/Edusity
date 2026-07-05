import React, { useEffect, useRef } from 'react'
import './Videoplayer.css'
import video from '../../assets/7971025-uhd_3840_2160_24fps.mp4'

const Videoplayer = ({playState, setPlayState}) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (playState) {
      videoRef.current?.play();
    } else {
      videoRef.current?.pause();
      if (videoRef.current) videoRef.current.currentTime = 0;
    }
  }, [playState]);

  return (
    <div className={`video-player ${playState ? '' : 'hide'}`} onClick={() => setPlayState(false)}>
        <video
          ref={videoRef}
          src={video}
          autoPlay
          muted
          controls
          onClick={(e) => e.stopPropagation()}
        ></video>
    </div>
  )
}

export default Videoplayer