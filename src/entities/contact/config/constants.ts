// API endpoints для контактов
export const CONTACT_ENDPOINTS = {
  GET_CONTACT: (id: string) => `/contacts/${id}`,
  UPDATE_CONTACT: (id: string) => `/contacts/${id}`,
} as const;

// Валидация для контактов
export const CONTACT_VALIDATION = {
  EMAIL_PATTERN: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  PHONE_PATTERN: /^\d{10,15}$/,
  NAME_MIN_LENGTH: 2,
  NAME_MAX_LENGTH: 50,
} as const;
