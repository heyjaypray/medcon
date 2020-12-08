import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import axios from 'axios';
import db_url from '../../../../../../redux/db_url';

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

export default function PlaylistCard(props) {
  const classes = useStyles();

  const { module, index } = props;

  const [playlist, setPlaylist] = useState(null);

  const playlist_id = module.playlist_id;

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


  console.log({ playlist });
  return (
    <div className={classes.root}>
      <Accordion defaultExpanded={index === 0 ? true : false}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>{module.Title}</Typography>
        </AccordionSummary>
        {playlist && playlist.playlist && playlist.playlist.map((i,index) => {
          return (
            <AccordionDetails>
              <FormControlLabel
                aria-label="Acknowledge"
                onClick={(event) => event.stopPropagation()}
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
}