const fields = [
  'from',
  'to',
  'cc',
  'bcc',
  'directioncode',
  'subject',
  'description',
  'regardingobjectid',
  'bahai_appointmentid',
  'statuscode',
] as const;

const readOnly = [
  'bahai_id',
  'bahai_isattachmentcreated',
  'statecode',
  'createdon',
  'createdby',
  'bahai_from',
  'bahai_to',
  'bahai_cc',
  'bahai_bcc',
  'bahai_rawdescription',
] as const;

export default { fields: fields, columns: [...fields, ...readOnly] };
