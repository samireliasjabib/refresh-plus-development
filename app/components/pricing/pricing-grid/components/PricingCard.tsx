import { Box, Button, Card, Icon, InlineStack, Text } from '@shopify/polaris';
import type { PricingPlan } from 'app/constants/constants';

interface PricingCardProps {
  plan: PricingPlan;
  onSelectPlan: (plan: PricingPlan) => void;
}

const PricingCard: React.FC<PricingCardProps> = ({ plan, onSelectPlan }) => {
  const { icon, title, content, priceTitle, price, buttonText, isCurrentPlan } =
    plan;

  return (
    <Box>
      <Card padding={{ xs: '600', md: '800' }}>
        <InlineStack wrap={false} gap={{ xs: '300', md: '400' }}>
          <Box>
            <Card>
              <Icon source={icon} accessibilityLabel="icon-pricing" />
            </Card>
          </Box>
          <Box>
            <Text as="h2" variant="headingMd" fontWeight="bold">
              {title}
            </Text>
            <Text as="p" variant="bodyMd" fontWeight="regular" breakWord={true}>
              {content}
            </Text>
            <Box paddingBlockStart="400" paddingBlockEnd="600">
              <Text
                as="h2"
                variant="headingSm"
                fontWeight="regular"
                tone="subdued"
              >
                {priceTitle}
              </Text>
              <Text as="p" variant="bodyLg" fontWeight="semibold">
                {price}
              </Text>
            </Box>
          </Box>
        </InlineStack>
        <Box>
          <Button
            disabled={isCurrentPlan}
            fullWidth
            size="large"
            variant={isCurrentPlan ? 'secondary' : 'primary'}
            onClick={() => onSelectPlan(plan)}
          >
            {buttonText}
          </Button>
        </Box>
      </Card>
    </Box>
  );
};

export default PricingCard;
