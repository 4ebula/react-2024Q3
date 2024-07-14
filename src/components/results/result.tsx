import { ReactNode, useEffect, useState } from 'react';
import { ResultItemComponent } from '../result-item/result-item';
import { ApiResponse } from '../../models/api-response.model';
import { ResultComponentProps } from '../../models/props.model';
import { SpinnerComponent } from '../spinner/spinner';
import './result.scss';

export function ResultsComponent(props: ResultComponentProps): ReactNode {
  const url = 'https://pokeapi.co/api/v2/pokemon';
  const limit = 16;

  const { query } = props;
  const [isLoading, setIsLoading] = useState(false);
  const [items, setItems] = useState<ApiResponse[]>([]);

  async function requestItems(query: string | null): Promise<ApiResponse[]> {
    let data;
    setIsLoading(true);

    if (query) {
      const res = await fetch(`${url}/${query}`);
      if (res.status === 404) {
        setIsLoading(false);
        return [];
      }
      data = [await res.json()];
    } else {
      const res = await fetch(`${url}?limit=${limit}`);
      const { results } = (await res.json()) as {
        results: { name: string; url: string }[];
      };
      data = await Promise.all(
        results.map((el) => fetch(el.url).then((res) => res.json())),
      );
    }

    setIsLoading(false);
    return data;
  }

  useEffect(() => {
    requestItems(query).then((res) => {
      setIsLoading(false);
      setItems(res);
    });
  }, [query]);

  if (isLoading) {
    return <SpinnerComponent></SpinnerComponent>;
  }

  if (items.length) {
    return (
      <ul>
        {items.map((el, i): ReactNode => {
          const { name, weight, height } = el;
          return (
            <ResultItemComponent
              name={name}
              weight={weight}
              height={height}
              imgUrl={el.sprites.other['official-artwork'].front_default}
              key={i}
            ></ResultItemComponent>
          );
        })}
      </ul>
    );
  } else {
    return <div>No items found</div>;
  }
}
