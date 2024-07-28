import React, { useRef, useState } from 'react';
import './download-btn.scss';
import { useSelector } from 'react-redux';
import { IRootState } from '../../store/reducers';
import { ListItem } from '../../models/api-response.model';
import { convertToCSV } from '../../utils/cvs';

export function DownloadBtnComponent(): React.ReactNode {
  const loadedState = useSelector((state: IRootState) => state.loaded);
  const selectedItems = useSelector(
    (state: IRootState) => state.selected.selectedItems,
  );
  const [downInfo, setDownInfo] = useState({ download: '', href: ''});
  const ref = useRef<HTMLAnchorElement>(null);
  const handleClick = () => {
    const data: ListItem[] = Object.values<ListItem>(loadedState).filter(
      (item) => {
        return selectedItems.find((selectedId) => item.id === selectedId);
      },
    );
    const filename = `${selectedItems.length}_pokemon.csv`;
    const csvData = new Blob([convertToCSV(data)], { type: 'text/csv' });
    const csvURL = URL.createObjectURL(csvData);
    setDownInfo({ href: csvURL, download: filename });

    setTimeout(() => {
      ref.current!.click();
    }, 0);
  };

  return (
    <>
      <button onClick={handleClick}>Download</button>
      <a className="link" ref={ref} href={downInfo.href} download={downInfo.download}>load</a>
    </>
  );
}
