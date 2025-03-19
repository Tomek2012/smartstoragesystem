import { ROProduct } from "@/app/types/ROProduct";

/* Statusbar to show the total products and occupied compartments. Get the data fromthe parent component (props) */
interface StatusbarProps {
  compartments: ROProduct[];
}

/* Function to count all products */
export default function Statusbar(compartmentsProps: StatusbarProps) {
  const totalProducts: number = compartmentsProps.compartments.reduce(
    (sum, product) => sum + product.quantity,
    0
  );

  return (
    <footer className="bg-sky-600 text-white sticky p-4 bottom-0 w-full text-center">
      <p>
        Total Products: <span className="font-bold">{totalProducts}</span> |
        Occupied Compartments:{" "}
        <span className="font-bold">
          {compartmentsProps.compartments.length}
        </span>
      </p>
    </footer>
  );
}
