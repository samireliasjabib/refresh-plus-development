import { Box, Button, Icon, InlineStack, Link, Text } from '@shopify/polaris';
import { ArrowLeftIcon } from '@shopify/polaris-icons';


const PricingHeader: React.FC = () => (
  <Box paddingBlockEnd={{ xs: "600", md: "1000" }}>
    <InlineStack align="space-between" blockAlign="center">
      <Box>
        <InlineStack gap={'100'}>
          <Link monochrome url="/app">
            <Icon source={ArrowLeftIcon} />
          </Link>
          <Text as="h1" variant="headingLg" fontWeight="bold">
            Pricing
          </Text>
        </InlineStack>
      </Box>
    </InlineStack>
  </Box>
);

export default PricingHeader;
