import React, { ReactNode } from 'react';
import { ResultItemComponent } from '../result-item/result-item';
import { ApiResponse } from '../../models/api-response.model';
import { ResultComponentProps } from '../../models/props.model';
import './result.scss';

export class ResultsComponent extends React.Component<ResultComponentProps> {
  private readonly url = 'https://pokeapi.co/api/v2/pokemon';
  private readonly limit = 10;

  state = {
    items: [],
  };

  componentDidUpdate(prevProps: { query: string }): void {
    if (prevProps.query !== this.props.query) {
      this.requestItems(this.props.query).then((items) => {
        this.setState({ items });
      });
    }
  }

  private async requestItems(query: string | null): Promise<ApiResponse[]> {
    let data;

    if (query) {
      const res = await fetch(`${this.url}/${query}`);
      data = [await res.json()];
    } else {
      const res = await fetch(`${this.url}?limit=${this.limit}`);
      const { results } = (await res.json()) as {
        results: { name: string; url: string }[];
      };
      data = await Promise.all(
        results.map((el) => fetch(el.url).then((res) => res.json())),
      );
    }

    return data;
  }

  componentDidMount(): void {
    this.requestItems(this.props.query).then((res) => {
      this.setState({ items: res });
    });
  }

  render(): ReactNode {
    const { items } = this.state;
    return (
      <ul>
        {items.map(
          ({ name, weight, height }, i): ReactNode => (
            <ResultItemComponent
              name={name}
              weight={weight}
              height={height}
              key={i}
            ></ResultItemComponent>
          ),
        )}
      </ul>
    );
  }
}
