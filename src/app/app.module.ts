import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule, routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { OperationFormComponent } from './operation-form/operation-form.component';
import { RecordsComponent } from './records/records.component';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { KeycloakBearerInterceptor, KeycloakService } from 'keycloak-angular';
import { initializeKeycloak } from './auth/init/keycloak-init.factory';

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
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    KeycloakService,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService]
    }, 
    {
      provide: HTTP_INTERCEPTORS, 
      useClass: KeycloakBearerInterceptor,
      multi: true
    },
    provideHttpClient(
      withInterceptorsFromDi()
    ),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
