import { ReactNode } from 'react';
import { CardComponentProps } from '../../models/props.model';
import './card.scss';

export function CardComponent(
  props: CardComponentProps,
): ReactNode {
  const { name, imgUrl, weight, height } = props;
  return (
    <li className="card">
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
