import React from "react";
import SettingsLayout from "@/components/shadcn/forms/layout";
import { DisplayForm } from "@/components/shadcn/forms/display/display-form";

const page = () => {
  return (
    <SettingsLayout>
      {/* <ProfileForm />
       */}
      <DisplayForm />
    </SettingsLayout>
  );
};

export default page;
