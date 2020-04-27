import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version, DisplayMode } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { App } from './components/App';
import { Edit } from './components/Edit';

export default class MultiScreenWebPart extends BaseClientSideWebPart<{}> {

  public render(): void {
    if(this.displayMode == DisplayMode.Edit) {
      ReactDom.render(React.createElement(Edit), this.domElement);
    } else {
      ReactDom.render(React.createElement(App), this.domElement);
    }
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }
}
