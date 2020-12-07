import React, { useState } from 'react';
import ReactJWPlayer from 'react-jw-player';

const VideoPlayer = (props) => {

  return (
    <div>
      <ReactJWPlayer
        playerId='vWNdCs80'
        playerScript='https://cdn.jwplayer.com/libraries/vWNdCs80.js'
        file='https://cdn.jwplayer.com/videos/eLvtfp5m-rw5vNhWd.mp4'
      />
    </div>
  );
};

export default VideoPlayer;