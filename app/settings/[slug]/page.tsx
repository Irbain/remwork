import SettingsAccountPage from "@/components/shadcn/forms/account/page";
import SettingsAppearancePage from "@/components/shadcn/forms/appearance/page";
import SettingsDisplayPage from "@/components/shadcn/forms/display/page";
import SettingsLayout from "@/components/shadcn/forms/layout";
import SettingsNotificationsPage from "@/components/shadcn/forms/notifications/page";
import SettingsProfilePage from "@/components/shadcn/forms/page";
import React from "react";

const page = ({ params }: { params: { slug: string } }) => {
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
