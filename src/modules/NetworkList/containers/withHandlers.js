import { withHandlers } from 'recompose';

export default withHandlers({
  handleSelectNetwork: props => id => {
    props.getStations(id);
  }
});
