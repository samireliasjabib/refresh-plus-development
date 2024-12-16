import { Page, Layout } from "@shopify/polaris";

import RefreshStatusCard from "app/components/shared/RefreshStatusCard";
import HardRefreshCard from "app/components/dashboard/HardRefreshCard";
import HowItWorks from "app/components/dashboard/HowItWorks";
import RefreshDataTable from "app/components/dashboard/RefreshDataTable";
import RefreshHeader from "app/components/shared/RefreshHeader";

export default function Index() {
  return (
    <Page>
      <Layout>
        <RefreshHeader />

        <Layout.Section>
          <RefreshStatusCard status={"success"} />
        </Layout.Section>

        <Layout.Section>
          <HardRefreshCard />
        </Layout.Section>

        <Layout.Section>
          <RefreshDataTable />
        </Layout.Section>

        <Layout.Section>
          <HowItWorks />
        </Layout.Section>
      </Layout>
    </Page>
  );
}
