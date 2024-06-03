import { localityFields } from './locality';

const fields = [
  'bahai_typecode',
  'bahai_prioritycode',
  'bahai_sourcecode',
  'bahai_sourcedetails',
  'bahai_inquirerid',
  'bahai_comment',
  'bahai_note',
  'bahai_isoutofusa',
  'bahai_postalcodeid',
  'bahai_stateid',
  'bahai_cityid',
  'bahai_addressline1',
  'bahai_addressline2',
  'bahai_lastexportcreator',
] as const;

const readOnly = [
  'bahai_id',
  'statecode',
  'bahai_statuscode',
  'bahai_name',
  'bahai_isattachmentcreated',
  'bahai_currentreminder',
  'bahai_additionalnote',
  'createdon',
  'createdby',
  'bahai_compositeaddress',
  'bahai_localityid',
  'bahai_clusterid',
  'bahai_regionid',
  'bahai_laststatuschangedatetime',
  ...localityFields,
] as const;

export default { fields: fields, columns: [...fields, ...readOnly] };
