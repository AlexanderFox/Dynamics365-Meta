import { getRequest } from './auth';
import { FieldType, PickListOptionsType, TApiJoinParams, TFieldMetaData, TMetaData } from './types/api';
import { TAppFieldMeta, TAppEntityMeta, TConfig, TJoinParams } from './types/app';

const splitArray = (array: Array<any>, LIMIT = 10) =>
  Array.from(new Array(Math.ceil(array.length / LIMIT)).keys())
    .map((k) => array.slice(k * LIMIT, k * LIMIT + 25))

export const systemBasedFields = ['ownerid', 'createdon', 'createdby', 'modifiedon'];

export const getBuildFunction = (token: string, url: string, config: TConfig) => {
  const request = getRequest(token, url);

  const targets = new Set<string>();

  const getFieldsData = (logicalName: string) =>
    request<{ value: TFieldMetaData[] }>({
      url: `EntityDefinitions(LogicalName='${logicalName}')/Attributes`,
      timeout: 5000,
      tries: 3,
    });

  const getJoinParams = async (names: string[]) =>
    (await Promise.all(splitArray(names, 20)
      .map(names => request<{ value: TApiJoinParams[] }>({
    url: `EntityDefinitions`,
    timeout: 5000,
    tries: 3,
    params: {
      $select:
        'LogicalName,LogicalCollectionName,PrimaryIdAttribute,PrimaryNameAttribute,DisplayName',
      $filter: names.map((name) => `LogicalName eq '${name}'`).join(' or '),
    },
  })))).map(v => v.data.value).flat();

  const getEntityMeta = (names: string[]) =>
    request<{ value: TMetaData[] }>({
      url: `EntityDefinitions`,
      params: {
        $select:
          'LogicalName,LogicalCollectionName,PrimaryIdAttribute,PrimaryNameAttribute,PrimaryImageAttribute,DisplayName,DisplayCollectionName,IsActivity,SchemaName,ObjectTypeCode',
        $filter: names.map((name) => `LogicalName eq '${name}'`).join(' or '),
      },
      timeout: 5000,
      tries: 3,
    });

  const getListItems = (entityLogicalName: string, field: string, type: string) =>
    request<PickListOptionsType>({
      url: `EntityDefinitions(LogicalName='${entityLogicalName}')/Attributes(LogicalName='${field}')/${type.slice(1)}`,
      params: {
        $select: 'LogicalName',
        $expand: 'OptionSet',
      },
      timeout: 5000,
      tries: 3,
    });

  const getOptions = async (type: FieldType, fullType: string, logicalName: string, fieldName: string) => {
    if (
      [FieldType.Picklist, FieldType.Virtual, FieldType.Boolean, FieldType.Status, FieldType.State].includes(type) &&
      fullType
    ) {
      try {
        const {
          data: {
            OptionSet: { Options, FalseOption, TrueOption },
          },
        } = await getListItems(logicalName, fieldName, fullType);
        if (type === FieldType.Boolean && FalseOption && TrueOption) {
          return [
            ['true', TrueOption.Label.UserLocalizedLabel.Label],
            ['false', FalseOption.Label.UserLocalizedLabel.Label],
          ];
        } else {
          return Options.map((v) => [`${v.Value}`, v.Label.UserLocalizedLabel.Label]);
        }
      } catch (e) {
        console.log(e);
      }
    } else {
      return [];
    }
  };

  const getMeta = async (entityName: string) => {
    const {
      data: { value: fieldsMeta },
    } = await getFieldsData(config[entityName].name);

    const columns = (config[entityName].columns as string[]).concat(...systemBasedFields);

    const options = {};

    const fieldsWithoutMetadata = ['bahai_profileimage', 'entityimage'];
    try {
      await Promise.all(
        fieldsMeta
          .filter(
            (v) =>
              !fieldsWithoutMetadata.includes(v.LogicalName) &&
              (config[entityName]?.columns as string[]).includes(v.LogicalName)
          )
          .map(async ({ LogicalName, AttributeType, '@odata.type': type }) => {
            options[LogicalName] = await getOptions(AttributeType, type, config[entityName].name, LogicalName);
          })
      );
    } catch (e) {
      console.log(e);
    }

    fieldsMeta.filter((v) => columns.includes(v.LogicalName) && v.Targets).map(v => v.Targets).flat().forEach(v => targets.add(v));

    return fieldsMeta
      .filter((v) => columns.includes(v.LogicalName))
      .reduce(
        (acc, next) => ({
          ...acc,
          [next.LogicalName]: {
            label: next.DisplayName.UserLocalizedLabel.Label,
            extraType: next['@odata.type'],
            type: next.AttributeType,
            format: next.Format,
            formatName: next.FormatName,
            targets: next.Targets,
            options: options[next.LogicalName],
          },
        }),
        {} as Record<string, TAppFieldMeta>
      );
  };

  return async () => {
    const mainKeys = Object.keys(config);

    const entitiesMeta = Object.fromEntries(
      (await getEntityMeta(mainKeys.map((entityName) => config[entityName].name))).data.value
        .map(({LogicalName, DisplayName, LogicalCollectionName, IsActivity, DisplayCollectionName, SchemaName, ...rest}) => [
        LogicalName,
          ({
            logicalName: LogicalName,
            url: LogicalCollectionName,
            fields: {} as Record<string, TAppFieldMeta>,
            displayName: DisplayName?.UserLocalizedLabel?.Label,
            displayCollectionName: DisplayCollectionName?.UserLocalizedLabel?.Label,
            isActivity: IsActivity,
            schemaName: SchemaName,
            ...rest,
          })
      ])
    );

    const meta = Object.fromEntries(mainKeys.map((key) => [key, entitiesMeta[config[key].name]])) as Record<
      string,
      TAppEntityMeta & { fields: Record<string, TAppFieldMeta> }
    >;

    const fields = Object.fromEntries(
      await Promise.all(mainKeys.map(async (entityName: string) => [entityName, await getMeta(entityName)]))
    );

    const targetsResponse = await getJoinParams([...targets.values()])
    const targetCollections: Record<string, TJoinParams> = Object.fromEntries(
      targetsResponse.map(({ LogicalName, DisplayName, ...rest}) =>
        [LogicalName, { LogicalName, DisplayName: DisplayName?.UserLocalizedLabel?.Label, ... rest }]
      ));

    return { meta: Object.fromEntries(
        Object.entries(meta).map(([key, values]) => [key, { ...values, fields: fields[key] }])
      ) as Record<string, TAppEntityMeta>, targetCollections };
  }
}
