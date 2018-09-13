import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Divider from '@material-ui/core/Divider';
import HomeIcon from '@material-ui/icons/Home';
import LockIcon from '@material-ui/icons/Lock';
import CloseIcon from '@material-ui/icons/Close';
import ChartIcon from '@material-ui/icons/PieChart';
import TableChartIcon from '@material-ui/icons/TableChart';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import styles from './DrawerContent.scss';

const DrawerContent = props => (
  <div className={styles.drawerContent}>
    <List>
      <ListItem button onClick={props.close}>
        <ListItemIcon>
          <CloseIcon />
        </ListItemIcon>
      </ListItem>
      <Link href="/">
        <ListItem button>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
      </Link>
      <Link href="/overview">
        <ListItem button>
          <ListItemIcon>
            <ChartIcon />
          </ListItemIcon>
          <ListItemText primary="Overview" />
        </ListItem>
      </Link>
      <Link href="/tables">
        <ListItem button>
          <ListItemIcon>
            <TableChartIcon />
          </ListItemIcon>
          <ListItemText primary="Tables" />
        </ListItem>
      </Link>
      <Link href="/secret">
        <ListItem button>
          <ListItemIcon>
            <LockIcon />
          </ListItemIcon>
          <ListItemText primary="Protected Area" />
        </ListItem>
      </Link>
      <Divider />
      <ListItem button>
        <ListItemIcon>
          <ExitToAppIcon />
        </ListItemIcon>
        <ListItemText primary="Logout" />
      </ListItem>
    </List>
  </div>
);

DrawerContent.propTypes = {
  close: PropTypes.func,
};

DrawerContent.defaultProps = {
  close: () => {},
};

export default DrawerContent;
