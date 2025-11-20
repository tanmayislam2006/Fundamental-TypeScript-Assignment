type FormateValue = string | number | boolean;
const formatValue = (value: FormateValue) => {
  if (typeof value === "string") {
    return value.trim().toUpperCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else {
    return !value;
  }
};
type ArrayType = any[] | string;
const getLength = (value: ArrayType) => {
  if (typeof value === "string") {
    return value.length;
  } else {
    return value.length;
  }
};
console.log(getLength("typescript"));
console.log(getLength([10, 20, 30, 40]));
