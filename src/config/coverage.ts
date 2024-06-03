const fields = [
  'bahai_comment',
  'bahai_coveragereason',
  'bahai_coveringresourceid',
  'bahai_enddatetime',
  'bahai_startdatetime',
  'ownerid',
] as const;

const readOnly = ['bahai_id', 'createdby', 'createdon', 'statecode', 'statuscode'] as const;

export default { fields, columns: [...fields, ...readOnly] };
