import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from "@angular/router";
import { KeycloakAuthGuard, KeycloakService } from "keycloak-angular";

@Injectable({
    providedIn: 'root',
  })
export class AuthGuard extends KeycloakAuthGuard {
    constructor(
        protected override readonly router: Router,
        protected override readonly keycloakAngular: KeycloakService
    ) {
        super(router, keycloakAngular);
    }

    public async isAccessAllowed(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
      ) {

        if (!this.authenticated) {
          await this.keycloakAngular.login({
            redirectUri: window.location.origin + state.url,
          });
        }

        const requiredRoles = route.data['roles'];

        if (!Array.isArray(requiredRoles) || requiredRoles.length === 0) {
          return true;
        }

        return requiredRoles.every((role) => this.roles.includes(role));
      }
}