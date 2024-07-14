import React, { ReactNode } from 'react';
import { ResultItemComponentProps } from '../../models/props.model';
import './result-item.scss';

export class ResultItemComponent extends React.Component<ResultItemComponentProps> {
  render(): ReactNode {
    return (
      <li className="list-item">
        <p className="name">{this.props.name}</p>
        <div className="image-container">
          <img src={this.props.imgUrl} alt="" />
        </div>
        <p className="stats">
          Weight: {this.props.weight}, Height: {this.props.height}
        </p>
      </li>
    );
  }
}
