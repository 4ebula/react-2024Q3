import React, { useState } from 'react';
import { useStorage } from '../../hooks/storage.hook';
import { ResultsComponent } from '../../components/results/result';
import { HeaderComponent } from '../../components/header/header';
import './main.page.scss';
import { CardComponent } from '../../components/card/card';
import { SelectedItem } from '../../contexts/selected-item';
import { ShowCardContext } from '../../contexts/show-card';

export function MainPage(): React.ReactNode {
  const searchDefaultKey = 'query';

  const [query, setQuery] = useStorage(searchDefaultKey);

  const [id, setId] = useState(1);
  const [showCard, setShowCard] = useState(false);

  return (
    <>
      <HeaderComponent query={query} setQuery={setQuery}></HeaderComponent>
      <div className="main">
        <SelectedItem.Provider value={{ id, setId }}>
          <ShowCardContext.Provider value={{ showCard, setShowCard }}>
            <ResultsComponent
              query={query}
            ></ResultsComponent>
            {showCard ? <CardComponent /> : null}
          </ShowCardContext.Provider>
        </SelectedItem.Provider>
      </div>
    </>
  );
}
