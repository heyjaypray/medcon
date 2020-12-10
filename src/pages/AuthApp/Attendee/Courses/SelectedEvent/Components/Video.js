import React, { useState, useEffect } from 'react';
import ReactJWPlayer from 'react-jw-player';
import AboutPage from './About';
import {Container} from 'reactstrap';
import { connect } from 'react-redux';
import db_url from '../../../../../../redux/db_url';
import axios from 'axios';
import { selectVideo } from '../../../../../../redux/main/actions';

const VideoPlayer = (props) => {
  const { course, index, user, selectVideo } = props;

  console.log( { course });

  const [playlist, setPlaylist] = useState(null);
  const [courseId, setCourseId] = useState(course);

  const Subscribed_Course = user && user.Subscribed_Courses && user.Subscribed_Courses.filter(i => {
    if(course){
      const a = i.course.id;
      const b = course.id;
      return a == b;
    } else {
      return null;
    }
    
  });

  useEffect(() => {

    const a = Subscribed_Course[0];

    if(a && a.Modules_Viewed && a.Modules_Viewed.length < 1){
      const b = course.Modules[0];

      const c = {
        About: b.About,
        Description: b.Description,
        Title: b.Title,
        playlist_id: b.playlist_id,
      };

      a.Modules_Viewed.push(c);

      console.log({ a });
      console.log({ b });
      selectVideo(b, user, a);
    }

  },[Subscribed_Course, course, selectVideo, user]);



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
  const { user } = users;
  return { courseVideo, user };
};
const mapActionsToProps = {
  selectVideo
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(VideoPlayer);