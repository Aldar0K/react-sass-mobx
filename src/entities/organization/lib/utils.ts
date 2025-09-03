import type { IContract, IOrganization } from '../model/types';

// Утилиты для работы с организацией
export const formatContractDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  });
};

export const formatOrganizationStatus = (status: string): string => {
  return status.charAt(0).toUpperCase() + status.slice(1).toLowerCase();
};

export const getOrganizationDisplayName = (organization: IOrganization): string => {
  return organization.shortName || organization.name;
};

export const isContractActive = (contract: IContract): boolean => {
  const issueDate = new Date(contract.issue_date);
  const now = new Date();
  // Простая проверка - контракт активен если выдан не позже чем год назад
  const oneYearAgo = new Date();
  oneYearAgo.setFullYear(now.getFullYear() - 1);
  
  return issueDate >= oneYearAgo;
};

export const getCompanyTypeLabels = (types: string[]): string[] => {
  const typeMap: Record<string, string> = {
    'funeral_home': 'Funeral Home',
    'logistics_services': 'Logistics Services',
    'burial_care_contractor': 'Burial Care Contractor',
  };
  
  return types.map(type => typeMap[type] || type);
};

export const validateContractNumber = (contractNo: string): boolean => {
  // Простая валидация номера контракта: цифры/дефис/цифры
  const contractPattern = /^\d+\/\d+-\d+$/;
  return contractPattern.test(contractNo);
};
