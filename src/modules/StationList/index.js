import Component from './components';
import connect from './containers/connect';
import lifecycle from './containers/lifecycle';
import './StationStyles.scss';

import { compose } from 'ramda';

export default compose(
  connect,
  lifecycle
)(Component);
