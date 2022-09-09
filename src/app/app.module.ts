import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { AddressFormComponent } from './address-form/address-form.component';
import { SpacerDirective } from './directive/spacer.directive';
import { CompactDirective } from './directive/compact.directive';
import { ErrorMessagingComponent } from './error-messaging/error-messaging.component';
import { MedicalFormComponent } from './medical-form/medical-form.component';

@NgModule({
  declarations: [
    AppComponent,
    AddressFormComponent,
    SpacerDirective,
    CompactDirective,
    ErrorMessagingComponent,
    MedicalFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
