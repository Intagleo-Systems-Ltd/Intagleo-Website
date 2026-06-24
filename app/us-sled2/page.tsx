import { redirect } from "next/navigation";

// /us-sled2 was the staging slug for the redesigned page. The design now lives on
// /us-sled (see app/us-sled/page.tsx), so consolidate this URL there.
export default function UsSled2Redirect() {
  redirect("/us-sled");
}
