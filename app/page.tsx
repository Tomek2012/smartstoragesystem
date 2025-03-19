import { redirect } from "next/navigation";

export default function Home() {
  /* Redirect to the overview page as it is the main page of the application */
  redirect("/overview");
}
