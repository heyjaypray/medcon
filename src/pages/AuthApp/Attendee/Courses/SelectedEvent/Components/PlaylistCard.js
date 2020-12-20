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
  const { module, user, course, setCourseVideo, module_index } = props;

  const [Course, setCourse] = useState(null);
  const [Module, setModule] = useState(null);


  useEffect(() => {
    const a = _.find(user.Subscribed_Courses, (o) => _.includes(o.course, course.id));
    const b = a.Modules_Viewed;
    const c = _.find(b, (o) => _.includes(o, module.playlist_id));
    setCourse(a);
    setModule(c);
  }, [user.Subscribed_Courses, course.id, module.playlist_id]);


  const selectVideo = async (e,i,c) => {
    e.preventDefault();

    // console.log({ Module });

    if(!Module){
      const f = {
        About: module.About,
        Description: module.Description,
        Title: module.Title,
        playlist_id: module.playlist_id,
        Viewed_Videos: [i]
      };

      await setCourse({
        ...Course,
        Modules_Viewed: [...Course.Modules_Viewed, f]
      });
      await setModule(f);
    } else { 
      console.log('hey==>>>>', i, 'vieddd==>>', Module.Viewed_Videos);
      //const a = _.find(Module && Module.Viewed_Videos, (o) => _.includes(o, i.mediaid));
      const selectedModuleIndex = Course?.Modules_Viewed.findIndex(m => m.playlist_id === i.feedid);
      const a = (Course?.Modules_Viewed[selectedModuleIndex]?.Viewed_Videos || []).some(v => v.mediaid === i.mediaid);

      //const b = _.find(Course.Modules_Viewed, (o) => _.includes(o, module.playlist_id));

      console.log('a==>>>', Course, 'iiii', i);

      console.log({ a });

      if(!a){

        //console.log(Course.Modules_Viewed);


        setCourse({
          ...Course,
          Modules_Viewed: Course.Modules_Viewed.map(j => {
            console.log('module', Module);
            console.log('jjj', j);
            if(j.playlist_id !== Module.playlist_id){
              return j;
            } else{
              return {
                ...j, Viewed_Videos: [...j.Viewed_Videos, i]
              };
            }
          })
        });
      }
    }

    // await setCourseVideo(i, user, g);
    return;
  };

  console.log({ Course });

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
          // const c = _.find(b && b.Viewed_Videos, (o) => _.includes(o, i.mediaid));
          return (
            <AccordionDetails>
              <FormControlLabel
                aria-label="Acknowledge"
                onClick={(e) => selectVideo(e,i)}
                control={<Checkbox />}
                label={i.title}
                // checked={c ? true : false}
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