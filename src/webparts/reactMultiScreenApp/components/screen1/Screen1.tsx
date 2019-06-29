import * as React from 'react';
import { IScreen1Props } from './IScreen1Props';

export class Screen1 extends React.Component<IScreen1Props, {}> {
  public render(): React.ReactElement<IScreen1Props> {
    return (
      <div>
        <h2>Screen 1</h2>
      </div>
    );
  }
}
