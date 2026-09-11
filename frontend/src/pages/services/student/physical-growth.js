import ServiceTemplate from "@/components/ServiceTemplate";
import physicalGrowthData from "@/data/student/physical-growth";

export default function PhysicalGrowth() {
  return <ServiceTemplate data={physicalGrowthData} />;
}