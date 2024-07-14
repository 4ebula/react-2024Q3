import React, { ReactNode } from 'react';

export class ErrorBoundary extends React.Component<
  { children: ReactNode },
  { hasError: boolean; error: Error }
> {
  state = {
    hasError: false,
    error: { message: '' } as Error,
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error) {
    this.logError(error);
  }

  handleClick = (): void => {
    this.setState({ hasError: false });
  };

  private logError(error: Error): void {
    console.log('Error: ', error);
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return (<>
        <div>{this.state.error.message}</div>
        <button onClick={this.handleClick}>Back</button>
      </>);
    }

    return this.props.children;
  }
}
