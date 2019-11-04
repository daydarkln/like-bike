import React from 'react';
import StationModule from './StationModule';
import { Spin } from 'antd';

const StationRoot = props => {
  return (
    <div className="stations">
      {props.isLoading ? <Spin size="large" /> : <StationModule {...props} />}
    </div>
  );
};

export default StationRoot;
