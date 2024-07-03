// simplified example of redux

let stateHolder = null;
let reducerHolder = null;

export function createStore(reducers, initialState) {
    stateHolder = initialState;
    reducerHolder = reducers;
}

export function useDispatch() {
    return (payload) => {
        const newState = reducerHolder(payload);
        stateHolder = newState;
    }
}

export function useSelector(selectorFunction) {
    return selectorFunction(stateHolder);
}