import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { OperationFormComponent } from './operation-form/operation-form.component';
import { RecordsComponent } from './records/records.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    OperationFormComponent,
    RecordsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
