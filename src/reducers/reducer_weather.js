import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action){
	switch(action.type) {
		case FETCH_WEATHER: 
		//Both these methods make a new array of weather data and send it back - they dont
		//mutate the current state, they make new state and return it.
		/*return state.concat([action.payload.data]);*/  //1 way of adding data

		return [action.payload.data, ...state]; //Another way same as above


	}
	return state;
}