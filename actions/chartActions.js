import _ from 'lodash';
import Charts from '../constants/charts';

/**
 * Add some generic data to display within the mostly used charts
 */
export const initialize = (type) => {
  if (_.has(Charts, type)) {
    return Charts[type];
  }
  return {
    name: 'Unknown Chart',
    description: 'There was an error while loading the chart',
  };
};

/**
 * Randomizes the given input to create a different chart
 */
export const randomize = input => ({
  foo: !input,
});

export default {
  initialize,
  randomize,
};
