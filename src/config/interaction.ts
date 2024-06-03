const fields = [
  'bahai_directioncode',
  'bahai_inquirerid',
  'bahai_inquiryid',
  'bahai_communicationtypecode',
  'bahai_communicationreasoncode',
  'bahai_comment',
  'bahai_communicatedon',
] as const;

const readOnly = [
  'bahai_isattachmentcreated',
  'bahai_id',
  'statecode',
  'bahai_statuscode',
  'createdon',
  'createdby',
  'subject',
  'bahai_rawcomment',
] as const;

export default { fields: fields, columns: [...fields, ...readOnly] };
