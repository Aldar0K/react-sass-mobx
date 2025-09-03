// Публичный API сущности Organization
export { OrganizationStore } from './model/organization.store';
export { organizationApi } from './api/organizationApi';

// Типы
export type {
  IOrganization,
  IContract,
  IPhoto,
  IUpdateOrganizationRequest,
  IUploadPhotoResponse,
} from './model/types';

// Константы
export {
  BUSINESS_ENTITY_OPTIONS,
  COMPANY_TYPE_OPTIONS,
  ORGANIZATION_ENDPOINTS,
} from './config/constants';

export type {
  IBusinessEntityOption,
  ICompanyTypeOption,
} from './config/constants';

// Утилиты
export {
  formatContractDate,
  formatOrganizationStatus,
  getOrganizationDisplayName,
  isContractActive,
  getCompanyTypeLabels,
  validateContractNumber,
} from './lib/utils';
