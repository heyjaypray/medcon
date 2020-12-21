import React, { useEffect } from 'react';
import ReactJWPlayer from 'react-jw-player';
import {Container} from 'reactstrap';
import { connect } from 'react-redux';
import { initModules, setCourseVideo, addCourseModule } from '../../../../../../redux/user/actions';
import _ from 'lodash';

const VideoPlayer = (props) => {
  const { course, user, course_video, setCourseVideo, } = props;
  const a = _.find(user && user.Subscribed_Courses, (o) => _.includes(o.course, course && course.id));

  useEffect(() => {
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
      initModules(user, a);
    } if(a && a.Modules_Viewed && a.Modules_Viewed.length > 0) {
      const d = a.Modules_Viewed;
      const e = d && d[d.length -1].Viewed_Videos;
      const f = e[e.length-1];
      if(f) {
        setCourseVideo(f, user, true);
      }
    }
  },[a, course, setCourseVideo, user]);

  if(course_video){
    return (
      <Container>
        <h1>{props.course && props.course.Title}</h1>
        <ReactJWPlayer
          playerId='vWNdCs80'
          playerScript='https://cdn.jwplayer.com/libraries/vWNdCs80.js'
          file={course_video && course_video.sources[course_video.sources.length-1].file}
          // isAutoPlay={true}
        />
        
        <p>{course_video && course_video.title}</p>
      </Container>
    );
  } return (
    <div>Loading</div>
  );
  
};

const mapStateToProps = ({ users, main }) => {
  const { user, course_video } = users;
  return { course_video, user };
};
const mapActionsToProps = {
  initModules,
  setCourseVideo,
  addCourseModule
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(VideoPlayer);