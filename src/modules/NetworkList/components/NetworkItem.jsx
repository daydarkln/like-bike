import React from 'react';
import { Card } from 'antd';
import { NavLink } from 'react-router-dom';

const NetworkItem = props => {
  return (
    <NavLink
      to={`/networks/${props.id}`}
      onClick={() => props.handleSelectNetwork(props.id)}
    >
      <Card title={props.company} hoverable={true}>
        <span target="_blank" rel="noreferrer noopener">
          {props.href}
        </span>
      </Card>
    </NavLink>
  );
};

export default NetworkItem;
