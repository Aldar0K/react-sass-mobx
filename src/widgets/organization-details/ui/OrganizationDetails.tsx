import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Button, EditIcon } from '@/shared/ui';
import { EditOrganizationForm } from '@/features/edit-organization';
import type { IOrganization } from '@/entities/organization';
// import styles from './OrganizationDetails.module.scss';

interface OrganizationDetailsProps {
  organization: IOrganization;
  isLoading?: boolean;
  onUpdate: (data: any) => Promise<void>;
  className?: string;
}

export const OrganizationDetails: React.FC<OrganizationDetailsProps> = observer(({
  organization,
  isLoading = false,
  onUpdate,
  className = '',
}) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = (): void => {
    setIsEditing(true);
  };

  const handleCancel = (): void => {
    setIsEditing(false);
  };

  const handleSave = async (data: any): Promise<void> => {
    await onUpdate(data);
    setIsEditing(false);
  };

  const formatDate = (dateString: string): string => {
    return new Date(dateString).toLocaleDateString('ru-RU');
  };

  const formatTypes = (types: string[]): string => {
    return types.join(', ');
  };

  const detailsClass = [
    'organization-details',
    className,
  ].filter(Boolean).join(' ');

  if (isEditing) {
    return (
      <div className={detailsClass}>
        <EditOrganizationForm
          organization={organization}
          onSave={handleSave}
          onCancel={handleCancel}
          isLoading={isLoading}
        />
      </div>
    );
  }

  return (
    <div className={detailsClass}>
      <div className="organization-details__header">
        <h3 className="organization-details__title">Company Details</h3>
        <Button
          variant="outline"
          size="mini"
          icon={<EditIcon size={16} />}
          onClick={handleEdit}
          disabled={isLoading}
        >
          Edit
        </Button>
      </div>

      <div className="organization-details__content">
        <div className="organization-details__row">
          <span className="organization-details__label">Agreement:</span>
          <span className="organization-details__value">
            {organization.contract.no}
          </span>
          <span className="organization-details__separator">/</span>
          <span className="organization-details__value">
            {formatDate(organization.contract.issue_date)}
          </span>
        </div>

        <div className="organization-details__row">
          <span className="organization-details__label">Business entity:</span>
          <span className="organization-details__value">
            {organization.businessEntity}
          </span>
        </div>

        <div className="organization-details__row">
          <span className="organization-details__label">Company type:</span>
          <span className="organization-details__value">
            {formatTypes(organization.type)}
          </span>
        </div>
      </div>
    </div>
  );
});
