import { Box, Banner, Text, BlockStack } from '@shopify/polaris';
import RefreshLoadingbar from '../../RefreshLoadingBar';

const WarningStatusCard = () => (
  <BlockStack gap={'500'}>
    <Banner title="Your hard refresh is in progress." tone="warning">
      <Text variant="bodySm" as="p" fontWeight="regular">
        To prevent excessive use, please wait for the cooldown period to
        complete before refreshing again. Next Refresh Available In: 04:59.
      </Text>
    </Banner>
    <RefreshLoadingbar />
  </BlockStack>
);

export default WarningStatusCard;
