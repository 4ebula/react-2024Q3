import React from 'react';
import './select.scss';
import { useSelector } from 'react-redux';
import { IRootState } from '../../store/reducers';
import store from '../../store/store';
import { SelectedItemRemoveAll } from '../../store/actions/selected-item.actions';
import { DownloadBtnComponent } from '../download-btn/download-btn';

function diselect() {
  store.dispatch(SelectedItemRemoveAll());
}

export function SelectComponent(): React.ReactNode {
  const amount = useSelector(
    (state: IRootState) => state.selected.selectedItems.length,
  );

  return (
    <div className="select-container">
      <p className="selected-text">
        Selected items: <span>{amount}</span>
      </p>
      <div className="select-btns">
        <button onClick={diselect}>Unselect</button>
        <DownloadBtnComponent></DownloadBtnComponent>
      </div>
    </div>
  );
}
