import { makeAutoObservable, runInAction } from "mobx";
import { contactApi } from "../api/contactApi";
import type { IContact, IUpdateContactRequest } from "./types";

export class ContactStore {
  contact: IContact | null = null;
  isLoading = false;
  error: string | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  async loadContact(id: string): Promise<void> {
    this.setLoading(true);
    this.setError(null);

    try {
      const contact = await contactApi.getContact(id);
      runInAction(() => {
        this.contact = contact;
      });
    } catch (error) {
      runInAction(() => {
        this.setError(
          error instanceof Error ? error.message : "Failed to load contact",
        );
      });
    } finally {
      runInAction(() => {
        this.setLoading(false);
      });
    }
  }

  async updateContact(id: string, data: IUpdateContactRequest): Promise<void> {
    this.setLoading(true);
    this.setError(null);

    try {
      const updatedContact = await contactApi.updateContact(id, data);
      runInAction(() => {
        this.contact = updatedContact;
      });
    } catch (error) {
      runInAction(() => {
        this.setError(
          error instanceof Error ? error.message : "Failed to update contact",
        );
      });
      throw error;
    } finally {
      runInAction(() => {
        this.setLoading(false);
      });
    }
  }

  private setLoading(loading: boolean): void {
    this.isLoading = loading;
  }

  private setError(error: string | null): void {
    this.error = error;
  }

  clearError(): void {
    this.error = null;
  }
}
