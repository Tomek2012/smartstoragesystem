"use client";

import { ROProduct } from "@/app/types/ROProduct";
import { updateCompartment } from "./actions";

export default function Compartment(product: ROProduct) {
  const updateCompartmentWithProductinformation = updateCompartment.bind(
    null,
    product
  );
  return (
    <div className="shadow-md rounded-2xl p-4 w-full max-w-3xs">
      <div className="flex grid grid-cols-2">
        <h3 className="font-semibold">{product.productName}</h3>
        <p className="justify-self-end">Qty: {product.quantity}</p>
      </div>
      <div className="grid grid-cols-3 gap-1 mt-3 place-items-center">
        {[...Array(9)].map((_, index) => (
          <div key={index} className={`w-6 h-6 rounded-sm bg-sky-600`}>
            <p className="text-center text-white">{index + 1}</p>
          </div>
        ))}
      </div>
      <form action={updateCompartmentWithProductinformation}>
        <div className="flex mt-5 gap-2 justify-end">
          <input
            type="number"
            name="wdnumber"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5 max-w-15"
            required
          />
          <button
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
