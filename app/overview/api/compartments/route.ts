import { compartmentData } from "@/app/lib/compartment-data.";

/* Define GET endpoint to load the compartment data (in-memory) */
export async function GET() {
  return new Response(JSON.stringify(compartmentData), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
