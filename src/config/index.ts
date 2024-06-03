import requester from './requester';
import event from './event';
import inquiry from './inquiry';
import interaction from './interaction';
import reminder from './reminder';
import email from './email';
import resource from './resource';
import contact from './contact';
import member from './member';
import group from './group';
import coverage from './coverage';
import invitedRequester from './bahai_eventparticipant_ims';
import invitedResources from './bahai_eventparticipant_resource';
import document from './document';
import businessunit from './businessunit';
import areaagency from './areaagency';
import historylog from './historylog';
import template from './template';

export const systemBasedFields = ['ownerid', 'createdon', 'createdby', 'modifiedon'] as const;
export type SystemFields = typeof systemBasedFields[number];
export type Fields<T extends string> = SystemFields | T;

export default {
  requester: {
    name: 'bahai_inquirer',
    url: 'bahai_inquirers',
    ...requester,
  },
  coverage: {
    name: 'bahai_coverage',
    url: 'bahai_coverages',
    ...coverage,
  },
  event: {
    name: 'bahai_event_ims',
    url: 'bahai_event_imses',
    ...event,
  },
  inquiry: {
    name: 'bahai_inquiry',
    url: 'bahai_inquiries',
    ...inquiry,
  },
  interaction: {
    name: 'bahai_communication',
    url: 'bahai_communications',
    ...interaction,
  },
  email: {
    name: 'email',
    url: 'emails',
    ...email,
  },
  resource: {
    name: 'systemuser',
    url: 'systemusers',
    ...resource,
  },
  contact: {
    name: 'bahai_contact_ims',
    url: 'bahai_contact_imses',
    ...contact,
  },
  member: {
    name: 'contact',
    url: 'contacts',
    ...member,
  },
  group: {
    name: 'bahai_group',
    url: 'bahai_groups',
    ...group,
  },
  invitedRequester: {
    name: 'bahai_eventparticipant_ims',
    url: 'bahai_eventparticipant_imses',
    ...invitedRequester,
    systemView: 'Default For Event',
  },
  invitedResource: {
    name: 'bahai_eventparticipant_resource',
    url: 'bahai_eventparticipant_resources',
    ...invitedResources,
    systemView: 'Default For Event',
  },
  document: {
    name: 'sharepointdocument',
    url: 'sharepointdocuments',
    ...document,
  },
  userroles: {
    name: 'systemuserroles',
    url: 'systemuserrolescollection',
    columns: [],
    fields: [],
  },
  role: {
    name: 'role',
    url: 'roles',
    columns: [],
    fields: [],
  },
  teammembership: {
    name: 'teammembership',
    url: 'teammemberships',
    columns: [],
    fields: [],
  },
  team: {
    name: 'team',
    url: 'teams',
    columns: [],
    fields: [],
  },
  locality: {
    name: 'businessunit',
    url: 'businessunits',
    fields: [],
    columns: ['bahai_name', 'bahai_localitytype'],
  },
  cluster: {
    name: 'businessunit',
    url: 'businessunits',
    fields: [],
    columns: ['bahai_name', 'bahai_stageofgrowth'],
  },
  reminder: {
    name: 'bahai_reminder',
    url: 'bahai_reminders',
    ...reminder,
  },
  businessunit: {
    name: 'businessunit',
    url: 'businessunits',
    ...businessunit,
  },
  areaagency: {
    name: 'bahai_areaagency',
    url: `bahai_areaagencies`,
    ...areaagency,
  },
  historylog: {
    name: 'bahai_historylog',
    url: `bahai_historylogs`,
    ...historylog,
  },
  template: {
    name: 'bahai_template',
    url: `bahai_templates`,
    ...template,
  },
} as const;
