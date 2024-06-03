const fields = [
  'bahai_name',
  'bahai_type',
  'bahai_subject',
  'bahai_body',
  'createdon',
  'createdby',
  'bahai_rawbody',
  'ownerid',
] as const;

const readOnly = ['bahai_templateid', 'bahai_id'] as const;

export default { fields: fields, columns: [...fields, ...readOnly] };
