import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { connect} from 'react-redux';
import _ from 'lodash';
import { setCourseVideo } from '../../../../../../redux/user/actions';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    marginBottom: '1%'
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

const PlaylistCard = (props) => {
  const classes = useStyles();
  const { module, user, course, setCourseVideo } = props;



  const Subscribed_Course = _.find(user.Subscribed_Courses, (o) => _.includes(o.course, course.id));
  let a = Subscribed_Course.Modules_Viewed;
  let b = _.find(a, (o) => _.includes(o, module.playlist_id));

  const selectVideo = async (e,i,c) => {
    e.preventDefault();

    const f = {
      About: module.About,
      Description: module.Description,
      Title: module.Title,
      playlist_id: module.playlist_id,
      Viewed_Videos: []
    };

    let d = _.find(a, (o) => _.includes(o, module.playlist_id));
    let g = _.find(d && d.Viewed_Videos, (o) => _.includes(o, i.mediaid));

    if(!d){
      a.push(f);
    }

    if(!g){
      if(d){
        await d.Viewed_Videos.push(i);
      } 
    }

    await setCourseVideo(i, user, g);
    return;
  };

  console.log({ b });
  console.log({ a });

  return (
    <div className={classes.root}>
      <Accordion defaultExpanded={true}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>{module.Title}</Typography>
        </AccordionSummary>
        {module.playlist  && module.playlist.map((i,index) => {
          const c = _.find(b && b.Viewed_Videos, (o) => _.includes(o, i.mediaid));
          return (
            <AccordionDetails>
              <FormControlLabel
                aria-label="Acknowledge"
                onClick={(e) => selectVideo(e,i,c)}
                control={<Checkbox />}
                label={i.title}
                checked={c ? true : false}
              />
            </AccordionDetails>
          );
        })}
      </Accordion>
    </div>
  );
};

const mapStateToProps = ({ users, main }) => {
  const { user, course_video } = users;
  return { course_video, user };
};
const mapActionsToProps = {
  setCourseVideo
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(PlaylistCard);