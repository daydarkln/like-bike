import { lifecycle } from 'recompose';

export default lifecycle({
  componentDidMount() {
    const id = window.location.pathname.replace('/networks/', '');
    this.props.getStations(id);
  }
});
