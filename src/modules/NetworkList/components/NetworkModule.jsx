import React from 'react';
import { Empty, Row, Col } from 'antd';
import { pathOr } from 'ramda';
import NetworkItem from './NetworkItem';
import { Route, Switch } from 'react-router-dom';
import StationList from '../../StationList';

const NetworkModule = props => {
  const list = pathOr([], ['list'], props);
  return list.length ? (
    <Row className="networks">
      <Col span={8} className="networks__list">
        {list.map(item => {
          return (
            <NetworkItem
              {...item}
              getStations={props.getStations}
              handleSelectNetwork={props.handleSelectNetwork}
            />
          );
        })}
      </Col>
      <Col span={16} className="networks__stations">
        <Switch>
          <Route path="/networks/:id" component={StationList} />
          <Route
            path="/networks"
            render={() => <Empty description="Choose any network" />}
          />
        </Switch>
      </Col>
    </Row>
  ) : (
    <Empty description="Список пуст" />
  );
};

export default NetworkModule;
