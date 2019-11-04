import Component from './components';
import connect from './containers/connect';
import lifecycle from './containers/lifecycle';
import withHandlers from './containers/withHandlers';
import { compose } from 'ramda';
import './NetworkStyles.scss';

export default compose(
  connect,
  withHandlers,
  lifecycle
)(Component);
