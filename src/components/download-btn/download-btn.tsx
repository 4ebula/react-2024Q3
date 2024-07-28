import React from 'react';
import './download-btn.scss';
import { useSelector } from 'react-redux';
import { IRootState } from '../../store/reducers';
import { ListItem } from '../../models/api-response.model';
import { downloadCSV } from '../../utils/cvs';


export function DownloadBtnComponent(): React.ReactNode {
  const loadedState = useSelector((state: IRootState) => state.loaded);
  const selectedItems = useSelector((state: IRootState) => state.selected.selectedItems);
  const handleClick = () => {
    const data: ListItem[] = Object.values<ListItem>(loadedState).filter(item => {
      return selectedItems.find(selectedId => item.id === selectedId)
    });
    const filename = `${selectedItems.length}_pokemon.csv`;
    downloadCSV(filename, data);
  };
  return <button onClick={handleClick}>Download</button>;
}