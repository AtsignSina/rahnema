import {Component, OnInit} from '@angular/core';
import {Project} from '../../project/project.proto';
import {WizardService} from '../wizard.service';
import {ProjectAcceptAction} from '../../project/project.actions';

@Component({
  selector: 'app-wizard-accept',
  templateUrl: './wizard-accept.component.html',
  styleUrls: ['./wizard-accept.component.css']
})
export class WizardAcceptComponent implements OnInit {
  project: Project = null;

  constructor(private wzService: WizardService) {
  }

  ngOnInit() {
    this.project = this.wzService.getProject();
  }

  submit() {
    this.wzService.dispatch(new ProjectAcceptAction(null));
  }

  back() {
    this.wzService.action = 'setting';
  }

}
