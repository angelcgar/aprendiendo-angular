export interface Product {
  description: string;
  price: number;
}

// const phone: Product = {
//   description: "Nokia A1",
//   price: 150.0,
// };

// const tablet: Product = {
//   description: "iPad Air",
//   price: 250.0,
// };

interface TaxCalculations {
  tax: number;
  products: Product[];
}

export function taxCalculation(options: TaxCalculations): [number, number] {
  const { products, tax } = options;

  let total = 0;

  products.forEach(({ price }) => {
    total += price;
  });

  return [total, total * tax];
}

// const shopingCart = [phone, tablet];
// const tax = 0.15;

// const [total, iva] = taxCalculation({
//   products: shopingCart,
//   tax,
// });

// console.log(`el total es ${total}`);
// console.log(`el total es ${iva}`);
// console.log(`por todo es ${total + iva}`);
