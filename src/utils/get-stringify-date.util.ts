export const getStringifyDate = (value: Date) => {
  return value.toLocaleString('default', {
    dateStyle: 'long',
  });
};
