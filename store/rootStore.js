import EnvStore from './environmentStore';
import ChartStore from './chartStore';
import TableStore from './tableStore';

export default function initStore() {
  return {
    environment: new EnvStore(),
    charts: new ChartStore(),
    tables: new TableStore(),
  };
}