/**
 * Форматирует номер телефона в формат +1 702 555 2345
 * @param phone - номер телефона в любом формате
 * @returns отформатированный номер телефона
 */
export const formatPhoneNumber = (phone: string): string => {
  if (!phone) return "";

  // Убираем все символы кроме цифр
  const digits = phone.replace(/\D/g, "");

  // Если номер начинается с 1, убираем его (код страны США)
  const cleanDigits = digits.startsWith("1") ? digits.slice(1) : digits;

  // Форматируем в +1 XXX XXX XXXX
  if (cleanDigits.length >= 10) {
    const areaCode = cleanDigits.slice(0, 3);
    const firstPart = cleanDigits.slice(3, 6);
    const secondPart = cleanDigits.slice(6, 10);
    return `+1 ${areaCode} ${firstPart} ${secondPart}`;
  }

  // Если номер короче, возвращаем как есть
  return phone;
};

/**
 * Убирает форматирование из номера телефона, оставляя только цифры
 * @param formattedPhone - отформатированный номер телефона
 * @returns номер телефона только с цифрами
 */
export const unformatPhoneNumber = (formattedPhone: string): string => {
  if (!formattedPhone) return "";

  // Убираем все символы кроме цифр
  const digits = formattedPhone.replace(/\D/g, "");

  // Если номер начинается с 1, убираем его (код страны США)
  return digits.startsWith("1") ? digits.slice(1) : digits;
};
