import { RefreshIcon } from '@shopify/polaris-icons';

export interface PricingPlan {
  icon: React.FC;
  title: string;
  content: string;
  priceTitle: string;
  price: string;
  buttonText: string;
  isCurrentPlan: boolean;
}

export const PRICING_PLANS: PricingPlan[] = [
  {
    icon: RefreshIcon,
    title: 'On Demand Refresh',
    content: 'Lorem ipsum dolor sit amet consectetur. Sit feugiat eget leo sit potenti id netus a orci.',
    priceTitle: 'Price',
    price: '$1.95/refresh',
    buttonText: 'Current Plan',
    isCurrentPlan: true,
  },
  {
    icon: RefreshIcon,
    title: 'Unlimited Refresh',
    content: 'Lorem ipsum dolor sit amet consectetur. Sit feugiat eget leo sit potenti id netus a orci.',
    priceTitle: 'Price',
    price: '$19.95/month',
    buttonText: 'Upgrade Plan',
    isCurrentPlan: false,
  },
];