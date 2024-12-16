import { Box, ProgressBar } from "@shopify/polaris";
import React from "react";

const RefreshLoadingbar = () => {
    return (
        <Box>
            <ProgressBar progress={85} size="small" tone="success" animated={true} />
        </Box>
    );
};

export default RefreshLoadingbar