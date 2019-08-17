import React from 'react';
import { connect } from 'react-redux';
import { Grid } from '@material-ui/core';
import { fetchHighlights } from '../redux/store';
import Loader from './Loader';
import SHFunctional from './SHFunctional';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

class AllHighlights extends React.Component {
  componentDidMount() {
    this.props.fetchHighlights();
    this.toggleClass = this.toggleClass.bind(this);
  }

  toggleClass() {}

  render() {
    const { fetching, highlights, toggleClass } = this.props;
    return (
      <div>
        {fetching ? (
          <Loader />
        ) : (
          <TransitionGroup>
            <Grid
              container
              spacing={10}
              justify="center"
              style={{ position: 'absolute' }}
            >
              {highlights.map((highlight, ind) => {
                return (
                  <CSSTransition
                    in={true}
                    appear={true}
                    timeout={600}
                    key={highlight.primary_key}
                    classNames="fade"
                  >
                    <SHFunctional
                      // potentially get the book cover from google api?
                      author={highlight.author}
                      chapter={highlight.chapter}
                      repText={highlight.represent_text}
                      selText={highlight.selected_text}
                      title={highlight.title}
                    />
                  </CSSTransition>
                );
              })}
            </Grid>
          </TransitionGroup>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    highlights: state.joinedHighlights,
    fetching: state.isFetching,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchHighlights: () => dispatch(fetchHighlights()),
  };
};

const ConnectedAllHighlights = connect(
  mapStateToProps,
  mapDispatchToProps
)(AllHighlights);

export default ConnectedAllHighlights;
