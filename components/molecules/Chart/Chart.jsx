import React from 'react';
import PropTypes from 'prop-types';
import { VictoryChart, VictoryTheme } from 'victory';

import styles from './Chart.scss';

const Chart = props => {
  const Scale = props.scale;
  const Element = props.chart;
  const theme = props.isMaterialTheme && VictoryTheme.material;
  return (
    <div className={styles.Wrapper}>
    <h2 className={styles.Code}>&lt; {props.name} &#47;&gt;</h2>
    <p>{props.description}</p>
    {
      Scale ?
        <VictoryChart {...props.scale} theme={theme}>
          { Element && <Element {...props.values} theme={theme} /> }
        </VictoryChart> :
        Element && <Element {...props.values} theme={theme} />
    }
    </div>
  );
}
Chart.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  scale: PropTypes.object,
  chart: PropTypes.object,
  values: PropTypes.object,
  isMaterialTheme: PropTypes.bool,
};

Chart.defaultProps = {
  name: '',
  description: '',
  scale: undefined,
  chart: undefined,
  values: undefined,
};

export default Chart;
