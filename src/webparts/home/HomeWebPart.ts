import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  type IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { IReadonlyTheme } from '@microsoft/sp-component-base';

import * as strings from 'HomeWebPartStrings';
import Home from './components/Home';
import { IHomeProps } from './components/IHomeProps';

export interface IHomeWebPartProps {
  description: string;
  url1: string;
  url2: string;
  url3: string;
  url4: string;
  url5: string;
  url6: string;
  url7: string;
  url8: string;
  url9: string;
  url10: string;
}

export default class HomeWebPart extends BaseClientSideWebPart<IHomeWebPartProps> {

  private _isDarkTheme: boolean = false;
  private _environmentMessage: string = '';

  public render(): void {
    const element: React.ReactElement<IHomeProps> = React.createElement(
      Home,
      {
        description: this.properties.description,
        url1: this.properties.url1,
        url2: this.properties.url2,
        url3: this.properties.url3,
        url4: this.properties.url4,
        url5: this.properties.url5,
        url6: this.properties.url6,
        url7: this.properties.url7,
        url8: this.properties.url8,
        url9: this.properties.url9,
        url10: this.properties.url10,
        isDarkTheme: this._isDarkTheme,
        environmentMessage: this._environmentMessage,
        hasTeamsContext: !!this.context.sdks.microsoftTeams,
        userDisplayName: this.context.pageContext.user.displayName
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onInit(): Promise<void> {
    return this._getEnvironmentMessage().then(message => {
      this._environmentMessage = message;
    });
  }



  private _getEnvironmentMessage(): Promise<string> {
    if (!!this.context.sdks.microsoftTeams) { // running in Teams, office.com or Outlook
      return this.context.sdks.microsoftTeams.teamsJs.app.getContext()
        .then(context => {
          let environmentMessage: string = '';
          switch (context.app.host.name) {
            case 'Office': // running in Office
              environmentMessage = this.context.isServedFromLocalhost ? strings.AppLocalEnvironmentOffice : strings.AppOfficeEnvironment;
              break;
            case 'Outlook': // running in Outlook
              environmentMessage = this.context.isServedFromLocalhost ? strings.AppLocalEnvironmentOutlook : strings.AppOutlookEnvironment;
              break;
            case 'Teams': // running in Teams
            case 'TeamsModern':
              environmentMessage = this.context.isServedFromLocalhost ? strings.AppLocalEnvironmentTeams : strings.AppTeamsTabEnvironment;
              break;
            default:
              environmentMessage = strings.UnknownEnvironment;
          }

          return environmentMessage;
        });
    }

    return Promise.resolve(this.context.isServedFromLocalhost ? strings.AppLocalEnvironmentSharePoint : strings.AppSharePointEnvironment);
  }

  protected onThemeChanged(currentTheme: IReadonlyTheme | undefined): void {
    if (!currentTheme) {
      return;
    }

    this._isDarkTheme = !!currentTheme.isInverted;
    const {
      semanticColors
    } = currentTheme;

    if (semanticColors) {
      this.domElement.style.setProperty('--bodyText', semanticColors.bodyText || null);
      this.domElement.style.setProperty('--link', semanticColors.link || null);
      this.domElement.style.setProperty('--linkHovered', semanticColors.linkHovered || null);
    }

  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                }),
                PropertyPaneTextField('url1', {
                  label: strings.Url1FieldLabel
                }),
                PropertyPaneTextField('url2', {
                  label: strings.Url2FieldLabel
                }),
                PropertyPaneTextField('url3', {
                  label: strings.Url3FieldLabel
                }),
                PropertyPaneTextField('url4', {
                  label: strings.Url4FieldLabel
                }),
                PropertyPaneTextField('url5', {
                  label: strings.Url5FieldLabel
                }),
                PropertyPaneTextField('url6', {
                  label: strings.Url6FieldLabel
                }),
                PropertyPaneTextField('url7', {
                  label: strings.Url7FieldLabel
                }),
                PropertyPaneTextField('url8', {
                  label: strings.Url8FieldLabel
                }),
                PropertyPaneTextField('url9', {
                  label: strings.Url9FieldLabel
                }),
                PropertyPaneTextField('url10', {
                  label: strings.Url10FieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
