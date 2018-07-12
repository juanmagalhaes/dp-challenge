export const smaller = 2;
export const small = 4;
export const medium = 8;
export const large = 20;
export const larger = 60;

const units = {
  smaller,
  small,
  medium,
  large,
  larger
};

export const px = Object.keys(units)
  .map(unit => ({ [unit]: `${units[unit]}px` }))
  .reduce(
    (acc, value) => ({
      ...acc,
      ...value
    }),
    {}
  );
