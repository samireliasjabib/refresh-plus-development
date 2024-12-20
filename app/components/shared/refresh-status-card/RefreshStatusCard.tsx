
import WarningStatusCard from "./components/WarningStatusCard";
import CriticalStatusCard from "./components/CriticalStatusCard";
import SuccessStatusCard from "./components/SuccessStatusCard";



const RefreshStatusCard = ({
  status,
}: {
  status: "warning" | "critical" | "success";
}) => {
  
  const statusComponents = {
    warning: <WarningStatusCard />,
    critical: <CriticalStatusCard />,
    success: <SuccessStatusCard />,
  };

  return statusComponents[status] || null;
};

export default RefreshStatusCard;
