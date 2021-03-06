import React, { ChangeEvent } from 'react';
import { Input, Form, Col, Row } from 'antd';

import './search-bar.css';
import { WeatherCardProps } from '../../interfaces/WeatherCardProps';
import { connect } from 'react-redux';
import { fetchWeather, searchCity } from '../../actions/actions';
import { Action, Dispatch } from 'redux';
import { WeatherObject } from '../../interfaces/WeatherObject';

interface SearchBarProps {
  inputValue: string | undefined;
  weatherObject: WeatherObject;
  searchCity: (inputValue: string | undefined) => object;
  fetchWeather: (inputValue: string | undefined) => object;
}

interface DispatchFromProps {
  searchCity: (inputValue: string | undefined) => Action;
  fetchWeather: (inputValue: string | undefined) => Action;
}

interface StateFromProps {
  inputValue: string;
  weatherObject: WeatherObject;
}

const SearchBar: React.FC<SearchBarProps> = (props) => {
  const handleSubmit = (): void => {
    if (props.inputValue) {
      const inputValue: string | undefined = props.inputValue
        .replace(/ +/g, ' ').trim();
      props.fetchWeather(inputValue);
    }
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    props.searchCity(e.currentTarget.value);
  }

  return (
    <Row justify="center" align="middle">
      <Col span={20} className="weather-card__content_input-wrapper">
        <Form
          onFinish={handleSubmit}>
          <Col span={20} offset={2}>
            <Input
              size="large"
              className="input weather-card__content_input"
              type="text"
              placeholder="Поиск города или места"
              onChange={handleChange}
              value={props.inputValue}
            />
          </Col>
        </Form>
      </Col>
    </Row>
  )
}

const mapStateToProps = (state: WeatherCardProps): StateFromProps => ({
  inputValue: state.inputValue,
  weatherObject: state.weatherObject,
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchFromProps => {
  return  {
    searchCity: (inputValue: string | undefined): Action => dispatch<any>(searchCity(inputValue)),
    fetchWeather: (inputValue: string | undefined): Action => dispatch<any>(fetchWeather(inputValue)),
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchBar);