import { configureStore, combineReducers } from '@reduxjs/toolkit';
import citiesReducer from './reducer/citiesReducer';
import detailsReducer from './reducer/detailsReducer';
import itinerariesReducer from './reducer/itinerariesReducer';
import navbarReducer from './reducer/navBarReducer';

const rootReducer = combineReducers({
    cities: citiesReducer,
    details: detailsReducer,
    itineraries: itinerariesReducer,
    navbar: navbarReducer
});

const store = configureStore({ reducer: rootReducer });
export default store;
