import { observable } from 'mobx';
import tables from '../constants/tables';

class Store {
  @observable tables = '';

  constructor() {
    this.tables = tables;
  }
}

export default function initStore() {
  return new Store();
}
