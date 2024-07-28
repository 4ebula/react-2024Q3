import {
  SELECTED_ITEM_ACTIONS,
  SELECTED_ITEM_ADD,
  SELECTED_ITEM_REMOVE,
  SELECTED_ITEM_REMOVE_All,
} from '../actions/selected-item.actions';

export interface SelectedItemState {
  selectedItems: number[];
}

export interface SelectedItemAction {
  type: SELECTED_ITEM_ACTIONS;
  payload: number;
}

const initialState: SelectedItemState = {
  selectedItems: [],
};

export const selectedItemsReducer = (
  state = initialState,
  action: SelectedItemAction
) => {
  switch (action.type) {
    case SELECTED_ITEM_ADD:
      return {
        ...state,
        selectedItems: [...state.selectedItems, action.payload],
      };

    case SELECTED_ITEM_REMOVE:
      return {
        ...state,
        selectedItems: state.selectedItems.filter(id => id !== action.payload),
      };
    case SELECTED_ITEM_REMOVE_All:
      return { ...state, selectedItems: [] };
    default:
      return state;
  }
};
