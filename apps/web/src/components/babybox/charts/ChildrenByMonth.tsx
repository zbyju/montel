import { ResponsiveBar } from "@nivo/bar";
import { calculateChildrenByMonth } from "../../../logic/babyboxStats";
import type { Record } from "../../../logic/babyboxStats";

interface Props {
  records: Record[];
}

export default function ChildrenByMonth({ records }: Props) {
  const data = calculateChildrenByMonth(records);
  return (
    <div className="lg:w-3/5 w-full aspect-video pa-5 m-auto">
      <ResponsiveBar
        margin={{ top: 10, right: 0, bottom: 45, left: 40 }}
        colors={["#2e3c81", "#831843"]}
        colorBy="id"
        data={data}
        indexBy="x"
        keys={["Kluci", "Holky"]}
        minValue={0}
        enableGridX
        enableGridY
        enableLabel={false}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          legend: "Měsíc",
          legendPosition: "middle",
          legendOffset: 35,
          tickRotation: 0,
        }}
        axisLeft={{
          legend: "Celkem",
          legendPosition: "middle",
          legendOffset: -30,
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        legends={[]}
        role="application"
        ariaLabel="Nivo bar chart demo"
      />
    </div>
  );
}
