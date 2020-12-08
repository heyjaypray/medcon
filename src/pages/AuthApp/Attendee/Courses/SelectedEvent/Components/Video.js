import React, { useState } from 'react';
import ReactJWPlayer from 'react-jw-player';
import AboutPage from './About';

const VideoPlayer = (props) => {

  return (
    <div>
      <h1>{props.course && props.course.Title}</h1>
      <ReactJWPlayer
        playerId='vWNdCs80'
        playerScript='https://cdn.jwplayer.com/libraries/vWNdCs80.js'
        file='https://cdn.jwplayer.com/videos/eLvtfp5m-rw5vNhWd.mp4'
      />
      
      <p>{props.course && props.course.Description}</p>
    </div>
  );
};

export default VideoPlayer;