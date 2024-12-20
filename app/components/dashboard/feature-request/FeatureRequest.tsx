import {
  Box,
  Button,
  Card,
  InlineStack,
  Page,
  Text,
  TextField,
} from '@shopify/polaris';
import { useState } from 'react';

const FeatureRequest = () => {
  const [value, setValue] = useState('');

  return (
    <Box>
      <Card>
        <InlineStack align="center" blockAlign="center" gap="400">
          <Text as="h2" variant="headingLg" fontWeight="bold">
            Got a Feature Request?
          </Text>
          <InlineStack gap="200">
            <TextField
              label="feature request"
              role="textbox"
              size="slim"
              labelHidden
              type="text"
              placeholder="Tell us more about your idea"
              value={value}
              onChange={(value) => setValue(value)}
              autoComplete="off"
            />
            <Button variant="primary">Submit</Button>
          </InlineStack>
        </InlineStack>
      </Card>
    </Box>
  );
};

export default FeatureRequest;
