import { ReactNode, useContext, useEffect, useRef, useState } from 'react';
import { ApiResponse, ResponseResults } from '../../models/api-response.model';
import { ResultComponentProps } from '../../models/props.model';
import { SpinnerComponent } from '../spinner/spinner';
import { PaginatorComponent } from '../paginator/paginator';
import { ResultItemComponent } from '../result-item/result-item';
import './result.scss';
import { ShowCardContext } from '../../contexts/show-card';
import store from '../../store/store';
import { SetLoadedItems } from '../../store/actions/loaded-items.actions';
import { SelectComponent } from '../select/select';
import { useSelector } from 'react-redux';
import { IRootState } from '../../store/reducers';

const PAGE_LIMIT = 10;

function calculateAmountOfPages(count: number): number {
  return Math.ceil(count / PAGE_LIMIT);
}

export function ResultsComponent(props: ResultComponentProps): ReactNode {
  const url = 'https://pokeapi.co/api/v2/pokemon';

  const { query } = props;
  const [isLoading, setIsLoading] = useState(false);
  const [items, setItems] = useState<ResponseResults[]>([]);
  const [pages, setPages] = useState(0);
  const [offset, setOffset] = useState(0);
  const { setShowCard } = useContext(ShowCardContext);
  const previousQuery = useRef(query);

  async function requestItems(
    query: string | null,
    pageOffset: number,
  ): Promise<ResponseResults[]> {
    let data;
    setIsLoading(true);

    if (query) {
      const res = await fetch(`${url}/${query}`);
      if (res.status === 404) {
        setIsLoading(false);
        return [];
      }
      data = [await res.json()];
      store.dispatch(
        SetLoadedItems(
          data.map((el) => ({
            name: el.name,
            url: `https://pokeapi.co/api/v2/pokemon/${el.id}/`,
            id: el.id,
          })),
        ),
      );
      setPages(1);
    } else {
      const res = await fetch(
        `${url}?offset=${10 * pageOffset}&limit=${PAGE_LIMIT}`,
      );
      const { results, count } = (await res.json()) as ApiResponse;
      setPages(calculateAmountOfPages(count));
      data = results.map((el) => ({ ...el, id: +el.url.split('/').at(-2)! }));
      store.dispatch(SetLoadedItems(data));
    }

    setIsLoading(false);
    return data;
  }

  useEffect(() => {
    if (previousQuery.current !== query) {
      setOffset(0);
      previousQuery.current = query;
    }
    requestItems(query, offset).then((res) => {
      setIsLoading(false);
      setItems(res);
    });
  }, [query, offset]);


  const amount = useSelector(
    (state: IRootState) => state.selected.selectedItems.length,
  );

  if (items.length) {
    return (
      <div className="paginator-container">
        <PaginatorComponent pages={pages} offset={offset} setOffset={setOffset}>
          {isLoading ? (
            <div className="spinner-container">
              <SpinnerComponent size={50}></SpinnerComponent>
            </div>
          ) : (
            <>
              <div className="table-header">
                <p></p>
                <p>id</p>
                <p>name</p>
              </div>
              <ul>
                {items.map((el, i): ReactNode => {
                  return (
                    <ResultItemComponent
                      data={el}
                      key={i}
                    ></ResultItemComponent>
                  );
                })}
              </ul>
            </>
          )}
        </PaginatorComponent>
        {amount ? <SelectComponent></SelectComponent> : null }
      </div>
    );
  } else {
    setShowCard(false);
    return <div>No items found</div>;
  }
}
