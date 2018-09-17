import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { VictoryStack, VictoryTheme, VictoryAxis } from 'victory';

import styles from './StackChart.scss';

const StackChart = props => {
  // const Scale = props.scale;
  const Element = props.chart;
  const theme = props.isMaterialTheme && VictoryTheme.material;
  return (
    <div className={styles.Wrapper}>
      <h2 className={styles.Code}>&lt; {props.name} &#47;&gt;</h2>
      <p>{props.description}</p>
      <VictoryStack theme={theme}>
        {
          Element &&
            _.map(props.values, (dataRow) => (
              <Element data={dataRow} theme={theme} />
            ))
        }
      </VictoryStack>
    </div>
  );
}
StackChart.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  chart: PropTypes.object,
  values: PropTypes.array,
  isMaterialTheme: PropTypes.bool,
};

StackChart.defaultProps = {
  name: '',
  description: '',
  chart: undefined,
  values: undefined,
};

export default StackChart;
