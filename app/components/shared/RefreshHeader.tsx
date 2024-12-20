import { Layout, Button, Box, InlineStack, Image } from '@shopify/polaris';

import RefreshPlusLogo from '../../assets/Refresh_Plus_logo.png';

const RefreshHeader = () => {
  return (
    <Box paddingBlockEnd={{ xs: '600', md: '1000' }}>
      <InlineStack align="space-between" blockAlign="center">
        <Image src={RefreshPlusLogo} alt="Logo" source={RefreshPlusLogo} />
        <Box>
          <InlineStack blockAlign="center">
            <Button size="large" variant="primary">
              Perform Hard Refresh for $1.95
            </Button>
          </InlineStack>
        </Box>
      </InlineStack>
    </Box>
  );
};

export default RefreshHeader;
