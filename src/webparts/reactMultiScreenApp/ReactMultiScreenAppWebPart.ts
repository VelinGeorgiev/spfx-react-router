import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
/// <reference types="navigo" />

const n: any = require('navigo/lib/navigo.min');

//import * as n from "navigo";

import Router from './components/Router';
// https://github.com/flatiron/director
  
export interface IReactMultiScreenAppWebPartProps {
  description: string;
}

export default class ReactMultiScreenAppWebPart extends BaseClientSideWebPart<IReactMultiScreenAppWebPartProps> {

  public onInit(): Promise<void> {

    const nav = new n("app", true);
    nav.on({
      "/path1": ()=>{ console.log('navigated to 1'); },
      "/path2": ()=>{ console.log('navigated to 2' ); }
     }).resolve();

    return Promise.resolve();
  }

  public render(): void {
    const element: any = React.createElement(Router, {});

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }
}
