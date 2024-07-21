import { ReactNode } from 'react';
import { SpinnerComponentProps } from '../../models/props.model';
import './spinner.scss';

export function SpinnerComponent({ size: number }: SpinnerComponentProps): ReactNode {
  return (
    <div
      className="spinner"
      style={{ width: `${number}px`, height: `${number}px` }}
    ></div>
  );
}
