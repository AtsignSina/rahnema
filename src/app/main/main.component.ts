import {Component, OnInit} from '@angular/core';
import {Project} from '../project/project.proto';
import {ProjectService} from '../project/project.service';
import {Store} from '@ngrx/store';
import {Router} from '@angular/router';
import {ProjectDeleteAction, ProjectEditAction} from '../project/project.actions';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  projects: any[] = [];
  setting = {
    mode: 'external',
    columns: {
      name: {
        title: 'Name'
      },
      owner: {
        title: 'Owner'
      },
      customer: {
        title: 'Customer'
      },
      phone: {
        title: 'Contact Phone'
      },
      email: {
        title: 'Address'
      },
      website: {
        title: 'Website'
      }
    }
  };

  private static simplify(project: Project) {
    return {
      uuid: project.uuid,
      name: project.details.projectName,
      owner: project.details.projectOwner,
      customer: project.details.customerName,
      phone: project.details.contactPhone,
      email: project.details.emailAddress,
      website: project.details.companySite
    };
  }

  constructor(private projectService: ProjectService, private store: Store<any>, private router: Router) {
  }

  ngOnInit() {
    this.list();
    console.log(this.projects);
  }


  delete($event: any) {
    this.store.dispatch(new ProjectDeleteAction($event.data.uuid));
    this.list();
  }


  edit($event: any) {
    this.store.dispatch(new ProjectEditAction(this.projectService.fetch($event.data.uuid)));
  }

  private list() {
    this.projects = this.projectService.list().map(p => {
      return MainComponent.simplify(p);
    });
  }

  add($event: any) {
    this.router.navigate(['/wizard']);
  }

}
