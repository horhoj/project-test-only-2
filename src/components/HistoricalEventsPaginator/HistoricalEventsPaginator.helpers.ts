export const getDisplayData = (
  current: number,
  count: number,
  minDigit: number,
) => {
  const format = (value: number) => {
    const charCount = value.toString().length;
    const x =
      minDigit - charCount
        ? Array(minDigit - charCount)
            .fill(null)
            .map(() => 0)
            .join('')
        : '';
    return `${x}${value}`;
  };

  return `${format(current)}-${format(count)}`;
};
