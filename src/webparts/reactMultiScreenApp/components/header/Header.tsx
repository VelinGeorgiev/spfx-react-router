import * as React from 'react';
import { IHeaderProps } from './IHeaderProps';
import { Link } from 'react-router-dom';

export class Header extends React.Component<IHeaderProps, {}> {
  public render(): React.ReactElement<IHeaderProps> {
    return (
      <div>
        {/* <Link to="/screen1" >Go to screen 1</Link> |
        <Link to="/screen2" >Go to screen 2</Link> */}
      </div>
    );
  }
}
