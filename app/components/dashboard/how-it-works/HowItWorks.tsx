import { Box, Image, MediaCard } from "@shopify/polaris";
import { VideoModal } from "../../shared/VideoModal";

const HowItWorks = () => {
    return (
        <Box>
            <MediaCard
                title='How it works'
                primaryAction={{
                    content: 'Watch video',
                    onAction: () => { }
                }}
                description='Simply click the Perform Hard Refresh button to instantly clear your store’s cache, ensuring your customers always see the most up-to-date content. The app securely logs each refresh action and enforces a 5-minute cooldown to prevent accidental or excessive use.'
                popoverActions={[{ content: "Dismiss", onAction: () => { } }]}
            >
                <Image
                    alt=""
                    width="100%"
                    height="100%"
                    style={{
                        objectFit: "cover",
                        objectPosition: "center",
                        cursor: "pointer",
                    }}
                    src="https://cdn.shopify.com/s/files/1/0875/8450/6020/files/video-image.png?v=1734725757"
                    source="https://cdn.shopify.com/s/files/1/0875/8450/6020/files/video-image.png?v=1734725757"
                />
            </MediaCard>
            <VideoModal activator={<></>} open={false} onClose={() => { }} title="How it works" />
        </Box>
    );
};


export default HowItWorks;