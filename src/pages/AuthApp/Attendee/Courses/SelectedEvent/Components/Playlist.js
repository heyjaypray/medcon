import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import PlaylistCard from './PlaylistCard';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '1070px',
    marginTop: '10%'
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function Playlist(props) {
    
  console.log('props', props);
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
            Lesson Modules
        </Typography>
        <p>75% Completed</p>
        {props.course && props.course.Modules && props.course.Modules.map((i, index) => {
          return <PlaylistCard module={i} index={index} />;
        })}
      </CardContent>
    </Card>
  );
}