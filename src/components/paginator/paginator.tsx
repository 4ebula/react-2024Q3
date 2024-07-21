import React, { useEffect, useState } from 'react';
import './paginator.scss';
import { PaginatorProps } from '../../models/props.model';

export function PaginatorComponent({
  pages,
  offset,
  setOffset,
  children,
}: PaginatorProps): React.ReactNode {
  const [leftDisabled, setLeftDisabled] = useState(true);
  const [rightDisabled, setRightDisabled] = useState(false);
  const [active, setActive] = useState(1);
  const [shift, setShift] = useState(0);
  const [pageArr, setPageArr] = useState([1]);
  const shiftStep = pages - 5;

  useEffect(() => {
    if (pages === 1) {
      setLeftDisabled(true);
      setRightDisabled(true);
      setPageArr([1]);
    } else {
      setLeftDisabled(true);
      setRightDisabled(false);
      setActive(1);

      setPageArr(
        Array.from({ length: pages >= 5 ? 5 : pages }, (_, i) => i + 1),
      );
    }
  }, [pages]);

  const up = () => {
    if (pages > 1 && !rightDisabled) {
      const newValue = active + 1;
      if (newValue <= pages) {
        setActive(newValue);
        setOffset(offset + 1);
        setLeftDisabled(false);
      }

      if (newValue === pages) {
        setRightDisabled(true);
      }

      if (pages > 5 && shift < shiftStep) {
        setShift(shift + 1);
      }
    }
  };

  const down = () => {
    if (pages > 1 && !leftDisabled) {
      const newValue = active - 1;
      if (newValue >= 0) {
        setActive(newValue);
        setOffset(offset - 1);
        setRightDisabled(false);
      }

      if (newValue === 1) {
        setLeftDisabled(true);
      }

      if (pages > 5 && shift > 0) {
        setShift(shift - 1);
      }
    }
  };

  useEffect(() => {
    setPageArr(
      Array.from({ length: pages >= 5 ? 5 : pages }, (_, i) => i + 1 + shift),
    );
  }, [shift, pages]);

  return (
    <div className="paginator">
      <div className="paginator-output">{children}</div>
      <div className="paginator-control">
        <div className={`control ${leftDisabled && 'disabled'}`} onClick={down}>
          <span className="chevron left"></span>
        </div>
        <div className="pages">
          <ul>
            {pageArr.map((el, i) => {
              return (
                <li
                  key={i}
                  className={`number ${el === active ? 'active' : ''}`}
                >
                  {el}
                </li>
              );
            })}
          </ul>
        </div>
        <div className={`control ${rightDisabled && 'disabled'}`} onClick={up}>
          <span className="chevron right"></span>
        </div>
      </div>
    </div>
  );
}
