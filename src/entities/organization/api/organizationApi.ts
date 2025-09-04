import { apiClient } from "@/shared/api/client";
import { ORGANIZATION_ENDPOINTS } from "../config/constants";
import type {
  IOrganization,
  IUpdateOrganizationRequest,
  IUploadPhotoResponse,
} from "../model/types";

export const organizationApi = {
  async getOrganization(id: string): Promise<IOrganization> {
    return apiClient.request<IOrganization>(
      ORGANIZATION_ENDPOINTS.GET_COMPANY(id),
    );
  },

  async updateOrganization(
    id: string,
    data: IUpdateOrganizationRequest,
  ): Promise<IOrganization> {
    return apiClient.request<IOrganization>(
      ORGANIZATION_ENDPOINTS.UPDATE_COMPANY(id),
      {
        method: "PATCH",
        body: JSON.stringify(data),
      },
    );
  },

  async deleteOrganization(id: string): Promise<void> {
    return apiClient.request<void>(ORGANIZATION_ENDPOINTS.DELETE_COMPANY(id), {
      method: "DELETE",
    });
  },

  async uploadImage(id: string, file: File): Promise<IUploadPhotoResponse> {
    return apiClient.uploadFile<IUploadPhotoResponse>(
      ORGANIZATION_ENDPOINTS.UPLOAD_IMAGE(id),
      file,
    );
  },

  async deleteImage(id: string, imageName: string): Promise<void> {
    return apiClient.request<void>(
      ORGANIZATION_ENDPOINTS.DELETE_IMAGE(id, imageName),
      {
        method: "DELETE",
      },
    );
  },
};
