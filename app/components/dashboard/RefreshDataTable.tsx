import {
  Box,
  Card,
  DataTable,
  Icon,
  InlineStack,
  Text,
} from "@shopify/polaris";
import { SearchIcon, FilterIcon } from "@shopify/polaris-icons";
import { HardRefreshTableRows as rows } from "./constants";

const RefreshDataTable = () => {
  return (
    <Box>
      <Card>
        <Box>
          <Box>
            <InlineStack align="space-between" blockAlign="center" wrap={false}>
              <Box>
                <Box>
                  <InlineStack>
                    <Text variant="bodyMd" as="h2">
                      Dashboard title
                    </Text>
                    <Text variant="bodyMd" fontWeight="medium" as={"p"}>
                      October 4, 2024 at 3:29 PM EST
                    </Text>
                  </InlineStack>
                </Box>
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
        </Box>
        <Box>
          <Card roundedAbove="xs">
            <DataTable
              columnContentTypes={["text", "text", "text", "text"]}
              headings={["Name", "Action", "Fee", "Updated"]}
              rows={rows}
              pagination={{
                hasNext: true,
                onNext: () => {},
                label: "1 / 100",
              }}
            />
          </Card>
        </Box>
      </Card>
    </Box>
  );
};

export default RefreshDataTable;
