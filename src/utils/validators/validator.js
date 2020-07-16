export const required = (value) => {
  if (value) return undefined;
  return 'Введите текст сообщения';
};

export const requiredLogin = (value) => {
  if (value) return undefined;
  return 'Введите логин';
};

export const requiredPassword = (value) => {
  if (value) return undefined;
  return 'Введите пароль';
};

export const maxLengthCreator = (maxLength) => (value) => {
  if (value && value.length > maxLength) return `Максимальная длинна не более ${maxLength} символов`;

  return undefined;
};
