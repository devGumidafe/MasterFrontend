// 1. CLONE
const clone = (source) => (typeof source === "object" ? { ...source } : {});

console.log(
  clone({ name: "Gumidafe", surname: "Socorro", age: 38, country: "Spain" })
);

const deepClone = (source) =>
  typeof source === "object" ? JSON.parse(JSON.stringify(source)) : {};

console.log(
  deepClone({
    name: "Gumidafe",
    surname: "Socorro",
    age: 38,
    country: "Spain",
    address: { city: "Las Palmas", number: 201, postal: "35018" },
  })
);

// 2. MERGE
const objA = { name: "Maria", surname: "Ibañez", country: "SPA" };
const objB = { name: "Luisa", age: 31, married: true };

const merge = (source, target) => ({ ...clone(target), ...clone(source) });

console.log(merge(objA, objB));
