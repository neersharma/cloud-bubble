import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    data: {
        abc: "abc"
    }
};

export const testSlice = createSlice({
    name: 'test',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        setData: (state, action) => {
            state.data = action.payload;
        }
    },
});

export const { setData } = testSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectTest = (state) => state.test.data;

export default testSlice.reducer;
