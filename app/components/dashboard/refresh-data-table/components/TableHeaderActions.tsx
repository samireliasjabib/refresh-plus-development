import {
    Box,
    Card,
    Icon,
    InlineStack,
    Text,
  } from "@shopify/polaris";

  import { SearchIcon, FilterIcon } from "@shopify/polaris-icons";


function TableHeaderActions() {
    return(
      <Box paddingBlockEnd={"300"}>
      <InlineStack align="space-between" blockAlign="center" wrap={false}>
        <Box>
          <InlineStack gap={"100"}>
            <Text variant="headingSm" as="h2" fontWeight="medium" tone="subdued">
              Last Hard Refresh :
            </Text>
            <Text variant="headingSm" fontWeight="medium" as={"p"}>
              October 4, 2024 at 3:29 PM EST
            </Text>
          </InlineStack>
        </Box>
        <Box>
          <Card padding={"150"} roundedAbove="md">
            <InlineStack>
              <Icon source={SearchIcon} />
              <Icon source={FilterIcon} />
            </InlineStack>
          </Card>
        </Box>
      </InlineStack>
    </Box>
    )
  }
  
  export default TableHeaderActions