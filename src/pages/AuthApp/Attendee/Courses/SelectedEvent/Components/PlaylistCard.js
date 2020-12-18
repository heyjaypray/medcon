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

  const { module, module_index, user, course } = props;

  const Subscribed_Course = _.find(user.Subscribed_Courses, (o) => _.includes(o.course, course.id));

  const a = Subscribed_Course.Modules_Viewed;

  const b = _.filter(a, (o) => _.includes(o, module.playlist_id));
  console.log({ b });




  
  return (
    <div className={classes.root}>
      <Accordion defaultExpanded={b ? true : false}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>{module.Title}</Typography>
        </AccordionSummary>
        {module.playlist  && module.playlist.map((i,index) => {
          return (
            <AccordionDetails>
              <FormControlLabel
                aria-label="Acknowledge"
                onClick={() => console.log('event', i)}
                onFocus={(event) => event.stopPropagation()}
                control={<Checkbox />}
                label={i.title}
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
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(PlaylistCard);