import { localityFields } from './locality';

const fields = [
  'bahai_title',
  'bahai_description',
  'bahai_startdatetime',
  'bahai_finishdatetime',
  'bahai_categoryid',
  'bahai_subcategoryid',
  'bahai_room',
  'bahai_building',
  'bahai_addressline1',
  'bahai_addressline2',
  'bahai_postalcodeid',
  'bahai_cityid',
  'bahai_stateid',
  'bahai_typecode',
  'bahai_videoconferencingurl',
  'bahai_designatedcontactobjectid',
  'bahai_designatedhostobjectid',
] as const;

const readOnly = [
  'bahai_id',
  'bahai_isattachmentcreated',
  'statuscode',
  'statecode',
  'bahai_compositeaddress',
  'ownerid',
  'bahai_localityid',
  'bahai_clusterid',
  'bahai_confirmationmessage',
  ...localityFields,
] as const;

export default { fields: fields, columns: [...fields, ...readOnly] };
