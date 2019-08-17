import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import Particles from 'react-particles-js';
import CssBaseline from '@material-ui/core/CssBaseline';
import { theme, partOptions } from '../themes';
import Navbar from './Navbar';
import AllHighlights from './AllHighlights';
import TestModal from './TestModal';

export default class Main extends Component {
  constructor() {
    super();
    this.toggleClass = this.toggleClass.bind(this);
  }

  toggleClass() {
    let container = document.getElementById('modal-container');
    container.removeAttribute('class');
    container.classList.add('six');
    document.querySelector('body').classList.add('modal-active');
  }
  render() {
    return (
      <div>
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <Particles className="particles" params={partOptions} />
          <Navbar />
          <div id="main">
            <Switch>
              <Route exact path="/" component={AllHighlights} />
              <Route
                path="/test"
                render={() => <TestModal toggle={this.toggleClass} />}
              />
              {/* <Route path="/highlight/:id" component={SingleProductView} /> */}
            </Switch>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}
