"use client";

import React from "react";

import {
  Card,
  CardContent,
  CardFooter,
  //CardHeader
} from "./../ui/card";
import { Social } from "@/components/auth/social";
import { BackButton } from "@/components/auth/back-button";
import { Header } from "@/components/auth/header";

interface CardWrapperProps {
  children: React.ReactNode;
  headerLabel: string;
  backButtonLabel: string;
  backButtonHref: string;
  showSocial: boolean;
}

export const CardWrapper = ({
  children,
  headerLabel,
  backButtonLabel,
  backButtonHref,
  showSocial,
}: CardWrapperProps) => {
  return (
    <Card
      className="w-[400px]
    shadow-md lg:shadow-none
     "
    >
      <Header label={headerLabel} />

      <CardContent>{children}</CardContent>
      {showSocial && (
        <CardFooter>
          <Social />
        </CardFooter>
      )}

      <CardFooter>
        <BackButton label={backButtonLabel} href={backButtonHref} />
      </CardFooter>
    </Card>
  );
};
