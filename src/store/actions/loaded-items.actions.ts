import { ListItem } from '../../models/api-response.model';

export const SET_LOADED_ITEMS = 'SET_LOADED_ITEMS';

export const SetLoadedItems = (payload: ListItem[]) => {
  return { type: SET_LOADED_ITEMS, payload };
};
