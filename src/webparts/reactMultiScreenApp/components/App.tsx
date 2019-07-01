import * as React from 'react';
import { IAppProps } from './IAppProps';
import { Route } from 'react-router-dom';
import { Screen1 } from './screen1/Screen1';
import { Screen2 } from './screen2/Screen2';
import { Header } from './header/Header';

export class App extends React.Component<IAppProps, {}> {
  public render(): React.ReactElement<IAppProps> {
    return (
      <div>
        <h2>App</h2>

        <Header description="" />

        <Route path="/screen1" component={Screen1} />
        <Route path="/screen2" component={Screen2} />
      </div>
    );
  }
}
