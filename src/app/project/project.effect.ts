import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {ProjectService} from './project.service';
import {ProjectActionEnum, ProjectActions} from './project.actions';
import {tap, withLatestFrom} from 'rxjs/internal/operators';
import {Store} from '@ngrx/store';
import {Router} from '@angular/router';
import {WizardService} from '../wizard/wizard.service';

@Injectable()
export class ProjectEffect {
  constructor(private actions$: Actions, private projectService: ProjectService, private store: Store<any>, private router: Router, private wz: WizardService) {
  }

  @Effect({dispatch: false})
  saveProject$ = this.actions$.pipe(ofType<ProjectActions>(ProjectActionEnum.ACCEPT), withLatestFrom(this.store)
    , tap(([action, storeState]) => {
      this.wz.action = '';
      this.projectService.add(storeState.project);
      this.router.navigate(['/']);
    }));

  @Effect({dispatch: false})
  action$ = this.actions$.pipe(ofType<ProjectActions>(ProjectActionEnum.DETAIL, ProjectActionEnum.SETTING, ProjectActionEnum.DELIVERY),
    withLatestFrom(this.store)
    , tap(([action]) => {
      this.wz.action = action.type;
    }));

  @Effect({dispatch: false})
  editAction$ = this.actions$.pipe(ofType<ProjectActions>(ProjectActionEnum.EDIT),
    withLatestFrom(this.store)
    , tap(([action, storeState]) => {
      this.router.navigate(['/wizard']);
    }));

  @Effect({dispatch: false})
  deleteAction$ = this.actions$.pipe(ofType<ProjectActions>(ProjectActionEnum.DELETE),
    withLatestFrom(this.store)
    , tap(([action, storeState]) => {
      this.projectService.remove(action.payload);
    }));

  @Effect({dispatch: false})
  refreshProject$ = this.actions$.pipe(ofType<ProjectActions>(ProjectActionEnum.BACK), withLatestFrom(this.store)
    , tap(([action, storeState]) => {
      this.router.navigate(['/']);
    }));
}
