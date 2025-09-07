import { makeAutoObservable } from "mobx";

export interface ICompanyDetailsData {
  agreementNumber: string;
  agreementDate: string;
  businessEntity: string;
  type: string[]; // Массив для множественного выбора (соответствует API)
}

export class CompanyDetailsStore {
  isEditing = false;
  isLoading = false;
  editedData: ICompanyDetailsData | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  setEditing = (isEditing: boolean): void => {
    this.isEditing = isEditing;
  };

  setLoading = (isLoading: boolean): void => {
    this.isLoading = isLoading;
  };

  setEditedData = (data: ICompanyDetailsData): void => {
    this.editedData = data;
  };

  updateField = (
    field: keyof ICompanyDetailsData,
    value: string | string[],
  ): void => {
    if (!this.editedData) return;
    (this.editedData as unknown as Record<string, string | string[]>)[field] =
      value;
  };

  startEditing = (initialData: ICompanyDetailsData): void => {
    this.editedData = { ...initialData };
    this.isEditing = true;
  };

  cancelEditing = (): void => {
    this.isEditing = false;
    this.editedData = null;
  };

  reset = (): void => {
    this.isEditing = false;
    this.isLoading = false;
    this.editedData = null;
  };
}
