export const isZeroNumberFirst = (clean: string) => {
  return clean.length >= 2 && clean.at(0) === '0' && clean.at(1) !== '.';
};
