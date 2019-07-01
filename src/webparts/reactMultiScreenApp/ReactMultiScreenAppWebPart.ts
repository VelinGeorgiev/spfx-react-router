import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import { App }  from './components/App';
  
export interface IReactMultiScreenAppWebPartProps {
  description: string;
}

export default class ReactMultiScreenAppWebPart extends BaseClientSideWebPart<IReactMultiScreenAppWebPartProps> {

  public render(): void {
    ReactDom.render(React.createElement(App, { description: ""}), this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }
}
