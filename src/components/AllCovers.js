import React from 'react';
import { Grid } from '@material-ui/core';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Loader from './Loader';
import CoverFunctional from './CoverFunctional';

const AllCovers = props => {
  const { bookCovers } = props;
  //   console.log(Object.keys(bookCovers));
  //   return <div>Hi</div>;

  return Object.keys(bookCovers).length ? (
    <div>
      <Grid
        container
        spacing={10}
        justify='center'
        style={{ position: 'absolute' }}
      >
        {bookCovers.map((cover, ind) => {
          return (
            <CSSTransition
              in={true}
              appear={true}
              timeout={600}
              key={ind}
              classNames='fade'
            >
              <CoverFunctional imageUrl={cover.imageUrl} />
            </CSSTransition>
          );
        })}
      </Grid>
    </div>
  ) : (
    <Loader />
  );
};

export default AllCovers;
