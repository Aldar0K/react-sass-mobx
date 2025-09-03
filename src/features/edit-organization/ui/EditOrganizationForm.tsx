import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Button, Input, Select, CheckIcon, CloseIcon } from '@/shared/ui';
import type { IOrganization, IUpdateOrganizationRequest } from '@/entities/organization';
import { BUSINESS_ENTITY_OPTIONS, COMPANY_TYPE_OPTIONS } from '@/entities/organization';

interface EditOrganizationFormProps {
  organization: IOrganization;
  onSave: (data: IUpdateOrganizationRequest) => Promise<void>;
  onCancel: () => void;
  isLoading?: boolean;
}



export const EditOrganizationForm: React.FC<EditOrganizationFormProps> = observer(({
  organization,
  onSave,
  onCancel,
  isLoading = false,
}) => {
  const [formData, setFormData] = useState({
    contractNo: organization.contract.no,
    contractDate: new Date(organization.contract.issue_date).toISOString().split('T')[0],
    businessEntity: organization.businessEntity,
    companyTypes: organization.type,
  });

  const handleInputChange = (field: string, value: string): void => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleTypeToggle = (typeValue: string): void => {
    setFormData(prev => ({
      ...prev,
      companyTypes: prev.companyTypes.includes(typeValue)
        ? prev.companyTypes.filter((t: string) => t !== typeValue)
        : [...prev.companyTypes, typeValue]
    }));
  };

  const handleSubmit = async (): Promise<void> => {
    const updateData: IUpdateOrganizationRequest = {
      businessEntity: formData.businessEntity,
      contract: {
        no: formData.contractNo,
        issue_date: new Date(formData.contractDate).toISOString(),
      },
      type: formData.companyTypes,
    };

    await onSave(updateData);
  };

  return (
    <div className="edit-organization-form">
      <div className="edit-organization-form__header">
        <h3 className="edit-organization-form__title">Company Details</h3>
        <div className="edit-organization-form__actions">
          <Button
            variant="outline"
            size="mini"
            icon={<CheckIcon size={16} />}
            onClick={handleSubmit}
            disabled={isLoading}
          >
            Save changes
          </Button>
          <Button
            variant="outline"
            size="mini"
            icon={<CloseIcon size={16} />}
            onClick={onCancel}
            disabled={isLoading}
          >
            Cancel
          </Button>
        </div>
      </div>

      <div className="edit-organization-form__content">
        <div className="edit-organization-form__row">
          <span className="edit-organization-form__label">Agreement number:</span>
          <Input
            value={formData.contractNo}
            onChange={(value) => handleInputChange('contractNo', value)}
            disabled={isLoading}
          />
          <span className="edit-organization-form__label">Date:</span>
          <Input
            type="date"
            value={formData.contractDate}
            onChange={(value) => handleInputChange('contractDate', value)}
            disabled={isLoading}
          />
        </div>

        <div className="edit-organization-form__row">
          <span className="edit-organization-form__label">Business entity:</span>
          <Select
            value={formData.businessEntity}
            onChange={(value) => handleInputChange('businessEntity', value)}
            options={BUSINESS_ENTITY_OPTIONS}
            disabled={isLoading}
          />
        </div>

        <div className="edit-organization-form__row">
          <span className="edit-organization-form__label">Company type:</span>
          <div className="edit-organization-form__types">
            {COMPANY_TYPE_OPTIONS.map((option) => (
              <label key={option.value} className="edit-organization-form__type">
                <input
                  type="checkbox"
                  checked={formData.companyTypes.includes(option.value)}
                  onChange={() => handleTypeToggle(option.value)}
                  disabled={isLoading}
                />
                <span>{option.label}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
});
