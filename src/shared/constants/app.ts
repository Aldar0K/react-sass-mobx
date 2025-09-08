// Общие константы приложения

// ID организации по умолчанию для демо
export const DEFAULT_ORGANIZATION_ID = "12";

// ID контакта по умолчанию для демо
export const DEFAULT_CONTACT_ID = "16";

// Тестовый пользователь
export const TEST_USER = "testuser";

// Размеры иконок
export const ICON_SIZES = {
  SMALL: 16,
  MEDIUM: 24,
  LARGE: 32,
  XLARGE: 36,
} as const;

// Цвета иконок
export const ICON_COLORS = {
  WHITE: "rgba(255, 255, 255, 0.95)",
  WHITE_DISABLED: "rgba(255, 255, 255, 0.5)",
  PRIMARY: "#3b3b3b",
  SECONDARY: "#6243e6",
  PURE_WHITE: "#FFFFFF",
} as const;

// Размеры кнопок
export const BUTTON_SIZES = {
  NORMAL: 40,
  MINI: 28,
} as const;

// Padding для кнопок
export const BUTTON_PADDING = {
  NORMAL_TEXT_ONLY: "10px 12px",
  NORMAL_ICON_TEXT: "10px 40px 10px 12px",
  NORMAL_ICON_ONLY: "10px 12px",
  MINI_ALL: "6px",
} as const;

// Тексты по умолчанию
export const DEFAULT_TEXTS = {
  COMPANY_NAME: "Company Name",
  LOADING: "Loading...",
  NO_ORGANIZATION: "No organization found",
} as const;
