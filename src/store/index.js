import { configureStore } from '@reduxjs/toolkit';

export const makeStore = (reducers, preloadedState) => {
    return configureStore({
        reducer: reducers,
        preloadedState
    });
}

export const store = makeStore

export default store