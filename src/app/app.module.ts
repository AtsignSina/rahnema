import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LocalStorageService} from './local-storage/local-storage.service';
import {MainComponent} from './main/main.component';
import {WizardBaseComponent} from './wizard/wizard-base/wizard-base.component';
import {WizardDetailComponent} from './wizard/wizard-detail/wizard-detail.component';
import {WizardSettingComponent} from './wizard/wizard-setting/wizard-setting.component';
import {WizardDeliveryComponent} from './wizard/wizard-delivery/wizard-delivery.component';
import {WizardAcceptComponent} from './wizard/wizard-accept/wizard-accept.component';
import {ReactiveFormsModule} from '@angular/forms';
import {WizardService} from './wizard/wizard.service';
import {StoreModule} from '@ngrx/store';
import {projectReducer} from './project/project.reducer';
import {EffectsModule} from '@ngrx/effects';
import {ProjectEffect} from './project/project.effect';
import {ProjectService} from './project/project.service';
import {Ng2SmartTableModule} from 'ng2-smart-table';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    WizardBaseComponent,
    WizardDetailComponent,
    WizardSettingComponent,
    WizardDeliveryComponent,
    WizardAcceptComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    StoreModule.forRoot({
      project: projectReducer
    }),
    EffectsModule.forRoot([ProjectEffect]),
    Ng2SmartTableModule,
  ],
  providers: [LocalStorageService, ProjectService, WizardService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
