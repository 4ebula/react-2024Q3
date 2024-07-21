import React from 'react';
import './result-item.scss';
import { ResultItemProps } from '../../models/props.model';

export function ResultItemComponent({
  data,
}: ResultItemProps): React.ReactNode {
  const { name, id } = data;
  return (
    <li className="result-item">
      <div>
        <input type="checkbox" />
      </div>
      <div className="result-item-info">
        <p>{id}</p>
        <p>{name}</p>
      </div>
    </li>
  );
}
