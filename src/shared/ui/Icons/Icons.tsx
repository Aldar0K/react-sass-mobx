import React from 'react';

interface IconProps {
  size?: number;
  color?: string;
  className?: string;
}

// Иконка редактирования (карандаш) - точно по дизайну
export const EditIcon: React.FC<IconProps> = ({ 
  size = 20, 
  color = 'currentColor',
  className = '' 
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 20 20"
    fill="none"
    className={className}
  >
    <path
      d="M3.13 2.76L14.12 14.12"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.63 5L15 9.38"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3.16 12.54L7.46 16.84"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Иконка удаления (корзина) - точно по дизайну
export const TrashIcon: React.FC<IconProps> = ({ 
  size = 20, 
  color = 'currentColor',
  className = '' 
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 20 20"
    fill="none"
    className={className}
  >
    <path
      d="M3.12 4.38H16.87"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.13 8.13V13.13"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11.88 8.13V13.13"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4.38 4.38V16.88C4.38 17.75 5.1 18.5 5.95 18.5H14.05C14.9 18.5 15.62 17.75 15.62 16.88V4.38"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.88 1.88H13.12V4.38H6.88V1.88Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Иконка галочки - точно по дизайну
export const CheckIcon: React.FC<IconProps> = ({ 
  size = 20, 
  color = 'currentColor',
  className = '' 
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 20 20"
    fill="none"
    className={className}
  >
    <path
      d="M3.75 5.63L13.13 8.75"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Иконка закрытия (крестик) - точно по дизайну
export const CloseIcon: React.FC<IconProps> = ({ 
  size = 20, 
  color = 'currentColor',
  className = '' 
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 20 20"
    fill="none"
    className={className}
  >
    <path
      d="M3.5 3.5L16.5 16.5"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16.5 3.5L3.5 16.5"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Стрелка влево (назад) - точно по дизайну
export const ArrowLeftIcon: React.FC<IconProps> = ({ 
  size = 20, 
  color = 'currentColor',
  className = '' 
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 20 20"
    fill="none"
    className={className}
  >
    <path
      d="M7 4L4 10L7 16"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Стрелка вниз (для селектов) - точно по дизайну
export const ArrowDownIcon: React.FC<IconProps> = ({ 
  size = 20, 
  color = 'currentColor',
  className = '' 
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 20 20"
    fill="none"
    className={className}
  >
    <path
      d="M5 7.5L10 12.5L15 7.5"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Иконка добавления фото - точно по дизайну
export const AddPhotoIcon: React.FC<IconProps> = ({ 
  size = 20, 
  color = 'currentColor',
  className = '' 
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 20 20"
    fill="none"
    className={className}
  >
    <path
      d="M1.67 1.67H16.67V15.83"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Иконка компании (портфель) - точно по дизайну  
export const CompanyIcon: React.FC<IconProps> = ({ 
  size = 20, 
  color = 'currentColor',
  className = '' 
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 20 20"
    fill="none"
    className={className}
  >
    <path
      d="M2.5 5.63H17.5"
      stroke={color}
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.88 3.13H13.12"
      stroke={color}
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2.5 9.87H17.5"
      stroke={color}
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.06 9.38H10.94"
      stroke={color}
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Логотип Oak Tree - из дизайна
export const OakTreeLogo: React.FC<IconProps> = ({ 
  size = 36, 
  color = '#FFFFFF',
  className = '' 
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 36 36"
    fill="none"
    className={className}
  >
    {/* Здесь должен быть настоящий логотип из дизайна */}
    <rect width={size} height={size} rx="8" fill={color} />
    <path d="M18 12L24 18L18 24L12 18L18 12Z" fill="#3B3B3B" />
  </svg>
);