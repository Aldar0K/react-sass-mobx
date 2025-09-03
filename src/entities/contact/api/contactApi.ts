import { apiClient } from '@/shared/api/client';
import type { IContact, IUpdateContactRequest } from '../model/types';
import { CONTACT_ENDPOINTS } from '../config/constants';

export const contactApi = {
  async getContact(id: string): Promise<IContact> {
    return apiClient.request<IContact>(CONTACT_ENDPOINTS.GET_CONTACT(id));
  },

  async updateContact(id: string, data: IUpdateContactRequest): Promise<IContact> {
    return apiClient.request<IContact>(CONTACT_ENDPOINTS.UPDATE_CONTACT(id), {
      method: 'PATCH',
      data,
    });
  },
};
