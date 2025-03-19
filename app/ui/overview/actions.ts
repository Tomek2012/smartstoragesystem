"use server";

import { ROProduct } from "@/app/types/ROProduct";
import { revalidatePath } from "next/cache";

/* Call PUT-Method to save updatet compartment-data */
export async function updateCompartment(
  productInformation: ROProduct,
  formData: FormData
) {
  const wdnumber = formData.get("wdnumber") as unknown as number;

  /* Create new Compartment-Object with actual data from the form */
  const newCompartment: ROProduct = {
    id: productInformation.id,
    productName: productInformation.productName,
    quantity: productInformation.quantity - wdnumber,
  };

  /* Call PUT-Method */
  const response = await fetch(
    "http://localhost:3000/overview/api/compartments/" +
      String(productInformation.id),
    {
      method: "PUT",
      body: JSON.stringify(newCompartment),
    }
  ).then((res) => res.json());

  revalidatePath("/overview");
}
