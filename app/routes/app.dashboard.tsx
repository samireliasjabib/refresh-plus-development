import { Page, Layout, BlockStack } from "@shopify/polaris";

import RefreshStatusCard from "app/components/shared/refresh-status-card/RefreshStatusCard";
import HardRefreshCard from "app/components/dashboard/hard-refresh-card/HardRefreshCard";
import HowItWorks from "app/components/dashboard/how-it-works/HowItWorks";
import RefreshDataTable from "app/components/dashboard/refresh-data-table/RefreshDataTable";
import RefreshHeader from "app/components/shared/RefreshHeader";
import FeatureRequest from "app/components/dashboard/feature-request/FeatureRequest";
import ArticGreyMarkWater from "app/components/shared/ArticGreyMarkWater";

export default function Dashboard() {
  return (
    <Page>
      <Layout>
        <Layout.Section>
          <RefreshHeader />
        </Layout.Section>
        <Layout.Section>
          <BlockStack gap="500">
            <RefreshStatusCard status={"warning"} />
            <HardRefreshCard />
            <RefreshDataTable />
            <HowItWorks />
            <FeatureRequest />
          </BlockStack>
        </Layout.Section>
        <Layout.Section>
          <ArticGreyMarkWater />
        </Layout.Section>
      </Layout>
    </Page>
  );
}
