import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import SignIn57138001Reducer from '../features/SignIn57138001/redux/reducers'
import SignIn58138000Reducer from '../features/SignIn58138000/redux/reducers'
import SignIn59137999Reducer from '../features/SignIn59137999/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
SignIn57138001: SignIn57138001Reducer,
SignIn58138000: SignIn58138000Reducer,
SignIn59137999: SignIn59137999Reducer,

});