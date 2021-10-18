const listItems = ["samsung", "apple", "huawei", "xiaomi", "lg"];

// 1.HEAD
const head = ([first]) => first;
console.log(head(listItems));

// 2.TAIL
const tail = ([, ...rest]) => rest;
console.log(tail(listItems));

// 3. INIT
const init = ([...items]) => items.splice(items.pop());
console.log(init(listItems));

// 4. LAST
const last = ([...items]) => items.pop();
console.log(last(listItems));
