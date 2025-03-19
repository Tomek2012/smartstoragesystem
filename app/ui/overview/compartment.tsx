"use client";

import { ROProduct } from "@/app/types/ROProduct";
import { updateCompartment } from "./actions";

/* Compartment-Component: show name, all availabe products and acutal quantity in a card */
export default function Compartment(product: ROProduct) {
  const updateCompartmentWithProductinformation = updateCompartment.bind(
    null,
    product
  );
  return (
    <div className="shadow-md rounded-2xl p-4 w-full max-w-3xs m-3">
      <div className="flex grid grid-cols-2">
        <h3 className="font-semibold">{product.productName}</h3>
        <p className="justify-self-end" data-testid={`quantity-${product.id}`}>
          Qty: {product.quantity}
        </p>
      </div>
      <div className="grid grid-cols-3 gap-1 mt-3 place-items-center overflow-y-auto min-h-20 max-h-20 auto-rows-max">
        {/* Create box for every availabe product */}
        {[...Array(product.quantity)].map((_, index) => (
          <div key={index} className={`w-6 h-6 rounded-sm bg-sky-600`}>
            <p className="text-center text-white">{index + 1}</p>
          </div>
        ))}
      </div>
      {/* Define form to handle state and to call the save-method (API) */}
      <form action={updateCompartmentWithProductinformation}>
        <div className="flex mt-5 gap-2 justify-end">
          <input
            type="number"
            name="wdnumber"
            data-testid={`input-${product.id}`}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5 max-w-15"
            required
          />
          <button
            data-testid={`submit-${product.id}`}
            className="bg-sky-600 text-white px-2 rounded-lg hover:bg-blue-600"
            type="submit"
          >
            Go
          </button>
        </div>
      </form>
    </div>
  );
}
