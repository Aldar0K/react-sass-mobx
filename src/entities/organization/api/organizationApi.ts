import { apiClient } from '@/shared/api/client';
import type { 
  IOrganization, 
  IUpdateOrganizationRequest, 
  IUploadPhotoResponse 
} from '../model/types';
import { ORGANIZATION_ENDPOINTS } from '../config/constants';

export const organizationApi = {
  async getOrganization(id: string): Promise<IOrganization> {
    return apiClient.request<IOrganization>(ORGANIZATION_ENDPOINTS.GET_COMPANY(id));
  },

  async updateOrganization(id: string, data: IUpdateOrganizationRequest): Promise<IOrganization> {
    return apiClient.request<IOrganization>(ORGANIZATION_ENDPOINTS.UPDATE_COMPANY(id), {
      method: 'PATCH',
      data,
    });
  },

  async deleteOrganization(id: string): Promise<void> {
    return apiClient.request<void>(ORGANIZATION_ENDPOINTS.DELETE_COMPANY(id), {
      method: 'DELETE',
    });
  },

  async uploadImage(id: string, file: File): Promise<IUploadPhotoResponse> {
    const formData = new FormData();
    formData.append('file', file);
    
    return apiClient.request<IUploadPhotoResponse>(ORGANIZATION_ENDPOINTS.UPLOAD_IMAGE(id), {
      method: 'POST',
      data: formData,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },

  async deleteImage(id: string, imageName: string): Promise<void> {
    return apiClient.request<void>(ORGANIZATION_ENDPOINTS.DELETE_IMAGE(id, imageName), {
      method: 'DELETE',
    });
  },
};
