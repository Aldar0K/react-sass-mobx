// Публичный API сущности Organization
export { organizationApi } from './api/organizationApi';
export { OrganizationStore } from './model/organization.store';

// Типы
export type {
    IContract, IOrganization, IPhoto,
    IUpdateOrganizationRequest,
    IUploadPhotoResponse
} from './model/types';

// Константы
export {
    BUSINESS_ENTITY_OPTIONS,
    COMPANY_TYPE_OPTIONS,
    ORGANIZATION_ENDPOINTS
} from './config/constants';

export type {
    IBusinessEntityOption,
    ICompanyTypeOption
} from './config/constants';

// Утилиты
export {
    formatContractDate,
    formatOrganizationStatus, getCompanyTypeLabels, getOrganizationDisplayName,
    isContractActive, validateContractNumber
} from './lib/utils';

