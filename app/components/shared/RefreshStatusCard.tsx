import { Banner, Box, Text } from "@shopify/polaris";
import RefreshLoadingbar from "./RefreshLoadingBar";

const RefreshStatusCard = ({
  status,
}: {
  status: "warning" | "critical" | "success";
}) => {
  return (
    <Box>
      <Box>
        {status == "warning" ? (
          <Box>
            <Banner title="lorem ipsum" tone={status}>
              <Text variant="bodyMd" as="p">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Tempore at earum minus illum itaque consequuntur quas odio quos.
                Sunt eligendi tempora ea rem aliquid? Mollitia rerum possimus
                optio. Mollitia quas maxime atque earum dolorum modi culpa
                quaerat repellat, sapiente at.
              </Text>
            </Banner>
            <RefreshLoadingbar />
          </Box>
        ) : (
          <Banner title="lorem ipsum" tone={status}>
            <Text variant="bodyMd" as="p">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
              at earum minus illum itaque consequuntur quas odio quos. Sunt
              eligendi tempora ea rem aliquid? Mollitia rerum possimus optio.
              Mollitia quas maxime atque earum dolorum modi culpa quaerat
              repellat, sapiente at.
            </Text>
          </Banner>
        )}
      </Box>
    </Box>
  );
};

export default RefreshStatusCard;
