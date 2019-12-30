import {ProjectActionEnum, ProjectActions} from './project.actions';
import * as uuid from 'uuid';
import { Project } from './project.proto';

export function projectReducer(state = new Project, action: ProjectActions) {
  switch (action.type) {
    case  ProjectActionEnum.EDIT:
      return action.payload;
    case ProjectActionEnum.DETAIL:
      state.details = action.payload;
      return state;
    case ProjectActionEnum.SETTING:
      state.setting = action.payload;
      return state;
    case ProjectActionEnum.DELIVERY:
      state.delivery = action.payload;
      return state;
    case ProjectActionEnum.ACCEPT:
      state.uuid = state.uuid ? state.uuid : uuid.v4();
      return state;
  }
};
