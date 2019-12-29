import {Component, OnInit} from '@angular/core';
import {WizardService} from '../wizard.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProjectDelivery} from '../../project/project.proto';
import {ProjectDeliveryAction} from '../../project/project.actions';

@Component({
  selector: 'app-wizard-delivery',
  templateUrl: './wizard-delivery.component.html',
  styleUrls: ['./wizard-delivery.component.css']
})
export class WizardDeliveryComponent implements OnInit {
  fg: FormGroup = null;
  delivery: ProjectDelivery = null;
  countries = ['United States', 'Iran'];

  constructor(public wzservice: WizardService, private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.fg = this.formBuilder.group({
      addressLine1: ['', Validators.required],
      addressLine2: ['', Validators.required],
      postCode: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      country: ['', Validators.required],
    });
    const prj = this.wzservice.getProject();
    this.delivery = prj && prj.delivery ? prj.delivery : new ProjectDelivery();
  }

  submit() {
    this.wzservice.dispatch(new ProjectDeliveryAction(this.delivery));
  }

  back() {
    this.wzservice.action = 'detail';
  }
}
