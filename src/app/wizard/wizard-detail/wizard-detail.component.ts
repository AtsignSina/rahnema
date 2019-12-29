import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProjectDetail} from '../../project/project.proto';
import {WizardService} from '../wizard.service';
import {ProjectDetailAction, ProjectBackAction} from '../../project/project.actions';

@Component({
  selector: 'app-wizard-detail',
  templateUrl: './wizard-detail.component.html',
  styleUrls: ['./wizard-detail.component.css']
})
export class WizardDetailComponent implements OnInit {
  detail: ProjectDetail = null;
  fg: FormGroup = null;

  constructor(public wzservice: WizardService, private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.fg = this.formBuilder.group({
      projectName: ['', Validators.required],
      projectOwner: ['', Validators.required],
      customerName: ['', Validators.required],
      contactPhone: ['', Validators.required],
      emailAddress: ['', Validators.required],
      companySite: ['', Validators.required],
    });
    const prj = this.wzservice.getProject();
    this.detail = prj && prj.details ? prj.details : new ProjectDetail();
  }

  submit() {
    this.wzservice.dispatch(new ProjectDetailAction(this.detail));
  }

  back() {
    this.wzservice.dispatch(new ProjectBackAction(null));
  }

}
