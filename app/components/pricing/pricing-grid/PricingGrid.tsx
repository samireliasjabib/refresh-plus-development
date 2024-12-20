import { Box, Card } from '@shopify/polaris';
import type { PricingPlan } from 'app/constants/constants';
import GridHeader from './components/GridHeader';
import PlanGrid from './components/PlanGrid';
import { PRICING_GRID_CONTENT, DEFAULT_GRID_CONFIG } from './constants';

interface PricingGridProps {
  plans: PricingPlan[];
  onSelectPlan: (plan: PricingPlan) => void;
  gridConfig?: {
    columns?: typeof DEFAULT_GRID_CONFIG.columns;
    gap?: string;
  };
}

const PricingGrid: React.FC<PricingGridProps> = ({
  plans,
  onSelectPlan,
  gridConfig = DEFAULT_GRID_CONFIG,
}) => (
  <Box>
    <Card>
      <GridHeader
        title={PRICING_GRID_CONTENT.title}
        description={PRICING_GRID_CONTENT.description}
      />
      <PlanGrid
        plans={plans}
        onSelectPlan={onSelectPlan}
        columns={gridConfig.columns}
      />
    </Card>
  </Box>
);

export default PricingGrid;
