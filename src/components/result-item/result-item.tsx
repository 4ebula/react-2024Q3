import React, { ReactNode } from 'react';
import { ResultItemComponentProps } from '../../models/props.model';
import './result-item.scss';

export class ResultItemComponent extends React.Component<ResultItemComponentProps> {
  render(): ReactNode {
    return (
      <li>
        <p className="name">{this.props.name}</p>
        <p>
          Weight: {this.props.weight}, Height: {this.props.height}
        </p>
      </li>
    );
  }
}
