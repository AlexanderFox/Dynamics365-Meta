export enum ParticipationTypeMask {
  from = 1,
  to = 2,
  cc = 3,
  bcc = 4,
  requiredattendees = 5,
}

export enum statecode {
  Open = 0,
  Completed = 1,
  Canceled = 2,
}

export enum statuscode {
  Draft = 1,
  Completed = 2,
  Sent = 3,
  Received = 4,
  Canceled = 5,
  PendingSend = 6,
  Sending = 7,
  Failed = 8,
}
