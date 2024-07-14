import React, { ReactNode } from 'react';
import { ResultItemComponent } from '../result-item/result-item';
import { ApiResponse } from '../../models/api-response.model';
import { ResultComponentProps } from '../../models/props.model';
import { SpinnerComponent } from '../spinner/spinner';
import './result.scss';

export class ResultsComponent extends React.Component<
  ResultComponentProps,
  { loading: boolean; items: ApiResponse[] }
> {
  private readonly url = 'https://pokeapi.co/api/v2/pokemon';
  private readonly limit = 10;
  // private loading = false;

  state = {
    items: [],
    loading: false,
  };

  componentDidUpdate(prevProps: { query: string }): void {
    if (prevProps.query !== this.props.query) {
      this.requestData();
    }
  }

  private async requestItems(query: string | null): Promise<ApiResponse[]> {
    let data;
    this.setState({ loading: true });

    if (query) {
      const res = await fetch(`${this.url}/${query}`);
      if (res.status === 404) {
        // this.setState(() => {
        //   this.loading = false;
        //   // throw new Error('Items not found');
        // });
        this.setState({ loading: false });
        return [];
      }
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

    // this.loading = false;
    this.setState({ loading: false });
    return data;
  }

  componentDidMount(): void {
    this.requestData();
  }

  private requestData(): void {
    this.requestItems(this.props.query).then((res) => {
      this.setState({ items: res, loading: false });
    });
  }

  render(): ReactNode {
    const { items } = this.state;
    if (this.state.loading) {
      return <SpinnerComponent></SpinnerComponent>;
    }

    if (this.state.items.length) {
      return (
        <ul>
          {items.map((el: ApiResponse, i): ReactNode => {
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
}
