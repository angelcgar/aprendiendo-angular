let skills: string[] = ["bas", "edew", "jewoic"];

// skills.push(true);

interface Caracter {
  name: string;
  hp: number;
  skills: string[];
  home?: string;
}

const personaje: Caracter = {
    name: "cosa",
    hp: 100,
    skills: ["hoa", "adsjc"],
   
};

personaje.home = 'ciudad'
console.log(personaje);



export {};
