import {Injectable} from '@angular/core';
import {LocalStorageService} from '../local-storage/local-storage.service';
import {Project} from './project.proto';

@Injectable()
export class ProjectService {
  constructor(private storage: LocalStorageService) {
  }

  private static key(uid: string): string {
    return `uuid_${uid}`;
  }

  public add(project) {
    this.storage.set(ProjectService.key(project.uuid), JSON.stringify(project));
    return project;
  }

  public remove(uid: string) {
    this.storage.remove(ProjectService.key(uid));
  }

  public fetch(uid: string): Project {
    return JSON.parse(this.storage.get(ProjectService.key(uid)));
  }

  public list(): Project[] {
    return this.storage.keys().filter(key => {
      return (key && key.startsWith('uuid_'));
    }).map((key): Project => {
      return JSON.parse(this.storage.get(key));
    });
  }
}
