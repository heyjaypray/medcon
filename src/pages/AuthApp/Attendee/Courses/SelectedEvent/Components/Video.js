import React, { useState, useEffect } from 'react';
import ReactJWPlayer from 'react-jw-player';
import AboutPage from './About';
import {Container} from 'reactstrap';
import { connect } from 'react-redux';
import db_url from '../../../../../../redux/db_url';
import axios from 'axios';

const VideoPlayer = (props) => {
  const { course, index } = props;

  const [playlist, setPlaylist] = useState(null);

  const playlist_id = course && course.Modules && course.Modules[0].playlist_id;

  useEffect(() => {
    console.log(playlist_id);
    if(playlist_id){
      axios.get(`https://cdn.jwplayer.com/v2/playlists/${playlist_id}`)
        .then(res => {
          const course = res.data;
          setPlaylist(course);
        });
    };
  },[playlist_id]);



  console.log('playlistttt', course);
  return (
    <Container>
      <h1>{props.course && props.course.Title}</h1>
      <ReactJWPlayer
        playerId='vWNdCs80'
        playerScript='https://cdn.jwplayer.com/libraries/vWNdCs80.js'
        playlist={playlist && playlist.playlist}
      />
      
      <p>{props.course && props.course.Description}</p>
    </Container>
  );
};

const mapStateToProps = ({ users, main }) => {
  const { courseVideo } = main;
  return { courseVideo };
};
const mapActionsToProps = {

};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(VideoPlayer);