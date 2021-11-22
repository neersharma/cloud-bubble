import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    config: {
        editMode: true
    }
};

export const configSlice = createSlice({
    name: 'config',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        loadConfig: (state, action) => {
            state.config = action.payload;
        }
    },
});

export const { loadConfig } = configSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectConfig = (state) => state.config.config;

export default configSlice.reducer;
