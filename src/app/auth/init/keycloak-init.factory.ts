import { KeycloakService } from "keycloak-angular";

export function initializeKeycloak(keycloakAngular: KeycloakService) {
    return () =>
      keycloakAngular.init({
        config: {
          url: 'http://localhost:8081',
          realm: 'CalculatorAPI',
          clientId: 'calculator-api',
        },
        enableBearerInterceptor: true,
        bearerPrefix: 'Bearer',
        bearerExcludedUrls: ['/assets'],
        initOptions: {
          onLoad: 'check-sso',
          silentCheckSsoRedirectUri:
            window.location.origin + '/assets/silent-check-sso.html',
        },
      });
  }