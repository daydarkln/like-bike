import React from 'react';
import StationHeader from './StationHeader';
import { Empty } from 'antd';
import StationItem from './StationItem';

const StationModule = props => {
  const { list } = props;
  return (
    <>
      <StationHeader
        currentStationName={
          props.currentStation ? props.currentStationName : 'Select station'
        }
        totalBikes={props.totalBikes}
      />
      <div className="stations__list">
        {list.length ? (
          list.map(item => (
            <StationItem
              item={item}
              chooseStation={props.setCurrentStation}
              currentId={props.currentId}
            />
          ))
        ) : (
          <Empty description="No stations here" />
        )}
      </div>
    </>
  );
};

export default StationModule;
