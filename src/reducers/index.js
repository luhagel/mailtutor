import { combineReducers } from 'redux';
import routes from './routes';
import mail from './mail';
export default combineReducers({
  routes,
  mail
});
