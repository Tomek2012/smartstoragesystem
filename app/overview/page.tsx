import { ROProduct } from "../types/ROProduct";
import Compartment from "../ui/overview/compartment";
import Statusbar from "../ui/overview/statusbar";

export default async function Page() {
  const data = await fetch("http://localhost:3000/overview/api/compartments");
  const compartments: ROProduct[] = await data.json();

  return (
    <div>
      <div className="min-h-screen grid grid-cols-4 gap-1 mt-3 mb-3 place-items-center">
        {compartments.map((product) => (
          <Compartment key={product.id} {...product}></Compartment>
        ))}
      </div>
      <Statusbar compartments={compartments}></Statusbar>
    </div>
  );
}
