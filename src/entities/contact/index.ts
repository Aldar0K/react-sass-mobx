// Публичный API сущности Contact
export { ContactStore } from './model/contact.store';
export { contactApi } from './api/contactApi';

// Типы
export type {
  IContact,
  IUpdateContactRequest,
} from './model/types';

// Константы
export {
  CONTACT_ENDPOINTS,
  CONTACT_VALIDATION,
} from './config/constants';

// Утилиты
export {
  getFullName,
  formatPhone,
  getInitials,
  validateEmail,
  validatePhone,
  validateName,
  normalizePhone,
} from './lib/utils';
