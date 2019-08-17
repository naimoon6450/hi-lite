import React from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
  CardMedia,
  CardContent,
  CardHeader,
  Typography,
  Fab,
  Grid,
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles({
  root: {
    maxWidth: '400px',
    margin: '1em',
    boxSizing: 'border-box',
  },
  media: {
    height: '200px',
  },
  spacing: {
    margin: '1em',
  },
  grow: {
    flexGrow: 1,
  },
});

const SHFunctional = props => {
  const classes = styles();
  const { title, repText, selText, author, chapter } = props;
  return (
    // <Link to={ modal? } style={{ textDecoration: 'none' }}>
    <Grid item xs={6}>
      <Card className={classes.root}>
        <Grid container>
          <CardHeader
            title={title}
            subheader={author}
            className={classes.grow}
          />
          <CardHeader
            subheader={`To reVisit: ${
              chapter && chapter.toLowerCase().includes('ch') ? chapter : 'N/A'
            }`}
          />
        </Grid>
        {/* <CardMedia image={product.imageUrl} className={classes.media} /> */}
        <CardContent>
          <Typography variant="h6">Selected Text</Typography>
          {selText}
          <Typography variant="h6" style={{ marginTop: '2rem' }}>
            Surrounding Text
          </Typography>
          {repText}
        </CardContent>
      </Card>
    </Grid>
  );
};

export default SHFunctional;
