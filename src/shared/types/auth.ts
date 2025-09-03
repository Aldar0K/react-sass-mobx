// Типы для авторизации
export interface IAuthResponse {
  token: string;
}

export interface IUploadPhotoResponse {
  name: string;
  filepath: string;
  thumbpath: string;
  createdAt: string; // ISO date string
}

// API endpoints из документации
export const API_ENDPOINTS = {
  AUTH: '/auth',
  COMPANIES: '/companies',
  CONTACTS: '/contacts',
} as const;

// HTTP методы
export const HTTP_METHODS = {
  GET: 'GET',
  POST: 'POST',
  PATCH: 'PATCH',
  DELETE: 'DELETE',
} as const;
