"use server";

import { ROProduct } from "@/app/types/ROProduct";
import { revalidatePath } from "next/cache";

export async function updateCompartment(
  productInformation: ROProduct,
  formData: FormData
) {
  const wdnumber = formData.get("wdnumber") as unknown as number;

  const newCompartment: ROProduct = {
    id: productInformation.id,
    productName: productInformation.productName,
    quantity: productInformation.quantity - wdnumber,
  };

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
