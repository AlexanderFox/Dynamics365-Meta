export enum FieldType {
  String = 'String',
  Lookup = 'Lookup',
  Memo = 'Memo',
  Virtual = 'Virtual',
  DateTime = 'DateTime',
  Boolean = 'Boolean',
  Picklist = 'Picklist',
  Number = 'Number',
  Owner = 'Owner',
  State = 'State',
  Status = 'Status',
  PartyList = 'PartyList',
  Integer = 'Integer',
  Choice = 'Choice',
  EntityName = 'EntityName',
  Uniqueidentifier = 'Uniqueidentifier',
}

export type TMetaData = {
  PrimaryIdAttribute: string;
  PrimaryNameAttribute: string;
  PrimaryImageAttribute: string;
  LogicalName: string;
  LogicalCollectionName: string;
  SchemaName: string;
  DisplayName: {
    UserLocalizedLabel: {
      Label: string;
    };
  };
  DisplayCollectionName: {
    UserLocalizedLabel: {
      Label: string;
    };
  };
  IsActivity: boolean;
  OwnershipType: string;
  ObjectTypeCode: number;
};

export type TApiJoinParams = Pick<TMetaData, 'DisplayName' | 'LogicalName' | 'LogicalCollectionName' | 'PrimaryIdAttribute' | 'PrimaryNameAttribute'>

export type TFieldMetaData = {
  '@odata.type': string;
  LogicalName: string;
  AttributeType: FieldType;
  Format?: string;
  FormatName?: string;
  DisplayName: {
    UserLocalizedLabel: {
      Label: string;
    };
  };
  MaxLength: number;
  Targets?: string[];
};

export type PickListOptionsType = {
  OptionSet: {
    Options: Array<{
      Value: string;
      Label: {
        UserLocalizedLabel: {
          Label: string;
        };
      };
    }>;
    FalseOption?: {
      Value: string;
      Label: {
        UserLocalizedLabel: {
          Label: string;
        };
      };
    };
    TrueOption?: {
      Value: string;
      Label: {
        UserLocalizedLabel: {
          Label: string;
        };
      };
    };
  };
};
