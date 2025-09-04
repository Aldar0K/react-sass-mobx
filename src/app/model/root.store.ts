import { ContactStore } from "@/entities/contact";
import { OrganizationStore } from "@/entities/organization";
import { NavigationStore } from "@/features/navigation";
import { authApi } from "@/shared/api";
import { makeAutoObservable, runInAction } from "mobx";

export class RootStore {
  organizationStore: OrganizationStore;
  contactStore: ContactStore;
  navigationStore: NavigationStore;

  isAuthenticated = false;
  authToken: string | null = null;
  isAuthLoading = false;
  authError: string | null = null;

  constructor() {
    makeAutoObservable(this);
    this.organizationStore = new OrganizationStore();
    this.contactStore = new ContactStore();
    this.navigationStore = new NavigationStore();
  }

  async authenticate(username: string): Promise<void> {
    this.setAuthLoading(true);
    this.setAuthError(null);

    try {
      const token = await authApi.getToken(username);
      runInAction(() => {
        this.authToken = token;
        this.isAuthenticated = true;
      });
    } catch (error) {
      runInAction(() => {
        this.setAuthError(
          error instanceof Error ? error.message : "Authentication failed",
        );
      });
      throw error;
    } finally {
      runInAction(() => {
        this.setAuthLoading(false);
      });
    }
  }

  logout(): void {
    this.isAuthenticated = false;
    this.authToken = null;
    this.authError = null;
  }

  private setAuthLoading(loading: boolean): void {
    this.isAuthLoading = loading;
  }

  private setAuthError(error: string | null): void {
    this.authError = error;
  }

  clearAuthError(): void {
    this.authError = null;
  }
}

export const rootStore = new RootStore();
