import * as React from 'react';
import { App } from './App';
import { IRouterProps } from './IRouterProps';

export default class Router extends React.Component<IRouterProps, {}> {
  public render(): React.ReactElement<IRouterProps> {
    return (
        <App description=""/>
    );
  }
}
