import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ProjectSetting} from '../../project/project.proto';
import {WizardService} from '../wizard.service';
import {ProjectSettingAction} from '../../project/project.actions';

@Component({
  selector: 'app-wizard-setting',
  templateUrl: './wizard-setting.component.html',
  styleUrls: ['./wizard-setting.component.css']
})
export class WizardSettingComponent implements OnInit {
  fg: FormGroup = null;
  setting: ProjectSetting = null;
  languages = ['English', 'Persian'];
  timezones = ['UTC', 'Asia/Tehran'];
  communication = ['Email', 'SMS', 'Phone'];

  constructor(private formBuilder: FormBuilder, public wzservice: WizardService) {
  }

  ngOnInit() {
    this.fg = this.formBuilder.group({
      email: ['', Validators.required],
      language: ['', Validators.required],
      timezone: ['', Validators.required]
    });
    this.fg.addControl('communication', new FormControl(false, []));
    const prj = this.wzservice.getProject();
    this.setting = prj && prj.setting ? prj.setting : new ProjectSetting();

  }

  changeCommunication(comm, e?) {
    this.setting.communication = this.communication.filter((com, i) => {
      return (e && e.target.checked && com === comm) || (this.setting.communication.includes(com) && com !== comm);
    });
    console.log(this.setting.communication);
  }

  submit() {
    this.wzservice.dispatch(new ProjectSettingAction(this.setting));
  }

  back() {
    this.wzservice.action = '';
  }

  communicationHintMessage(error: string, msg: string) {
    return this.fg.get('communication').touched && this.setting.communication.length === 0 ? error : msg;
  }

  communicationNgClassForHint() {
    return {
      'error-block': this.fg.get('communication').touched && this.setting.communication.length === 0
    };
  }
}
