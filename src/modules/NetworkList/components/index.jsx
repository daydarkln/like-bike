import React from 'react';
import NetworkModule from './NetworkModule';
import { Spin } from 'antd';

const NetworkRoot = props => {
  return props.isListLoading ? (
    <Spin size="large" />
  ) : (
    <NetworkModule {...props} />
  );
};

export default NetworkRoot;
