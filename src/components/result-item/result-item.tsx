import React, { useContext } from 'react';
import './result-item.scss';
import { ResultItemProps } from '../../models/props.model';
import { SelectedItem } from '../../contexts/selected-item';
import { ShowCardContext } from '../../contexts/show-card';

export function ResultItemComponent({
  data,
}: ResultItemProps): React.ReactNode {
  const { name, id } = data;
  const { setId } = useContext(SelectedItem);
  const { showCard, setShowCard } = useContext(ShowCardContext);

  return (
    <li className="result-item">
      <div>
        <input type="checkbox" />
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
