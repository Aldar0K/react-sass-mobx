import React from "react";

interface IconProps {
  size?: number;
  color?: string;
  className?: string;
}

// Иконка редактирования (карандаш) - точно по дизайну
export const EditIcon: React.FC<IconProps> = ({
  size = 20,
  color = "currentColor",
  className = "",
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 20 20"
    fill="none"
    className={className}
  >
    <path
      d="M7.24112 16.875H3.75C3.58424 16.875 3.42527 16.8092 3.30806 16.6919C3.19085 16.5747 3.125 16.4158 3.125 16.25V12.7589C3.125 12.6768 3.14117 12.5955 3.17258 12.5197C3.20398 12.4439 3.25002 12.375 3.30806 12.3169L12.6831 2.94195C12.8003 2.82474 12.9592 2.75889 13.125 2.75889C13.2908 2.75889 13.4497 2.82474 13.5669 2.94195L17.0581 6.43306C17.1753 6.55027 17.2411 6.70924 17.2411 6.875C17.2411 7.04076 17.1753 7.19974 17.0581 7.31695L7.68306 16.6919C7.62502 16.75 7.55612 16.796 7.48029 16.8274C7.40447 16.8588 7.32319 16.875 7.24112 16.875Z"
      stroke={color}
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M10.625 5L15 9.375"
      stroke={color}
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M7.46011 16.8351L3.16479 12.5397"
      stroke={color}
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

// Иконка удаления (корзина) - точно по дизайну
export const TrashIcon: React.FC<IconProps> = ({
  size = 20,
  color = "currentColor",
  className = "",
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
  color = "currentColor",
  className = "",
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
  color = "currentColor",
  className = "",
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
  color = "currentColor",
  className = "",
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 20 20"
    fill="none"
    className={className}
  >
    <g clip-path="url(#clip0_22084_407)">
      <path
        d="M13 4L7 10L13 16"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_22084_407">
        <rect width={size} height={size} fill="white" />
      </clipPath>
    </defs>
  </svg>
);

// Стрелка вниз (для селектов) - точно по дизайну
export const ArrowDownIcon: React.FC<IconProps> = ({
  size = 20,
  color = "currentColor",
  className = "",
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
  color = "currentColor",
  className = "",
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
  color = "currentColor",
  className = "",
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 20 20"
    fill="none"
    className={className}
  >
    <path
      d="M16.8755 5.625H3.12549C2.78031 5.625 2.50049 5.90482 2.50049 6.25V16.25C2.50049 16.5952 2.78031 16.875 3.12549 16.875H16.8755C17.2207 16.875 17.5005 16.5952 17.5005 16.25V6.25C17.5005 5.90482 17.2207 5.625 16.8755 5.625Z"
      stroke={color}
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13.125 5.625V4.375C13.125 4.04348 12.9933 3.72554 12.7589 3.49112C12.5245 3.2567 12.2065 3.125 11.875 3.125H8.125C7.79348 3.125 7.47554 3.2567 7.24112 3.49112C7.0067 3.72554 6.875 4.04348 6.875 4.375V5.625"
      stroke={color}
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17.5006 9.86792C15.2211 11.1867 12.6334 11.8792 9.99998 11.875C7.36696 11.8792 4.77968 11.1869 2.50049 9.86858"
      stroke={color}
      strokeWidth="1.2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M9.0625 9.375H10.9375"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Иконка архива для Contractors
export const ContractorIcon: React.FC<IconProps> = ({
  size = 20,
  color = "currentColor",
  className = "",
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    className={className}
  >
    <path
      d="M2.27 3.71L13.72 3.71"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M1 10.55L15 10.55"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect
      x="6.09"
      y="2.91"
      width="3.81"
      height="7.64"
      stroke={color}
      strokeWidth="1.5"
      fill="none"
    />
  </svg>
);

// Иконка пользователя для Clients
export const ClientIcon: React.FC<IconProps> = ({
  size = 20,
  color = "currentColor",
  className = "",
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    className={className}
  >
    <path
      d="M8 6.4C9.32548 6.4 10.4 5.32548 10.4 4C10.4 2.67452 9.32548 1.6 8 1.6C6.67452 1.6 5.6 2.67452 5.6 4C5.6 5.32548 6.67452 6.4 8 6.4Z"
      stroke={color}
      strokeWidth="1.5"
      fill="none"
    />
    <path
      d="M1.6 14.4C1.6 10.8608 4.46079 8 8 8C11.5392 8 14.4 10.8608 14.4 14.4"
      stroke={color}
      strokeWidth="1.5"
      fill="none"
    />
  </svg>
);

// Иконка поиска - точно по дизайну
export const SearchIcon: React.FC<IconProps> = ({
  size = 20,
  color = "currentColor",
  className = "",
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 20 20"
    fill="none"
    className={className}
  >
    <circle
      cx="8.8"
      cy="8.8"
      r="7.3"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15.4 15.4L18.8 18.8"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Иконка настроек - точно по дизайну
export const SettingsIcon: React.FC<IconProps> = ({
  size = 20,
  color = "currentColor",
  className = "",
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 20 20"
    fill="none"
    className={className}
  >
    <path
      d="M4.08602 7.15622C4.22664 6.85934 4.3907 6.57809 4.5782 6.30465L4.54695 4.2734C4.54695 4.0859 4.62508 3.90622 4.77352 3.78122C5.50008 3.17184 6.3282 2.67965 7.24227 2.35153C7.42195 2.28903 7.61727 2.30465 7.77352 2.40622L9.5157 3.45309C9.84383 3.42965 10.172 3.42965 10.5001 3.45309L12.2423 2.40622C12.4063 2.31247 12.6016 2.28903 12.7813 2.35153C13.672 2.67184 14.5079 3.1484 15.2501 3.7734C15.3907 3.89059 15.4766 4.07809 15.4688 4.26559L15.4376 6.29684C15.6251 6.57028 15.7891 6.85153 15.9298 7.1484L17.7032 8.13278C17.8673 8.22653 17.9845 8.38278 18.0157 8.57028C18.1798 9.49997 18.1876 10.4687 18.0157 11.414C17.9845 11.6015 17.8673 11.7578 17.7032 11.8515L15.9298 12.8359C15.7891 13.1328 15.6251 13.414 15.4376 13.6875L15.4688 15.7187C15.4688 15.9062 15.3907 16.0859 15.2423 16.2109C14.5157 16.8203 13.6876 17.3125 12.7735 17.6406C12.5938 17.7031 12.3985 17.6875 12.2423 17.5859L10.5001 16.539C10.172 16.5625 9.84383 16.5625 9.5157 16.539L7.77352 17.5859C7.60945 17.6797 7.41414 17.7031 7.23445 17.6406C6.34383 17.3203 5.50789 16.8437 4.7657 16.2187C4.62508 16.1015 4.53914 15.914 4.54695 15.7265L4.5782 13.6953C4.3907 13.4218 4.22664 13.1406 4.08602 12.8437L2.31258 11.8593C2.14852 11.7656 2.03133 11.6093 2.00008 11.4218C1.83602 10.4922 1.8282 9.5234 2.00008 8.57809C2.03133 8.39059 2.14852 8.23434 2.31258 8.14059L4.08602 7.15622Z"
      stroke={color}
      strokeOpacity="0.95"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10 13.75C12.0711 13.75 13.75 12.0711 13.75 10C13.75 7.92893 12.0711 6.25 10 6.25C7.92893 6.25 6.25 7.92893 6.25 10C6.25 12.0711 7.92893 13.75 10 13.75Z"
      stroke={color}
      strokeOpacity="0.95"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Иконка выхода - точно по дизайну
export const SignOutIcon: React.FC<IconProps> = ({
  size = 20,
  color = "currentColor",
  className = "",
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 20 20"
    fill="none"
    className={className}
  >
    <path
      d="M7.5 17.5H4.5C4.10218 17.5 3.72064 17.342 3.43934 17.0607C3.15804 16.7794 3 16.3978 3 16V4C3 3.60218 3.15804 3.22064 3.43934 2.93934C3.72064 2.65804 4.10218 2.5 4.5 2.5H7.5"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <polyline
      points="13,6 17,10 13,14"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <line
      x1="17"
      y1="10"
      x2="7"
      y2="10"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const OakTreeLogo: React.FC<IconProps> = ({
  size = 36,
  color = "#FFFFFF",
  className = "",
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 36 36"
    fill="none"
    className={className}
  >
    <path
      d="M17.9999 0C22.9707 0 27.471 2.01471 30.7283 5.2722C34.0806 8.62396 36 13.2722 36 17.9998C36 22.9707 33.9858 27.4703 30.7283 30.7276C27.471 33.9849 22.9707 36 17.9999 36C13.0297 36 8.52939 33.9849 5.272 30.7276C2.0146 27.4703 0 22.9707 0 17.9998C0 8.08225 8.08414 0 17.9999 0ZM15.5361 34.5984C15.9296 33.623 16.1368 32.4978 16.2061 31.3629C16.297 29.8694 16.149 28.3685 15.8711 27.1652C15.6007 25.9935 14.7402 25.09 13.5787 24.2794C10.2549 26.544 5.70273 26.3106 2.54235 24.5361C3.39129 26.542 4.61916 28.3472 6.13615 29.8641C8.62345 32.3518 11.8889 34.0618 15.5362 34.5984H15.5361ZM1.84059 22.5305C4.87601 24.7293 9.08983 25.4357 12.4096 23.5403C11.8084 23.1906 11.164 22.8482 10.5028 22.4969C7.70736 21.0122 3.42859 18.7029 1.55119 14.6739C1.33513 15.7491 1.22167 16.8612 1.22167 17.9998C1.22167 19.5701 1.43697 21.0894 1.84052 22.5305H1.84059ZM2.11472 12.5851C2.50712 15.3411 5.83766 18.1579 7.55123 19.3365C7.96896 18.7298 8.34217 17.6645 8.52196 16.3422C8.69838 15.0501 8.67981 13.5388 8.32958 11.995C7.12972 10.6058 6.06287 9.00239 5.36902 6.95568C3.94333 8.58474 2.82776 10.4917 2.11465 12.5851L2.11472 12.5851ZM6.35337 5.92235C7.39717 9.5783 9.76118 11.8207 11.9783 13.923C12.5258 14.4423 13.0645 14.9536 13.5763 15.4766C13.943 11.6966 12.5918 6.02728 9.68769 3.42214C8.4727 4.1164 7.35355 4.95783 6.35337 5.92235ZM10.8144 2.83447C14.0841 6.18175 15.457 12.1859 14.6717 16.6796C15.3686 17.5155 15.9701 18.4121 16.4107 19.4386C17.1163 21.0859 17.6808 23.1168 17.9831 25.6508C17.9889 25.5476 17.9945 25.4454 18.0006 25.3442C18.1647 22.6659 18.5174 20.545 19.0502 18.8415C19.4592 15.0413 18.5882 13.418 17.7625 11.8812C16.9027 10.2799 15.1091 6.24512 16.3292 1.30401C14.3722 1.49722 12.515 2.02648 10.8144 2.8344V2.83447ZM17.4645 1.22998C16.3375 5.62717 18.0894 9.8529 18.8616 11.2903C19.4634 12.4106 20.088 13.5731 20.3155 15.43C22.0295 12.075 22.818 5.31878 21.1186 1.51078C20.108 1.32087 19.066 1.22131 17.9999 1.22131C17.821 1.22131 17.6425 1.22454 17.4644 1.22998H17.4645ZM22.39 1.80141C23.5222 4.92129 23.3178 9.21149 22.9426 11.1263C23.909 10.6369 25.1612 9.72733 26.3029 8.67653C27.4992 7.57425 28.5467 6.33959 28.9733 5.30633C27.0962 3.68292 24.8554 2.46808 22.39 1.80141ZM29.927 6.19909C29.3468 7.31802 28.3063 8.52811 27.1477 9.5944C25.5927 11.0262 23.7865 12.2306 22.5872 12.6178C22.1817 14.0777 21.64 15.4699 21.1417 16.7481C20.8107 17.5992 20.4998 18.3973 20.2611 19.1496H20.2588C19.747 20.7616 19.4063 22.8035 19.2467 25.4174C19.2177 25.886 19.1948 26.3722 19.1777 26.8771C19.2758 26.46 19.3914 26.0764 19.5258 25.737L19.44 25.7024C20.6249 22.7966 21.7439 20.176 23.7448 18.006C23.9564 17.7766 24.1776 17.5529 24.4091 17.335C26.3599 15.3189 28.1923 13.2722 29.5177 11.2022C30.271 10.0248 30.8596 8.84104 31.2092 7.65262C30.8097 7.14352 30.3818 6.65844 29.927 6.19909ZM32.1015 8.90317C31.7179 9.90533 31.1954 10.8959 30.5681 11.8761C29.9705 12.8092 29.2779 13.7341 28.5218 14.6504C29.7754 14.0941 32.133 13.1694 33.9372 12.7392C33.487 11.375 32.8668 10.0879 32.1015 8.90317ZM34.2836 13.9379C30.0516 14.8719 26.4695 16.8923 24.6633 18.8508C23.4766 20.1378 22.6104 21.6318 21.842 23.2735C23.1143 22.4858 24.4539 22.1009 25.8243 21.707C28.0645 21.0635 32.7992 18.9887 34.6071 15.5897C34.5266 15.0297 34.4178 14.4788 34.2836 13.9379ZM34.7755 17.665C32.8377 20.1542 29.3532 21.9062 27.674 22.4554C28.3391 22.6189 28.9734 22.8326 29.5783 23.0826C30.9281 23.641 32.1259 24.3749 33.1975 25.1195C34.2121 22.9588 34.7787 20.5457 34.7787 17.9998C34.7787 17.8882 34.7776 17.7761 34.7755 17.6651V17.665ZM32.6207 26.2378C31.5743 25.5025 30.4067 24.7739 29.1044 24.2359C27.7851 23.6904 26.318 23.3349 24.6823 23.3582C23.4181 23.7811 22.211 24.3426 21.1289 25.4252L21.1281 25.4235C20.6076 25.9498 20.2697 27.2762 20.1145 28.9317C19.9515 30.672 20.0094 32.7321 20.2834 34.6239C24.0038 34.1179 27.3361 32.393 29.865 29.8641C30.9389 28.79 31.8684 27.5704 32.6206 26.2378H32.6207ZM9.75829 16.5082C9.55717 17.983 9.1148 19.2244 8.59799 20.0094C9.42003 20.506 10.2668 20.9561 11.0894 21.3931C13.5566 22.7033 15.8159 23.904 16.759 25.9306C16.4765 23.4625 15.9378 21.5025 15.2628 19.9276C14.417 17.9555 12.8106 16.4319 11.1185 14.8268C10.6914 14.4222 10.2598 14.0121 9.83157 13.5886C9.91703 14.624 9.88049 15.614 9.75822 16.5082H9.75829Z"
      fill={color}
    />
  </svg>
);
