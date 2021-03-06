import {createStore} from 'redux';

const add = ({a,b}) => {
    return a + b;
};

console.log(add({a:1, b:2}));

const incrementCount = ({incrementBy = 1} = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const resetCount = () => ({
    type: 'RESET'
});

const setCount = ({count = 1} = {}) => ({
    type: 'SET',
    count
});

const countReducer = (state = {count: 0}, action) => {

    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            };

        case 'SET':
            return {
                count: action.count
            };

        case 'RESET':
            return {
                count: 0
            };

        default:
            return state;
    }
};

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState())
})

//Actions - than an object that gets sent to the store

//I'd like to increment the count
// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5
// });

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount());

store.dispatch(incrementCount());

store.dispatch(incrementCount());

store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy: 4 }));

store.dispatch(resetCount());

store.dispatch(setCount({ count: 101 }));
