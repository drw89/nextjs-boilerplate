import { observable, action } from 'mobx';
import { envs } from '../constants/environments';
import {
  changeEnvironment,
} from '../actions/environmentActions';

class Store {
  @observable env = '';

  constructor() {
    this.env = envs.MSP_PROD;
  }

  @action changeEnv = (environment) => {
    this.env = changeEnvironment(this, environment);
  }
}

export default function initStore() {
  return new Store();
}
