import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
// import { UserAuthForm } from "@/app/components/shadcn/authentication/user-auth-form";

import laptop from "@/public/keyboard.jpg";
import Logo from "../../components/Logo";

export const metadata: Metadata = {
  title: "Authentication",
  description: "Authentication forms built using the components.",
};

export default function AuthenticationPage({
  //login = true,
  children,
}: {
  children: React.ReactNode;
  login?: boolean;
}) {
  return (
    <>
      <div className="h-screen container flex flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0 max-[400px]:px-12 ">
        {/* TODO:LOGO */}
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
          <div className="absolute inset-0 bg-zinc-900" />
          <Image fill src={laptop} alt="computer keybord" />
          {/* Photo by Sora Shimazaki: https://www.pexels.com/photo/crop-faceless-person-typing-on-laptop-keyboard-in-darkness-5926370/ */}
          <div className="relative z-20 flex items-center text-lg font-medium">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <Logo bgColor="black" />
            </Link>
          </div>
          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2">
              <p className="text-lg">
                &ldquo;Find your next remote job with ease. Remwork connects you
                to top companies offering flexible, work-from-anywhere roles.
                Thrive and build the career you love from anywhere.&rdquo;
              </p>
            </blockquote>
          </div>
        </div>
        <div className="lg:p-8 ">
          <div className=" mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            {/* <UserAuthForm className="" /> */}
            {children}
            <p className="px-8 text-center text-sm text-muted-foreground">
              By clicking continue, you agree to our{" "}
              <Link
                href="/terms"
                className="underline underline-offset-4 hover:text-primary"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                href="/privacy"
                className="underline underline-offset-4 hover:text-primary"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
