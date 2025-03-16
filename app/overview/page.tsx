import { compartmentData } from "../lib/compartment-data.";
import { ROProduct } from "../types/ROProduct";
import Compartment from "../ui/overview/compartment";

export default function Page() {
  let productArray: ROProduct[] = compartmentData;
  return (
    <div className="grid grid-cols-4 gap-1 mt-3 mb-3 place-items-center">
      {productArray.map((product) => (
        <Compartment key={product.id} {...product}></Compartment>
      ))}
    </div>
  );
}
