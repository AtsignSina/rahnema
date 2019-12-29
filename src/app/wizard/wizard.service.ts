import {FormGroup} from '@angular/forms';
import {Injectable} from '@angular/core';
import {Project} from '../project/project.proto';
import {Store} from '@ngrx/store';
import {ProjectActions} from '../project/project.actions';

@Injectable()
export class WizardService {
  constructor(private store: Store<Project>) {
  }

  action: string;

  hintMessage(fg: FormGroup, str, error, hint) {
    return (fg.get(str).touched && fg.get(str).hasError('required')) ? error : hint;
  }

  ngClassForHint(fg: FormGroup, str) {
    return {
      'error-block': fg.get(str).touched && fg.get(str).hasError('required')
    };
  }

  getProject(): Project {
    let project: any;
    this.store.select(a => a).subscribe(s => {
      project = s;
    });
    return project ? project.project : null;
  }

  dispatch(action: ProjectActions) {
    this.store.dispatch(action);
  }
}
