import store from '../store';

export const SELECTED_ITEM_ADD = 'SELECTED_ITEM_ADD';
export const SELECTED_ITEM_REMOVE = 'SELECTED_ITEM_REMOVE';
export const SELECTED_ITEM_REMOVE_All = 'SELECTED_ITEM_REMOVE_All';

export type SELECTED_ITEM_ACTIONS =
  | typeof SELECTED_ITEM_ADD
  | typeof SELECTED_ITEM_REMOVE
  | typeof SELECTED_ITEM_REMOVE_All;

export const SelectedItemAdd = (payload: number) => {
  return { type: SELECTED_ITEM_ADD, payload };
};

export const SelectedItemRemove = (payload: number) => {
  return { type: SELECTED_ITEM_REMOVE, payload };
};

export const SelectedItemRemoveAll = () => {
  return { type: SELECTED_ITEM_REMOVE_All };
}

export const IsItemSelected = (id: number): boolean => {
  return !!store
    .getState()
    .selected.selectedItems.find(selectedId => selectedId === id);
};
