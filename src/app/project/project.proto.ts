export class ProjectDetail {
  constructor() {
  }

  projectName: string;
  projectOwner: string;
  customerName: string;
  contactPhone: string;
  emailAddress: string;
  companySite: string;
}

export class ProjectSetting {
  constructor() {
  }

  email: string = null;
  language: string = null;
  timezone: string = null;
  communication: string[] = [];
}

export class ProjectDelivery {
  constructor() {
  }

  addressLine1: string;
  addressLine2: string;
  postCode: string;
  city: string;
  state: string;
  country: string;
}

export class Project {
  constructor() {
  }

  uuid: string;
  details: ProjectDetail;
  setting: ProjectSetting;
  delivery: ProjectDelivery;
}

