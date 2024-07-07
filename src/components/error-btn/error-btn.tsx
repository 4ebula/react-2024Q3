import React from 'react';
import './error-btn.scss';

export class ErrorBtnComponent extends React.PureComponent {
  throw = (): void => {
    this.setState(() => {
      throw new Error('Error occured');
    });
  };

  render(): React.ReactNode {
    return (
      <button className="error-btn" onClick={this.throw}>
        Throw
      </button>
    );
  }
}
