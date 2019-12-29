import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LocalStorageService} from './local-storage/local-storage.service';
import {MainComponent} from './main/main.component';
import {WizardBaseComponent} from './wizard/wizard-base/wizard-base.component';
import {ReactiveFormsModule} from '@angular/forms';
import {WizardService} from './wizard/wizard.service';
import {StoreModule} from '@ngrx/store';
import {projectReducer} from './project/project.reducer';
import {EffectsModule} from '@ngrx/effects';
import {ProjectEffect} from './project/project.effect';
import {ProjectService} from './project/project.service';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    WizardBaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    StoreModule.forRoot({
      project: projectReducer
    }),
    EffectsModule.forRoot([ProjectEffect])
  ],
  providers: [LocalStorageService, ProjectService, WizardService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
