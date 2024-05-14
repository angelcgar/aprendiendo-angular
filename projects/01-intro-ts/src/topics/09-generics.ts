export function whatsMyType<T>(argument: T): T {
  return argument;
  // Que mamada, Cuidado con arguments
}

let amIString = whatsMyType<string>("hola mundo");
let amINumber = whatsMyType<number>(123);
let amIArray = whatsMyType<number[]>([1, 2, 3, 4, 5]);
console.log(amIString.split(" "));
console.log(amINumber.toFixed());
console.log(amIArray.join("-"));
