import { Box, Image, MediaCard } from "@shopify/polaris";
import { VideoModal } from "../shared/VideoModal";

const HowItWorks = () => {
    return (
        <Box>
            <MediaCard
                title='How it works'
                primaryAction={{
                    content: 'Watch video',
                    onAction: () => { }
                }}
                description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, officiis.'
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
                    src="https://burst.shopifycdn.com/photos/business-woman-smiling-in-office.jpg?width=1850"
                    source="https://burst.shopifycdn.com/photos/business-woman-smiling-in-office.jpg?width=1850"
                />
            </MediaCard>
            <VideoModal activator={<></>} open={false} onClose={() => { }} title="How it works" />
        </Box>
    );
};


export default HowItWorks;