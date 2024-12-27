import { Layout, Button, Box, InlineStack, Image } from '@shopify/polaris';

import RefreshPlusLogo from '../../assets/Refresh_Plus_logo.png';

const RefreshHeader = () => {
  const performHardRefresh = async () => {
    try {
      const response = await fetch('/api/hard-refresh', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to perform hard refresh');
      }

      const data = await response.json();
      console.log('Refresh successful:', data);
      alert('Hard refresh was successfully triggered!');
    } catch (error) {
      console.error('Error performing hard refresh:', error);
      alert('There was an error performing the hard refresh.');
    }
  };

  return (
    <Box paddingBlockEnd={{ xs: '600', md: '1000' }}>
      <InlineStack align="space-between" blockAlign="center">
        <Image src={RefreshPlusLogo} alt="Logo" source={RefreshPlusLogo} />
        <Box>
          <InlineStack blockAlign="center">
            <Button size="large" variant="primary" onClick={performHardRefresh}>
              Perform Hard Refresh for $1.95
            </Button>
          </InlineStack>
        </Box>
      </InlineStack>
    </Box>
  );
};

export default RefreshHeader;
