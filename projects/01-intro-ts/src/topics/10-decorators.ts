function decorador<T extends {new (...args: any[]): {} }>(
  constructo: T
) {
  return class extends constructo {
    newProperty = 'New Property';
    hello = 'override'
  }
}

@decorador
export class SuperClase {
  public myProperty: string = "Abc123";

  print() {
    console.log("hola mundo");
  }
}

console.log(SuperClase);

const myClass = new SuperClase();
console.log(myClass);
