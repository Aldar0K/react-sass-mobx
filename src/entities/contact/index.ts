// Публичный API сущности Contact
export { contactApi } from "./api/contactApi";
export { ContactStore } from "./model/contact.store";

// Типы
export type { IContact, IUpdateContactRequest } from "./model/types";

// Константы
export { CONTACT_ENDPOINTS, CONTACT_VALIDATION } from "./config/constants";

// Утилиты
export {
  formatPhone,
  getFullName,
  getInitials,
  normalizePhone,
  validateEmail,
  validateName,
  validatePhone,
} from "./lib/utils";
