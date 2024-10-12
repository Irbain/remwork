import SettingsAccountPage from "@/app/components/shadcn/forms/account/page";
import SettingsAppearancePage from "@/app/components/shadcn/forms/appearance/page";
import SettingsDisplayPage from "@/app/components/shadcn/forms/display/page";
import SettingsLayout from "@/app/components/shadcn/forms/layout";
import SettingsNotificationsPage from "@/app/components/shadcn/forms/notifications/page";
import SettingsProfilePage from "@/app/components/shadcn/forms/page";
import React from "react";

const page = ({ params }: { params: { slug: string } }) => {
  console.log("this is rout", params.slug);
  return (
    <SettingsLayout>
      {/* <ProfileForm />
       */}
      {/* <DisplayForm /> */}

      {params.slug === "display" ? <SettingsDisplayPage /> : ""}
      {params.slug === "account" ? <SettingsAccountPage /> : ""}
      {params.slug === "appearance" ? <SettingsAppearancePage /> : ""}
      {params.slug === "notifications" ? <SettingsNotificationsPage /> : ""}
      {params.slug === "profile" ? <SettingsProfilePage /> : ""}
    </SettingsLayout>
  );
};

export default page;
