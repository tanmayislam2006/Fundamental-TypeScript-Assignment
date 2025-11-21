# TYPESCRIPT BLOGS

এই ব্লগে TypeScript-এর দুটি গুরুত্বপূর্ণ টপিক নিয়ে বিস্তারিত আলোচনা করা হয়েছে।

## ১. Interface আর Type এর মধ্যে পার্থক্য?

TypeScript-এ Interface এবং Type Alias দুটোই ব্যবহার করা হয় টাইপ ডিফাইন করার জন্য, কিন্তু এদের মধ্যে কিছু গুরুত্বপূর্ণ পার্থক্য রয়েছে।

### Interface:

- Interface মূলত অবজেক্টের কাঠামো নির্ধারণ করতে ব্যবহৃত হয়।
- এটি একাধিকবার ডিক্লেয়ার করা যেতে পারে এবং একত্রিত (merge) করা যায়।
- Interface সাধারণত ক্লাসের সাথে ব্যবহার করা হয়।
  **==> উদাহরণ \***

```
interface Person {
    name: string;
    age: number;
}
```

**==> উদাহরণ \***

```
interface Employee extends Person {
    salary: number;
}

```

### Type Alias:

- Type Alias দিয়ে যেকোনো ধরনের টাইপ ডিফাইন করা যায়, যেমন প্রিমিটিভ, ইউনিয়ন, টিউপল ইত্যাদি।
- এটি একবার ডিক্লেয়ার করার পর পুনরায় ডিক্লেয়ার করা যায় না।
- Type Alias সাধারণত জটিল টাইপ ডিফাইনেশনের জন্য ব্যবহৃত হয়।
  **==> উদাহরণ \***

```
type ID = string | number;

```

**==> উদাহরণ \***

```
typetype User = {
  username: string;
  isAdmin: boolean;
};
```

### সংক্ষিপ্ত তুলনা:

| বৈশিষ্ট্য    | Interface                   | Type Alias                       |
| ------------ | --------------------------- | -------------------------------- |
| ডিক্লেয়ারেশন | একাধিকবার ডিক্লেয়ার করা যায় | একবার ডিক্লেয়ার করার পর নয়       |
| ব্যবহার      | অবজেক্ট কাঠামো নির্ধারণ     | যেকোনো ধরনের টাইপ ডিফাইন করা যায় |                     |

## ২. keyof keyword এর ব্যবহার

**keyof** হলো TypeScript-এর একটি ছোট কিন্তু শক্তিশালী keyword।
এটি কোনো object টাইপের সব key-এর নামকে একটি union টাইপে পরিণত করে।

সহজ করে বলতে গেলে—
object-এর কি কি property আছে , সেটাকে টাইপ হিসেবে পাওয়া যায়।

**==> উদাহরণ ১: সাধারণ ব্যবহার\***

```
type User = {
name: string;
age: number;
email: string;
};

type UserKeys = keyof User;
// UserKeys এর টাইপ হবে "name" | "age" | "email"
```

**==> উদাহরণ ২: ফাংশনে ব্যবহার\***

```
const getPropertyFormObject =<X extends object>(inputObject :X, targetKey : keyof X)=>{
    return inputObject[targetKey]
}
```
