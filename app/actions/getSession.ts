import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]/options";

export default async function getSession() {
  return await getServerSession(authOptions);
}
