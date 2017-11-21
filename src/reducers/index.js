import { combineReducers } from 'redux';
import WeatherReducer from './reducer_weather.js';

//This defines the state of the app - combines all the reducers and individula peice of state returned
//by each reducer.
const rootReducer = combineReducers({
  weather: WeatherReducer
});

export default rootReducer;
