/// <reference types="navigo" />
import * as React from 'react';
import * as ReactDom from 'react-dom';
import { IAppProps } from './IAppProps';
import { Screen1 } from './screen1/Screen1';
import { Screen2 } from './screen2/Screen2';
import { Header } from './header/Header';

const Router: any = require('navigo/lib/navigo.min');

export class App extends React.Component<IAppProps, {}> {

  public readonly containerName: string = `RouterContainer${Math.floor(Math.random() * 10000)}`;

  public componentDidMount(): void {

    const router: Navigo = new Router("app", true);
    router.on({
      "path1": () => { this.load(Screen1); },
      "path2": () => { this.load(Screen2); }
    }).resolve();
  }

  public render(): React.ReactElement<IAppProps> {
    return (
      <div>
        <h2>App</h2>

        <Header description="" />

        <div id={this.containerName}>
          <Screen1 description=""/>
        </div>

        <div>Footer</div>
      </div>
    );
  }

  public load(component: any, props?: any): void {

    const element = React.createElement(component, props);
    const container = document.getElementById(this.containerName);

    ReactDom.render(element, container);
  }
}
