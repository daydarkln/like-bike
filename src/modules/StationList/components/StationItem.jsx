import React from 'react';
import { Card } from 'antd';
import StationDetails from './StationDetails';

const StationItem = props => {
  const isCurrent = props.item.id === props.currentId;
  return (
    <Card
      onClick={() => props.chooseStation(props.item)}
      className={[
        'stations__item ',
        isCurrent && 'stations__item--is-active'
      ].join('')}
      title={props.item.name}
      hoverable
    >
      {isCurrent && <StationDetails {...props.item} />}
    </Card>
  );
};

export default StationItem;
