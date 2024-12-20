import { Box, Banner, Text } from '@shopify/polaris';

const CriticalStatusCard = () => (
  <Box>
    <Banner title="Refresh Failed" tone="critical" onDismiss={() => {}}>
      <Text variant="bodySm" as="p" fontWeight="regular">
        The hard refresh could not be completed. You were not charged for this
        attempt.{' '}
        <span
          role="button"
          style={{ cursor: 'pointer', textDecoration: 'underline' }}
        >
          Please try again.
        </span>
      </Text>
    </Banner>
  </Box>
);

export default CriticalStatusCard;
