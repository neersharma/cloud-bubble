import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    data: {
        dropDepth: 1,
        inDropZone: false,
        fileList: []
    }
};

export const dragSlice = createSlice({
    name: 'drag',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        setDropDepth: (state, { payload: { dropDepth } }) => {
            state.data = { ...state.data, dropDepth: dropDepth }
        },
        setInDropZone: (state, { payload: { inDropZone } }) => {
            state.data = { ...state.data, inDropZone: inDropZone }
        },
        addFilesToList: (state, { payload: { files } }) => {
            const newFileList = state.data.fileList.concat(files)
            console.log("Filed to be added added ... ", files, newFileList)
            state.data = {
                ...state.data,
                fileList: newFileList
            }
        },
    },
});

export const { setDropDepth, setInDropZone, addFilesToList } = dragSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const dragTest = (state) => state.drag.data;

export default dragSlice.reducer;
