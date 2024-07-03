import { createStore } from 'redux';
import reducers from './reducers';

const initialState = {
    cars: [
        {
            id: 1,
            make: 'Honda',
            model: 'Civic',
            year: '2008',
            isRunning: false,
        },
        {
            id: 2,
            make: 'Tesla',
            model: 'Y',
            year: '2021',
            isRunning: false,
        },
    ]
};

// Create a default export of `createStore` that accepts an argument of `reducers`.
export default createStore(reducers, initialState);