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
class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  getDetails() {
    return `'Name: ${this.name}, Age: ${this.age}'`;
  }
}

