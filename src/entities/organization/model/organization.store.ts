import { makeAutoObservable, runInAction } from "mobx";
import { organizationApi } from "../api/organizationApi";
import type {
  IOrganization,
  IUpdateOrganizationRequest,
  IUploadPhotoResponse,
} from "./types";

export class OrganizationStore {
  organization: IOrganization | null = null;
  isLoading = false;
  error: string | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  async loadOrganization(id: string): Promise<void> {
    this.setLoading(true);
    this.setError(null);

    try {
      const organization = await organizationApi.getOrganization(id);
      runInAction(() => {
        this.organization = organization;
      });
    } catch (error) {
      runInAction(() => {
        this.setError(
          error instanceof Error
            ? error.message
            : "Failed to load organization",
        );
      });
    } finally {
      runInAction(() => {
        this.setLoading(false);
      });
    }
  }

  async updateOrganization(
    id: string,
    data: IUpdateOrganizationRequest,
  ): Promise<void> {
    this.setLoading(true);
    this.setError(null);

    try {
      const updatedOrganization = await organizationApi.updateOrganization(
        id,
        data,
      );
      runInAction(() => {
        this.organization = updatedOrganization;
      });
    } catch (error) {
      runInAction(() => {
        this.setError(
          error instanceof Error
            ? error.message
            : "Failed to update organization",
        );
      });
      throw error;
    } finally {
      runInAction(() => {
        this.setLoading(false);
      });
    }
  }

  async deleteOrganization(id: string): Promise<void> {
    this.setLoading(true);
    this.setError(null);

    try {
      await organizationApi.deleteOrganization(id);
      runInAction(() => {
        this.organization = null;
      });
    } catch (error) {
      runInAction(() => {
        this.setError(
          error instanceof Error
            ? error.message
            : "Failed to delete organization",
        );
      });
      throw error;
    } finally {
      runInAction(() => {
        this.setLoading(false);
      });
    }
  }

  async uploadPhoto(id: string, file: File): Promise<void> {
    this.setLoading(true);
    this.setError(null);

    try {
      const newPhoto: IUploadPhotoResponse = await organizationApi.uploadImage(
        id,
        file,
      );
      runInAction(() => {
        if (this.organization) {
          this.organization.photos = [...this.organization.photos, newPhoto];
        }
      });
    } catch (error) {
      runInAction(() => {
        this.setError(
          error instanceof Error ? error.message : "Failed to upload photo",
        );
      });
      throw error;
    } finally {
      runInAction(() => {
        this.setLoading(false);
      });
    }
  }

  async deletePhoto(id: string, imageName: string): Promise<void> {
    this.setLoading(true);
    this.setError(null);

    try {
      await organizationApi.deleteImage(id, imageName);
      runInAction(() => {
        if (this.organization) {
          this.organization.photos = this.organization.photos.filter(
            (photo) => photo.name !== imageName,
          );
        }
      });
    } catch (error) {
      runInAction(() => {
        this.setError(
          error instanceof Error ? error.message : "Failed to delete photo",
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
