import { combineReducers } from 'redux';
import { selectedItemsReducer } from './selected-item.reducer';
import { loadedItemsReducer } from './loaded-items.reducer';

const rootReducer = combineReducers({
  selected: selectedItemsReducer,
  loaded: loadedItemsReducer,
});

export default rootReducer;
