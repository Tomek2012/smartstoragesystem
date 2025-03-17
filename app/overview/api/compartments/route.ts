import { compartmentData } from "@/app/lib/compartment-data.";
import { ROProduct } from "@/app/types/ROProduct";

export async function GET() {
  return new Response(JSON.stringify(compartmentData), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
