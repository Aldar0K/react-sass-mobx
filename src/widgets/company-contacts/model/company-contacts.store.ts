import { makeAutoObservable } from "mobx";

export interface ICompanyContactsData {
  responsiblePerson: string;
  phoneNumber: string;
  email: string;
}

export class CompanyContactsStore {
  isEditing = false;
  isLoading = false;
  editedData: ICompanyContactsData | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  setEditing = (isEditing: boolean): void => {
    this.isEditing = isEditing;
  };

  setLoading = (isLoading: boolean): void => {
    this.isLoading = isLoading;
  };

  setEditedData = (data: ICompanyContactsData): void => {
    this.editedData = data;
  };

  updateField = (field: keyof ICompanyContactsData, value: string): void => {
    if (!this.editedData) return;
    (this.editedData as unknown as Record<string, string>)[field] = value;
  };

  startEditing = (initialData: ICompanyContactsData): void => {
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
