import { ReactNode } from 'react';
import { ResultItemComponentProps } from '../../models/props.model';
import './result-item.scss';

export function ResultItemComponent(
  props: ResultItemComponentProps,
): ReactNode {
  const { name, imgUrl, weight, height } = props;
  return (
    <li className="list-item">
      <p className="name">{name}</p>
      <div className="image-container">
        <img src={imgUrl} alt="" />
      </div>
      <p className="stats">
        Weight: {weight}, Height: {height}
      </p>
    </li>
  );
}
