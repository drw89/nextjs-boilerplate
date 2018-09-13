import { observable, action } from 'mobx';
import { initialize, randomize } from '../actions/chartActions';
import { chartTypes } from '../constants/charts';

class Store {
  @observable pie = null;

  @observable bar = null;

  @observable line = null;

  @observable donut = null;

  @observable stack = null;

  constructor() {
    this.pie = initialize(chartTypes.PIE);
    this.bar = initialize(chartTypes.BAR);
    this.line = initialize(chartTypes.LINE);
    this.donut = initialize(chartTypes.DONUT);
    this.stack = initialize(chartTypes.STACK);
  }

  @action randomizeCharts = (input) => {
    this[input] = randomize(input);
  }
}

export default function initStore() {
  return new Store();
}
