declare interface IHomeWebPartStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
  Url1FieldLabel: string;
  Url2FieldLabel: string;
  Url3FieldLabel: string;
  Url4FieldLabel: string;
  Url5FieldLabel: string;
  Url6FieldLabel: string;
  Url7FieldLabel: string;
  Url8FieldLabel: string;
  Url9FieldLabel: string;
  Url10FieldLabel: string;
  AppLocalEnvironmentSharePoint: string;
  AppLocalEnvironmentTeams: string;
  AppLocalEnvironmentOffice: string;
  AppLocalEnvironmentOutlook: string;
  AppSharePointEnvironment: string;
  AppTeamsTabEnvironment: string;
  AppOfficeEnvironment: string;
  AppOutlookEnvironment: string;
  UnknownEnvironment: string;
}

declare module 'HomeWebPartStrings' {
  const strings: IHomeWebPartStrings;
  export = strings;
}
