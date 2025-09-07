// Маппинг API значений в читаемые названия
export const COMPANY_TYPE_MAP: Record<string, string> = {
  funeral_home: "Funeral Home",
  logistics_services: "Logistics services", 
  burial_care_contractor: "Burial care Contractor",
};

// Функция для конвертации API значений в читаемые названия
export const mapCompanyTypesToLabels = (types: string[]): string[] => {
  return types.map(type => COMPANY_TYPE_MAP[type] || type);
};

// Функция для конвертации читаемых названий в API значения
export const mapLabelsToCompanyTypes = (labels: string[]): string[] => {
  const reverseMap: Record<string, string> = {};
  Object.entries(COMPANY_TYPE_MAP).forEach(([key, value]) => {
    reverseMap[value] = key;
  });
  
  return labels.map(label => reverseMap[label] || label);
};
