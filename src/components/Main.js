import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import Particles from 'react-particles-js';
import CssBaseline from '@material-ui/core/CssBaseline';
import { theme, partOptions } from '../themes';
import Navbar from './Navbar';
import AllHighlights from './AllHighlights';
import AllCovers from './AllCovers';
import { fetchHighlights } from '../redux/store';

class Main extends Component {
  constructor() {
    super();
  }
  componentDidMount() {
    this.props.fetchHighlights();
  }

  render() {
    const { bookCovers } = this.props;
    return (
      <div>
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <Particles className='particles' params={partOptions} />
          <Navbar />
          <div id='main'>
            <Switch>
              <Route
                exact
                path='/'
                component={() => <AllCovers bookCovers={bookCovers} />}
              />
              {/* <Route path="/highlight/:id" component={SingleProductView} /> */}
            </Switch>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

const mapStateToDispatch = state => {
  return {
    bookCovers: state.bookCovers
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchHighlights: () => dispatch(fetchHighlights())
  };
};

export default connect(
  mapStateToDispatch,
  mapDispatchToProps
)(Main);
