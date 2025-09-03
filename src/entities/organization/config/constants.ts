// Опции для селектов организации
export interface IBusinessEntityOption {
  value: string;
  label: string;
}

export interface ICompanyTypeOption {
  value: string;
  label: string;
}

// Константы из ТЗ
export const BUSINESS_ENTITY_OPTIONS: IBusinessEntityOption[] = [
  { value: 'Sole Proprietorship', label: 'Sole Proprietorship' },
  { value: 'Partnership', label: 'Partnership' },
  { value: 'Limited Liability Company', label: 'Limited Liability Company' },
];

export const COMPANY_TYPE_OPTIONS: ICompanyTypeOption[] = [
  { value: 'funeral_home', label: 'Funeral Home' },
  { value: 'logistics_services', label: 'Logistics services' },
  { value: 'burial_care_contractor', label: 'Burial care Contractor' },
];

// API endpoints для организации
export const ORGANIZATION_ENDPOINTS = {
  GET_COMPANY: (id: string) => `/companies/${id}`,
  UPDATE_COMPANY: (id: string) => `/companies/${id}`,
  DELETE_COMPANY: (id: string) => `/companies/${id}`,
  UPLOAD_IMAGE: (id: string) => `/companies/${id}/image`,
  DELETE_IMAGE: (id: string, imageName: string) => `/companies/${id}/image/${imageName}`,
} as const;
