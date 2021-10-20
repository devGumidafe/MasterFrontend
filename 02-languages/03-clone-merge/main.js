// 1. CLONE
const clone = (source) => (typeof source === "object" ? { ...source } : source);

console.log(
  clone({ name: "Gumidafe", surname: "Socorro", age: 38, country: "Spain" })
);

const deepClone = (source) => {
  let outObject;

  if (typeof source !== "object" || source === null) return source;

  outObject = Array.isArray(source) ? [] : {};

  for (key in source) {
    outObject[key] = deepClone(source[key]);
  }

  return outObject;
};

console.log(
  deepClone({
    name: "Gumidafe",
    surname: "Socorro",
    age: 38,
    country: "Spain",
    address: { city: "Las Palmas", number: 201, postal: "35018" },
    colors: ["white", "black", "blue"],
  })
);

// 2. MERGE
const objA = { name: "Maria", surname: "Ibañez", country: "SPA" };
const objB = { name: "Luisa", age: 31, married: true };

const merge = (source, target) => ({ ...clone(target), ...clone(source) });

console.log(merge(objA, objB));
