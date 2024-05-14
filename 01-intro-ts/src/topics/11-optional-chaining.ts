export interface Passenger {
  name: string;
  children?: string[];
}

const passenger1: Passenger = {
  name: "Fernado",
};

const passenger2: Passenger = {
  name: "Maria",
  children: ["Natalia", "Lisa"],
};

const printChildren = (passenger: Passenger) => {
  const howManyChildren = passenger.children?.length;

  console.log(passenger.name, howManyChildren ?? "-1");
};

printChildren(passenger1);
