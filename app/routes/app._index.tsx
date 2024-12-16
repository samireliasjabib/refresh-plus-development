import {
  Page,
  Layout,
} from "@shopify/polaris";

import { RefreshHeader } from "app/components/shared/RefreshHeader";
import RefreshStatusCard from "app/components/shared/RefreshStatusCard";
import HardRefreshCard from "app/components/dashboard/HardRefreshCard";


export default function Index() {
  return (
    <Page >
      <Layout>
        <RefreshHeader />
        <Layout.Section>
          <RefreshStatusCard
            status={'success'}
          />
        </Layout.Section>
        <Layout.Section>
          <HardRefreshCard />
        </Layout.Section>
      </Layout>
    </Page>
  );
}