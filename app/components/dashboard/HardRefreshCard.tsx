import { Box, Button, Card, Text } from "@shopify/polaris";

const HardRefreshCard = () => {
  return (
    <Box>
      <Card>
        <Box>
          <Text as="h2" variant="bodyMd" fontWeight="bold">
            Hard Refresh
          </Text>
        </Box>
        <Text as="h2" variant="bodyMd" fontWeight="bold">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia
          adipisci suscipit harum. Quisquam cum eligendi dignissimos, expedita
          libero enim nostrum? Reprehenderit expedita consectetur temporibus
          sunt culpa cum ullam atque exercitationem architecto suscipit minima
          error quaerat, non eveniet eius perspiciatis accusantium.
        </Text>
        <Box>
          <Button variant="primary" size="large">
            Hard Refresh
          </Button>
        </Box>
      </Card>
    </Box>
  );
};

export default HardRefreshCard;
