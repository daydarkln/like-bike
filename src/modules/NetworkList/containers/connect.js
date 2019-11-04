import { connect } from 'react-redux';
import * as actions from '../NetworkActions';
import { getStations } from '../../StationList/StationActions';
import { getNetworkList, getIsListLoading } from '../NetworkSelectors';

const mapStateToProps = state => ({
  list: getNetworkList(state),
  isListLoading: getIsListLoading(state)
});

const mapDispatchToProps = { ...actions, getStations };

export default connect(
  mapStateToProps,
  mapDispatchToProps
);
