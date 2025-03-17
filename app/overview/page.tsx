import { ROProduct } from "../types/ROProduct";
import Compartment from "../ui/overview/compartment";

export default async function Page() {
  const data = await fetch("http://localhost:3000/overview/api/compartments");
  const products: ROProduct[] = await data.json();

  console.log(products);
  return (
    <div className="grid grid-cols-4 gap-1 mt-3 mb-3 place-items-center">
      {products.map((product) => (
        <Compartment key={product.id} {...product}></Compartment>
      ))}
    </div>
  );
}
