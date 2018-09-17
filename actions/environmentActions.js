import _ from 'lodash';
import { envs } from '../constants/environments';


export const changeEnvironment = (store, env) => {
  if (_.isUndefined(env)) {
    return store.env;
  }

  return envs[env];
};

export default {
  changeEnvironment,
};
