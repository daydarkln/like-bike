import { connect } from 'react-redux';
import * as actions from '../StationActions';
import {
  getIsLoading,
  getStationList,
  getTotalBikes,
  getCurrentStation,
  getCurrentStationName,
  getCurrentId
} from '../StationSelectors';

const mapStateToProps = state => ({
  isLoading: getIsLoading(state),
  list: getStationList(state),
  currentStation: getCurrentStation(state),
  currentStationName: getCurrentStationName(state),
  totalBikes: getTotalBikes(state),
  currentId: getCurrentId(state)
});

const mapDispatchToProps = { ...actions };

export default connect(
  mapStateToProps,
  mapDispatchToProps
);
