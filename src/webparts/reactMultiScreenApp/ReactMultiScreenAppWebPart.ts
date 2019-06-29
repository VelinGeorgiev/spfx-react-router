import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'ReactMultiScreenAppWebPartStrings';
import Router from './components/Router';
// https://github.com/flatiron/director
  
export interface IReactMultiScreenAppWebPartProps {
  description: string;
}

export default class ReactMultiScreenAppWebPart extends BaseClientSideWebPart<IReactMultiScreenAppWebPartProps> {

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
