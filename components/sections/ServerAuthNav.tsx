import { currentUser } from "@/lib/auth";
import Navbar from "./NavBar";

const ServerAuthNav = async () => {
  const user = await currentUser();

  const normalizedUser = user
    ? { name: user.name ?? null } // Ensure the shape matches NavbarProps
    : null;

  return <Navbar user={normalizedUser} />;
};

export default ServerAuthNav;
