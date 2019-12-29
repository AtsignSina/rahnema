import {Action} from '@ngrx/store';
import {Project, ProjectDelivery, ProjectDetail, ProjectSetting} from './project.proto';

export interface ProjectActions extends Action {
  payload: any;
}

export enum ProjectActionEnum {
  BACK = 'back',
  EDIT = 'edit',
  DELETE = 'delete',
  DETAIL = 'detail',
  SETTING = 'setting',
  DELIVERY = 'delivery',
  ACCEPT = 'accept'
}

export class ProjectDetailAction
  implements ProjectActions {
  public readonly type = ProjectActionEnum.DETAIL;

  constructor(public payload: ProjectDetail = null) {
  }
}

export class ProjectSettingAction
  implements ProjectActions {
  public readonly type = ProjectActionEnum.SETTING;

  constructor(public payload: ProjectSetting) {
  }
}

export class ProjectDeliveryAction
  implements ProjectActions {
  public readonly type = ProjectActionEnum.DELIVERY;

  constructor(public payload: ProjectDelivery) {
  }
}

export class ProjectAcceptAction
  implements ProjectActions {
  public readonly type = ProjectActionEnum.ACCEPT;

  constructor(public payload: any) {
  }
}

export class ProjectBackAction
  implements ProjectActions {
  public readonly type = ProjectActionEnum.BACK;

  constructor(public payload: any) {
  }
}


export class ProjectEditAction
  implements ProjectActions {
  public readonly type = ProjectActionEnum.EDIT;

  constructor(public payload: Project) {
  }
}

export class ProjectDeleteAction
  implements ProjectActions {
  public readonly type = ProjectActionEnum.DELETE;

  constructor(public payload: string) {
  }
}
