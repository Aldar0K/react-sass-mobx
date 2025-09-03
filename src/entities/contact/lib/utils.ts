import type { IContact } from '../model/types';
import { CONTACT_VALIDATION } from '../config/constants';

// Утилиты для работы с контактами
export const getFullName = (contact: IContact): string => {
  return `${contact.firstname} ${contact.lastname}`.trim();
};

export const formatPhone = (phone: string): string => {
  // Форматируем телефон как в дизайне: +1 702 555 2345
  if (phone.startsWith('1702')) {
    return `+1 702 ${phone.slice(4, 7)} ${phone.slice(7)}`;
  }
  
  // Для других форматов телефонов
  if (phone.length === 10) {
    return `${phone.slice(0, 3)} ${phone.slice(3, 6)} ${phone.slice(6)}`;
  }
  
  return phone;
};

export const getInitials = (contact: IContact): string => {
  const firstInitial = contact.firstname.charAt(0).toUpperCase();
  const lastInitial = contact.lastname.charAt(0).toUpperCase();
  return `${firstInitial}${lastInitial}`;
};

// Валидация контактных данных
export const validateEmail = (email: string): boolean => {
  return CONTACT_VALIDATION.EMAIL_PATTERN.test(email);
};

export const validatePhone = (phone: string): boolean => {
  // Убираем все не-цифры для валидации
  const cleanPhone = phone.replace(/\D/g, '');
  return CONTACT_VALIDATION.PHONE_PATTERN.test(cleanPhone);
};

export const validateName = (name: string): boolean => {
  const trimmedName = name.trim();
  return trimmedName.length >= CONTACT_VALIDATION.NAME_MIN_LENGTH && 
         trimmedName.length <= CONTACT_VALIDATION.NAME_MAX_LENGTH;
};

export const normalizePhone = (phone: string): string => {
  // Убираем все символы кроме цифр
  return phone.replace(/\D/g, '');
};
