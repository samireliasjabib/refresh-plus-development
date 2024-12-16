import {
    Box,
    Button,
    Card,
    InlineStack,
    Page,
    Text,
    TextField,
  } from "@shopify/polaris";
  
   const FeatureRequest = () => {
    return (
        <Box>
          <Card>
            <InlineStack align="center" blockAlign="center">
              <Text as="h2" variant="headingLg" fontWeight="bold">
                Lorem ipsum dolor sit amet.
              </Text>
              <TextField
                label=''
                type="text"
                placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, officiis."
                value=""
                onChange={() => { }}
                autoComplete="off"
              />
              <Button variant="primary">Lorem ipsum</Button>
            </InlineStack>
          </Card>
        </Box>
    );
  };

  export default FeatureRequest