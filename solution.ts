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
    return `"Name: ${this.name}, Age: ${this.age}"`;
  }
}

type BookArray = {
  title: string;
  rating: number;
};
const filterByRating = (arr: BookArray[]): BookArray[] => {
  const result = arr.filter((a) => a.rating >= 4);
  return result;
};

type UserType = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};
const filterActiveUsers = (arr: UserType[]): UserType[] => {
  const result = arr.filter((a) => a.isActive === true);
  return result;
};
interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}
const printBookDetails = (bookInfo: Book) => {
  return console.log(
    `Title: ${bookInfo.title}, Author: ${bookInfo.author}, Published: ${
      bookInfo.publishedYear
    }, Available: ${bookInfo.isAvailable ? "Yes" : "No"}`
  );
};

type UniqueArray = (number | string)[];
const getUniqueValues = (arr1: UniqueArray, arr2: UniqueArray): UniqueArray => {
  const newArray = [...arr1, ...arr2];
  const result: UniqueArray = [];
  for (const item of newArray) {
    if (!result.includes(item)) {
      result.push(item);
    }
  }
  return result;
};
type Product = {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
};
const calculateTotalPrice = (allProducts: Product[]) => {
  const result = allProducts.reduce((acc, item) => {
    const { price, quantity, discount } = item;
    const subTotal = price * quantity;
    const discountAmount = discount ? (subTotal * discount) / 100 : 0;
    const totalPrice = subTotal - discountAmount;
    return acc + totalPrice;
  }, 0);
  return result;
};
