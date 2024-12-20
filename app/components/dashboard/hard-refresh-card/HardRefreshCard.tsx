import { Box, Button, Card, Text } from '@shopify/polaris';

const HardRefreshCard = () => {
  return (
    <Box>
      <Card padding={'600'}>
        <Box paddingBlockEnd={'200'}>
          <Text as="h2" variant="headingSm" fontWeight="semibold">
            Perform Hard Refresh for Only $1.95
          </Text>
        </Box>
        <Text
          as="p"
          variant="bodySm"
          fontWeight="regular"
          alignment="start"
          tone="subdued"
        >
          Click Perform Hard Refresh to instantly clear your store’s cache and
          ensure your customers always see the latest content. This fast and
          secure process enhances your store’s performance by eliminating
          outdated data and preventing display issues, keeping your storefront
          running smoothly and efficiently.
        </Text>
        <Box paddingBlockStart={'500'}>
          <Button variant="primary" size="large">
            Perform Hard Refresh for $1.95
          </Button>
        </Box>
      </Card>
    </Box>
  );
};

export default HardRefreshCard;
