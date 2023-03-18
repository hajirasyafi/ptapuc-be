import React from "react";
import { SettingsPageTitle } from "@strapi/helper-plugin";
import { Layout } from "@strapi/design-system";

const ApplicationInfosPage = () => {
  return (
    <Layout>
      <SettingsPageTitle name="Application" />
    </Layout>
  );
};

export default ApplicationInfosPage;
