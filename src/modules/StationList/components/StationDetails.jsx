import React from 'react';
import { List } from 'antd';

const StationDetails = props => {
  return (
    <List>
      <List.Item>
        <strong>Address:</strong> {props.extra.address}
      </List.Item>
      <List.Item>
        <strong>Altitude:</strong> {props.extra.altitude}
      </List.Item>
      <List.Item>
        <strong>Status:</strong> {props.extra.status}
      </List.Item>
      <List.Item>
        <strong>Uid:</strong> {props.extra.uid}
      </List.Item>
    </List>
  );
};

export default StationDetails;
