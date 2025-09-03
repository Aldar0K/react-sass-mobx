// Типы для контактов из API документации
export interface IContact {
  id: string;
  lastname: string;
  firstname: string;
  phone: string;
  email: string;
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
}

// Запросы на обновление контакта
export interface IUpdateContactRequest {
  lastname?: string;
  firstname?: string;
  phone?: string;
  email?: string;
}
