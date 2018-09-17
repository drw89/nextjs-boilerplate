import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';

import Grid from '@material-ui/core/Grid';
import Switch from '@material-ui/core/Switch';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import RefreshIcon from '@material-ui/icons/Refresh';
import Chart from '../../molecules/Chart/Chart';
import StackChart from '../../molecules/StackChart/StackChart';

import styles from './Charts.scss';

@inject('store')
@observer
export default class Charts extends Component {
  static propTypes = {
    store: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      mui: true,
    };
  }

  toggleUI() {
    this.setState({
      mui: !this.state.mui,
    });
  }

  render() {
    const { charts } = this.props.store;
    const isMaterialTheme = this.state.mui;

    return (
      <div className={styles.Wrapper}>
        <div className={styles.Toggle}>
          <Switch
            checked={this.state.mui}
            onChange={() => this.toggleUI()}
            color="primary"
          />        
          <Typography component="span">material theme</Typography>
          <div>
            <IconButton>
              <RefreshIcon />
            </IconButton>
            <Typography component="span">reload charts</Typography>
          </div>
        </div>
        <Grid container spacing={24}>
          <Grid item xs={12} md={6} xl={4}>
            <Chart {...charts.pie} isMaterialTheme={isMaterialTheme} />
          </Grid>
          <Grid item xs={12} md={6} xl={4}>
            <Chart {...charts.bar} isMaterialTheme={isMaterialTheme} />
          </Grid>
          <Grid item xs={12} md={6} xl={4}>
            <Chart {...charts.line} isMaterialTheme={isMaterialTheme} />
          </Grid>
          <Grid item xs={12} md={6} xl={4}>
            <StackChart {...charts.stack} isMaterialTheme={isMaterialTheme} />
          </Grid>
          <Grid item xs={12} md={6} xl={4}>
            <Chart {...charts.donut} isMaterialTheme={isMaterialTheme} />
          </Grid>
        </Grid>
      </div>
    );
  }
}
