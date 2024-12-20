import { Box, InlineStack, Text, Image } from '@shopify/polaris';

function ArticGreyMarkWater() {
  return (
    <Box as="section" paddingBlockStart={'1000'} paddingBlockEnd={'1000'}>
      <InlineStack align="end" blockAlign="center">
        <Text variant="bodySm" as="p" tone="subdued">
          Made with{' '}
          <Image
            source="https://cdn.shopify.com/s/files/1/0875/8450/6020/files/Vector.png?v=1734732161"
            width={12}
            height={12}
            alt="Grey Logo"
          />{' '}
          and{' '}
          <Image
            source="https://cdn.shopify.com/s/files/1/0875/8450/6020/files/Vector_1.png?v=1734732162"
            width={12}
            height={12}
            alt="Mark Water Logo"
          />{' '}
          by Arctic Grey
        </Text>
      </InlineStack>
    </Box>
  );
}

export default ArticGreyMarkWater;
