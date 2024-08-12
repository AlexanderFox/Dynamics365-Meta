import { FieldType } from './api'

export type TConfig = Record<string, { name: string, columns: readonly string[] }>

export type TAppFieldMeta = {
  label: string;
  description: string;
  type: FieldType;
  format?: string;
  formatName?: string;
  extraType?: string;
  options: [string, string][];
  targets: string[];
  maxLength: number;
}

export type TAppEntityMeta = {
  PrimaryIdAttribute: string;
  PrimaryNameAttribute: string;
  PrimaryImageAttribute: string;
  logicalName: string;
  url: string;
  fields: Record<string, TAppFieldMeta>;
  displayName: string;
  displayCollectionName: string;
  isActivity: boolean;
  OwnershipType: string;
  ObjectTypeCode: number;
  schemaName: string;
};

export type TJoinParams = {
  PrimaryIdAttribute: string;
  PrimaryNameAttribute: string;
  LogicalName: string;
  LogicalCollectionName: string;
  DisplayName: string;
};
