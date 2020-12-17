
type validateType = (value: string) => string | undefined


export const required: validateType = (value) => {
  if (value) return undefined;
  return 'Введите текст сообщения';
};

export const requiredLogin: validateType = (value) => {
  if (value) return undefined;
  return 'Введите логин';
};

export const requiredPassword: validateType = (value) => {
  if (value) return undefined;
  return 'Введите пароль';
};

export const maxLengthCreator = (maxLength: number): validateType => (value) => {
  if (value && value.length > maxLength) return `Максимальная длинна не более ${maxLength} символов`;

  return undefined;
};
