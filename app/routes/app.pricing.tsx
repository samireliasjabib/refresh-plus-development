import { Box, InlineStack, Layout, Page } from '@shopify/polaris';
import { PRICING_PLANS } from 'app/constants/constants';
import PricingHeader from 'app/components/pricing/PricingHeader';
import PricingGrid from 'app/components/pricing/pricing-grid/PricingGrid';
import type { PricingPlan } from 'app/constants/constants';
import ArticGreyMarkWater from 'app/components/shared/ArticGreyMarkWater';

export default function Pricing() {

    const handleSelectPlan = (plan: PricingPlan) => {
        // Implement plan selection logic
        console.log('Selected plan:', plan.title);
    };

    return (
        <Page>
            <Layout>

                <Layout.Section >
                    <Box position='relative' minHeight='100vh'>
                        <PricingHeader
                        />
                        <PricingGrid
                            plans={PRICING_PLANS}
                            onSelectPlan={handleSelectPlan}
                        />
                        <Box position='absolute' insetBlockEnd={'0'} insetInlineEnd={'0'}>
                            <ArticGreyMarkWater />
                        </Box>
                    </Box>
                </Layout.Section>
            </Layout>
        </Page>
    );
}