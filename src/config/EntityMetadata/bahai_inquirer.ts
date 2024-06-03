export enum bahai_inquirer_contactmethodcode {
  Phone = 200630000,
  Email = 200630001,
  Mail = 200630002,
  Text = 200630003,
  SocialMedia = 200630004,
  Website = 200630005,
  HomeVisit = 200630006,
  VideoConference = 200630007,
}

export enum statecode {
  Active = 0,
  Inactive = 1,
}

export enum age {
  Junior = 200630000,
  Youth = 200630001,
  Adult = 200630002,
  Child = 200630003,
}

export enum statuscode {
  Active = 1,
  Inactive = 2,
}

export enum gender {
  Male = 200630000,
  Female = 200630001,
  Unknown = 200630002,
}

export enum bahai_inquirerstatus {
  New = 200630000,
  OneOff = 200630001,
  Unreachable = 200630002,
  DoNotContact = 200630003,
  Approached = 200630004,
  InConversation = 200630005,
  Paused = 200630006,
  NeedsVerification = 200630007,
  Verified = 200630008,
  Enrolled = 200630009,
  OnHold = 200630010,
  Archive = 200630011,
  ForReview = 200630012,
  OneoffRequest = 200630013,
  StillSeeking = 200630014,
  Declared = 200630015,
  PossibleMember = 200630016,
}

export enum bahai_inquirertype {
  General = 200630000,
  Seeker = 200630001,
  Registrant = 200630002,
  Member = 200630003,
}

export enum bahai_ethnicity {
  HispanicorLatino = 200630000,
  MiddleEastern = 200630001,
  Persian = 200630002,
  OtherEthnicity = 200630003,
}

export enum bahai_inquirerstatusdetails {
  BadAddress = 200630000,
  BurialEndofLife = 200630001,
  BusyRightNow = 200630002,
  Completed = 200630003,
  ConversationScheduled = 200630004,
  CurrentlyEnrolled = 200630005,
  DataEntryError = 200630006,
  DisconnectedPhone = 200630007,
  DoNotEnroll = 200630008,
  Duplicate = 200630009,
  Email = 200630010,
  HateCall = 200630011,
  HomeVisit = 200630012,
  HouseofWorship = 200630013,
  InConversation = 200630014,
  InPersonMeeting = 200630015,
  Interfaith = 200630016,
  LostInterest = 200630017,
  MakingResourceUncomfortable = 200630018,
  Media = 200630019,
  MinorRequiresParentalPermission = 200630020,
  MissingRequiredData = 200630021,
  MovingOutOfArea = 200630022,
  NeedsTime = 200630023,
  New = 200630024,
  NoFurtherFollowupRequired = 200630025,
  NotInUSA = 200630026,
  Other = 200630027,
  PassedtoDepartmentSelection = 200630028,
  PendingEnrollmentwithLSA = 200630029,
  PendingEnrollmentwithMembership = 200630030,
  PhoneCall = 200630031,
  PossibleTransfer = 200630032,
  Prank = 200630033,
  SensitiveCountryRelationship = 200630034,
  TestData = 200630035,
  TextMessage = 200630036,
  Unresponsive = 200630037,
  Withdrawn = 200630038,
  WrongEmail = 200630039,
  WrongPhoneNumber = 200630040,
  ParticipatedinActivity = 200630041,
  HostingActivity = 200630042,
  VirtualMeeting = 200630043,
  TeachingCampaign = 200630044,
  Mail = 200630045,
  CommentOnly = 200630046,
}

export enum bahai_localitycalculationstatuscode {
  NotStarted = 200630000,
  InProgress = 200630001,
  Succeeded = 200630002,
  Failed = 200630003,
  PendingCalculation = 200630004,
}

export enum source_code {
  Resource = 200630000,
  BahaiUs = 200630001,
  BahaiTeachingOrg = 200630002,
  UNITE = 200630003,
}
