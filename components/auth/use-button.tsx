import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { DropdownMenuTrigger } from "../ui/dropdown-menu";
import { useCurrentUser } from "@/hooks/use-current-user";
import { FaUser } from "react-icons/fa";

export const UserButton = () => {
  const user = useCurrentUser();
  return (
    <div>
      <DropdownMenuTrigger className="select-none cursor-pointer" asChild>
        <Avatar>
          <AvatarImage src={user?.image || ""} />
          <AvatarFallback className="bg-primary select-none">
            <FaUser className="text-white select-none" />
          </AvatarFallback>
        </Avatar>

        {/* {user?.image && (
          <Image
            width={15}
            height={15}
            src={user?.image as string}
            className="rounded-full h-10 w-10 cursor-pointer"
            alt=""
          />
        )} */}
      </DropdownMenuTrigger>
    </div>
  );
};
