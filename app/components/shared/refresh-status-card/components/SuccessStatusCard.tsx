import { Box, Banner, Text } from '@shopify/polaris';

const SuccessStatusCard = () => (
  <Box>
    <Banner title="Refresh Successful!" tone="success">
      <Text variant="bodySm" as="p" fontWeight="regular">
        Your store’s cache has been cleared successfully. Customers will now see
        the most up-to-date content.
      </Text>
    </Banner>
  </Box>
);

export default SuccessStatusCard;
