import { Injectable } from "@angular/core";
import { KeycloakService } from "keycloak-angular";

@Injectable({ providedIn: 'root' })
export class KeycloakOperationService {
  constructor(private readonly keycloakAngular: KeycloakService) {}

  isLoggedIn(): Promise<boolean> {
    return this.keycloakAngular.isLoggedIn();
  }
  logout(): void {
    this.keycloakAngular.logout();
  }
  getUserProfile(): any {
    return this.keycloakAngular.loadUserProfile();
  }
  // Add other methods as needed for token access, user info retrieval, etc.}
}