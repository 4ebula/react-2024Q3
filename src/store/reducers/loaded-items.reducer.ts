import { ListItem } from '../../models/api-response.model';
import { SET_LOADED_ITEMS } from '../actions/loaded-items.actions';

const initialState = {};

export interface LoadedItemsAction {
  type: typeof SET_LOADED_ITEMS;
  payload: ListItem[];
}

export const loadedItemsReducer = (
  state = initialState,
  action: LoadedItemsAction
) => {
  const { payload } = action;
  if (action.type === SET_LOADED_ITEMS) {
    const statePayload = payload.reduce((acc, el) => {
      const { id } = el;
      acc[id] = el;
      return acc;
    }, {} as { [id: number] : ListItem });
    return { ...state, ...statePayload };
  }

  return state;
};
