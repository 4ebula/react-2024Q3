import { ReactNode, useContext, useEffect, useState } from 'react';
import { ResponseResults } from '../../models/api-response.model';
import { SelectedItem } from '../../contexts/selected-item';
import { ShowCardContext } from '../../contexts/show-card';
import './card.scss';

export function CardComponent(): ReactNode {
  const { id } = useContext(SelectedItem);
  const [attr, setAttr] = useState({} as ResponseResults);
  const { setShowCard } = useContext(ShowCardContext);
  const { name, weight, height } = attr;
  const imgUrl = attr.sprites?.other['official-artwork'].front_default;
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((res) => res.json())
      .then((res) => {
        setAttr(res);
      });
  }, [id]);

  return (
    <li className="card">
      <p className="name">{name}</p>
      <div className="image-container">
        <img src={imgUrl} alt="" />
      </div>
      <p className="stats">
        Weight: {weight}, Height: {height}
      </p>
      <div className="close">
        <button onClick={() => setShowCard(false)}>X</button>
      </div>
    </li>
  );
}
