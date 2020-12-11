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

  const [video, setVideo] = useState(null)

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
      const b = course && course.Modules && course.Modules[0];
      const c = {
        About: b.About,
        Description: b.Description,
        Title: b.Title,
        playlist_id: b.playlist_id,
        Viewed_Videos: [b.playlist[0]]
      };
      a.Modules_Viewed.push(c);
      selectVideo(b, user, a);
    } if(a && a.Modules_Viewed && a.Modules_Viewed.length > 0) {
      const d = a.Modules_Viewed
      const e = d && d[d.length -1].Viewed_Videos
      const f = e[e.length-1]
      if(f) {
        setVideo(f)
      }
    }
  },[Subscribed_Course, course, selectVideo, user]);


  console.log({ video })

  if(video){
    return (
      <Container>
        <h1>{props.course && props.course.Title}</h1>
        <ReactJWPlayer
          playerId='vWNdCs80'
          playerScript='https://cdn.jwplayer.com/libraries/vWNdCs80.js'
          file={video && video.sources[video.sources.length-1].file}
        />
        
        <p>{props.course && props.course.Description}</p>
      </Container>
    );
  } return (
    <div>Loading</div>
  )
  
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