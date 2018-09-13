import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Provider } from 'mobx-react';
import DevTools, { configureDevtool } from 'mobx-react-devtools';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import green from '@material-ui/core/colors/green';

import initBaseStore from '../../../store/rootStore';

import Header from '../Header/Header';
import styles from './DefaultLayout.scss';

configureDevtool({
  logFilter: change => change.type === 'action',
});

const theme = createMuiTheme({
  palette: {
    primary: red,
    secondary: green,
  },
});

class DefaultLayout extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  constructor(props) {
    super(props);
    this.store = initBaseStore();
  }

  changeHandler = (e) => {
    this.store.environment.changeEnv(e.target.value);
  };

  render() {
    const { children } = this.props;
    return (
      <Provider store={this.store}>
        <MuiThemeProvider theme={theme}>
          {
            process.env.NODE_ENV === 'development' && <DevTools />
          }
          <div className={styles.Container}>
            <Header />
            <div className={styles.content}>
              { children }
            </div>
          </div>
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default DefaultLayout;
