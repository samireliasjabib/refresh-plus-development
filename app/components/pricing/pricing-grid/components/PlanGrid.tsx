import { InlineGrid } from '@shopify/polaris';
import type { PricingPlan } from 'app/constants/constants';
import PricingCard from './PricingCard';

interface PlanGridProps {
  plans: PricingPlan[];
  onSelectPlan: (plan: PricingPlan) => void;
  columns?: {
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };
}

const PlanGrid: React.FC<PlanGridProps> = ({
  plans,
  onSelectPlan,
  columns = { xs: 1, sm: 1, lg: 2, xl: 2 },
}) => (
  <InlineGrid gap={{ xs: '200', md: '500' }} columns={columns}>
    {plans.map((plan, index) => (
      <PricingCard key={plan.title} plan={plan} onSelectPlan={onSelectPlan} />
    ))}
  </InlineGrid>
);

export default PlanGrid;
