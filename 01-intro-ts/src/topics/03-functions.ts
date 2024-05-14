function addNumbers(a: number, b: number): number {
  return a + b;
}

const flecha = (a: number, b: number): string => {
  return `${a + b}`;
};

function multiples(
  primero: number,
  segundo?: number,
  base: number = 2
): number {
  return primero * base;
}

let num: string = addNumbers(1, 9).toString();
let flec = flecha(9, 10);
let mul = multiples(3);

// console.log({ num, flec, mul });

interface Character {
  name: string;
  ph: number;
  viewHelth: () => any;
}

const healCharacter = (character: Character, amount: number) => {
  character.ph += amount;
};

const hulk: Character = {
  name: "Hulk",
  ph: 19,
  viewHelth() {
    console.log(`tiene ${this.ph}`);
  },
};

healCharacter( hulk, 8)

hulk.viewHelth()

// console.log(addNumbers(8, 1));
