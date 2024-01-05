import { ResponsivePie } from "@nivo/pie";
import { calculateTotal, type Record } from "../../../logic/babyboxStats";

interface Props {
  records: Record[];
}

export default function ChildrenTotal({ records }: Props) {
  const data = calculateTotal(records);
  return (
    <div className="lg:w-3/5 w-full aspect-video pa-5 m-auto">
      <ResponsivePie
        margin={{ top: 10, right: 10, bottom: 50, left: 10 }}
        colors={["#2e3c81", "#831843"]}
        data={data}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        arcLabelsTextColor="#ffffff"
        arcLinkLabelsThickness={8}
        enableArcLabels={false}
        enableArcLinkLabels={false}
        legends={[
          {
            anchor: "bottom",
            direction: "row",
            translateX: 15,
            translateY: 30,
            itemsSpacing: 0,
            itemWidth: 75,
            itemHeight: 18,
            itemTextColor: "#000",
            itemDirection: "left-to-right",
            itemOpacity: 1,
            symbolSize: 18,
            symbolShape: "circle",
          },
        ]}
      />
    </div>
  );
}
