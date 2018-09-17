import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { inject } from 'mobx-react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';

import DrawerContent from '../../molecules/DrawerContent/DrawerContent';

import styles from './Header.scss';

@inject('store')
export default class Header extends Component {
  static propTypes = {
    store: PropTypes.object.isRequired,
  };

  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
  }

  toggleMenu = () => {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  };

  render() {
    return (
      <AppBar position="static" color="primary">
        <Toolbar>
          <div className={styles.headerContainer}>
            <div className={styles.leftWrapper}>
              <IconButton color="inherit" aria-label="Menu" onClick={this.toggleMenu}>
                <MenuIcon />
              </IconButton>
              <Typography variant="title" color="inherit">
                Dashboard: {this.props.store.environment.env}
              </Typography>
            </div>
          </div>
        </Toolbar>
        <Drawer anchor="left" open={this.state.isOpen} onClose={this.toggleMenu}>
          <DrawerContent close={this.toggleMenu} />
        </Drawer>
      </AppBar>
    );
  }
}
