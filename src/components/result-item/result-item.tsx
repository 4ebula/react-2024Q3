import React, { useContext, useState } from 'react';
import './result-item.scss';
import { ResultItemProps } from '../../models/props.model';
import { SelectedItem } from '../../contexts/selected-item';
import { ShowCardContext } from '../../contexts/show-card';
import store from '../../store/store';
import {
  IsItemSelected,
  SelectedItemAdd,
  SelectedItemRemove,
} from '../../store/actions/selected-item.actions';

export function ResultItemComponent({
  data,
}: ResultItemProps): React.ReactNode {
  const { name, id } = data;
  const { setId } = useContext(SelectedItem);
  const { showCard, setShowCard } = useContext(ShowCardContext);
  const [checked, setChecked] = useState(IsItemSelected(id));

  const selectItem = () => {
    store.dispatch(!checked ? SelectedItemAdd(id) : SelectedItemRemove(id));
    setChecked(!checked);
  };

  return (
    <li className="result-item">
      <div>
        <input type="checkbox" onChange={selectItem} checked={checked} />
      </div>
      <div
        className="result-item-info"
        onClick={() => {
          setId(id);
          if (!showCard) {
            setShowCard(true);
          }
        }}
      >
        <p>{id}</p>
        <p>{name}</p>
      </div>
    </li>
  );
}
