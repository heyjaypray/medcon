import React, { useState, useEffect } from 'react';
import ReactJWPlayer from 'react-jw-player';
import AboutPage from './About';
import {Container} from 'reactstrap';
import { connect } from 'react-redux';

const VideoPlayer = (props) => {


  const { courseVideo } = props;
  return (
    <Container>
      <h1>{props.course && props.course.Title}</h1>
      <ReactJWPlayer
        playerId='vWNdCs80'
        playerScript='https://cdn.jwplayer.com/libraries/vWNdCs80.js'
        file={courseVideo && courseVideo.sources && courseVideo.sources[courseVideo.sources.length - 1].file}
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