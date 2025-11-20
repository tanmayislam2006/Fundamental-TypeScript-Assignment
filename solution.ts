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

