import { compartmentData } from "@/app/lib/compartment-data.";
import { ROProduct } from "@/app/types/ROProduct";
import { redirect } from "next/navigation";

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  const paramsSync = await params;
  const body = await request.json();
  const compartment: ROProduct = body;

  const compartmentIndex = compartmentData.findIndex(
    (product) => product.id == Number(paramsSync.id)
  );

  compartmentData[compartmentIndex] = compartment;


  return Response.json(compartmentData[compartmentIndex], { status: 200 });
}
