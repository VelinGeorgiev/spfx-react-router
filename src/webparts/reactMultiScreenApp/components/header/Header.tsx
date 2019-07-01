import * as React from 'react';
import { IHeaderProps } from './IHeaderProps';

export class Header extends React.Component<IHeaderProps, {}> {
  public render(): React.ReactElement<IHeaderProps> {
    return (
      <div>
        <a href="#/path1">Path 1</a> | <a href="#/path2">Path 2</a>
      </div>
    );
  }
}
