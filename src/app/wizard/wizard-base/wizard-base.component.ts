import {Component, OnInit} from '@angular/core';
import {WizardService} from '../wizard.service';

@Component({
  selector: 'app-wizard-base',
  templateUrl: './wizard-base.component.html',
  styleUrls: ['./wizard-base.component.css']
})
export class WizardBaseComponent implements OnInit {
  steps = {detail: 0, setting: 1, delivery: 2, accept: 3};

  constructor(public wzService: WizardService) {
  }

  ngOnInit() {
  }

  stepActive(step) {
    return {
      active: (this.wzService.action && this.steps[this.wzService.action] + 1 >= this.steps[step]) || this.steps[step] === 0
    };
  }
}
