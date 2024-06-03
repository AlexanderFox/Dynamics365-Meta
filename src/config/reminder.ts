const fields = [
  'bahai_inquirerid',
  'bahai_reminderdatetime',
  'subject',
  'description',
  'regardingobjectid',
  'requiredattendees',
] as const;

const readOnly = ['bahai_statuscode', 'createdon', 'createdby', 'bahai_to'] as const;

export default { fields: fields, columns: [...fields, ...readOnly] };
