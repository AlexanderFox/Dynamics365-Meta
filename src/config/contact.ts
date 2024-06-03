const fields = [
  'bahai_cellphone',
  'bahai_contactmethodcode',
  'bahai_emailaddress1',
  'bahai_emailaddress2',
  'bahai_addressline1',
  'bahai_firstname',
  'bahai_gendercode',
  'bahai_homephone',
  'bahai_lastname',
  'bahai_middlename',
  'bahai_nickname',
  'bahai_preferredlanguagecode',
  'bahai_otherlanguage',
  'bahai_workphone',
  'bahai_websiteurl',
  'bahai_socialmediaurl',
  'bahai_importantnote',
] as const;

const readOnly = [
  'bahai_name',
  'bahai_id',
  'bahai_rawimportantnote',
  'bahai_profileimage',
  'statuscode',
  'statecode',
] as const;

export default { fields: fields, columns: [...fields, ...readOnly] };
