// Типы для организации из API документации
export interface IContract {
  no: string;
  issue_date: string; // ISO date string
}

export interface IPhoto {
  name: string;
  filepath: string;
  thumbpath: string;
  createdAt: string; // ISO date string
}

export interface IOrganization {
  id: string;
  contactId: string;
  name: string;
  shortName: string;
  businessEntity: string;
  contract: IContract;
  type: string[]; // ["funeral_home", "logistics_services", "burial_care_contractor"]
  status: string; // "active" | "inactive"
  photos: IPhoto[];
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
}

// Запросы на обновление
export interface IUpdateOrganizationRequest {
  name?: string;
  shortName?: string;
  businessEntity?: string;
  contract?: {
    no?: string;
    issue_date?: string; // ISO date string
  };
  type?: string[];
}

// Ответ загрузки фото
export interface IUploadPhotoResponse {
  name: string;
  filepath: string;
  thumbpath: string;
  createdAt: string; // ISO date string
}
