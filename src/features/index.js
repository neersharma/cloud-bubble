import configReducer from './configSlice';
import testReducer from './testSlice'
import dragReducer from "./dragSlice"

export default {
    config: configReducer,
    test: testReducer,
    drag: dragReducer
}