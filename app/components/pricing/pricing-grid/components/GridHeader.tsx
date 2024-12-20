import { Box, Text } from '@shopify/polaris';

interface GridHeaderProps {
  title: string;
  description: string;
}

const GridHeader: React.FC<GridHeaderProps> = ({ title, description }) => (
  <>
    <Box paddingBlockEnd="200">
      <Text as="h2" variant="headingMd" fontWeight="semibold">
        {title}
      </Text>
    </Box>
    <Box paddingBlockEnd="600">
      <Text as="p" variant="bodyMd" fontWeight="regular" tone='subdued'>
        {description}
      </Text>
    </Box>
  </>
);

export default GridHeader;
